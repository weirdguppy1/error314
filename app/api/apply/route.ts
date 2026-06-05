import type { NextRequest } from "next/server";

type ApplyPayload = {
  name: string;
  email: string;
  phone: string;
  age: string;
  school: string;
  build: string;
  resume: string;
  drive: string;
};

const TO_ADDRESS = "mark.fang.stl@gmail.com";
const FROM_ADDRESS = process.env.RESEND_FROM ?? "error314@markfang.dev";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isValidPayload(v: unknown): v is ApplyPayload {
  if (!v || typeof v !== "object") return false;
  const keys = ["name", "email", "phone", "age", "school", "build", "resume", "drive"];
  return keys.every((k) => typeof (v as Record<string, unknown>)[k] === "string");
}

async function sendEmail(args: {
  apiKey: string;
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${args.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_ADDRESS,
      to: args.to,
      subject: args.subject,
      html: args.html,
      text: args.text,
      ...(args.replyTo ? { reply_to: args.replyTo } : {}),
    }),
  });
  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`resend ${res.status}: ${detail}`);
  }
  return res.json();
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "RESEND_API_KEY not configured" }, { status: 500 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid json" }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return Response.json({ error: "invalid payload" }, { status: 400 });
  }

  const fields: Array<[string, string]> = [
    ["name", body.name],
    ["age", body.age],
    ["email", body.email],
    ["phone", body.phone],
    ["school", body.school],
    ["what_you_want_to_build", body.build],
    ["impress_us", body.resume],
    ["can_drive", body.drive],
  ];

  const adminText = fields.map(([k, v]) => `${k}: ${v}`).join("\n");
  const adminHtml = `<h2>new error314 application</h2><table cellpadding="6" style="border-collapse:collapse;font-family:monospace">${fields
    .map(
      ([k, v]) =>
        `<tr><td style="vertical-align:top;border:1px solid #ccc"><b>${escapeHtml(
          k,
        )}</b></td><td style="border:1px solid #ccc;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
    )
    .join("")}</table>`;

  const applicantName = body.name || "applicant";
  const applicantText = `> transmission_received

we got your application, ${applicantName}.

you'll hear back from us. don't refresh anything expecting more.

— error314`;
  const applicantHtml = `<div style="font-family:monospace;color:#fff;background:#000;padding:24px">
  <p>&gt; transmission_received</p>
  <p>we got your application, <b>${escapeHtml(applicantName)}</b>.</p>
  <p>you&#39;ll hear back from us.</p>
  <p>— error314</p>
</div>`;

  try {
    await sendEmail({
      apiKey,
      to: TO_ADDRESS,
      subject: `error314 application — ${body.name || "unknown"}`,
      text: adminText,
      html: adminHtml,
      replyTo: body.email || undefined,
    });
  } catch (err) {
    console.error("[apply] admin email failed:", err);
    return Response.json(
      { error: "failed to deliver admin email", detail: String(err) },
      { status: 502 },
    );
  }

  if (body.email) {
    try {
      await sendEmail({
        apiKey,
        to: body.email,
        subject: "error314 — transmission_received",
        text: applicantText,
        html: applicantHtml,
      });
    } catch (err) {
      console.error("[apply] applicant confirmation failed:", err);
    }
  }

  return Response.json({ success: true });
}
