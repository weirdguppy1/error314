"use client";

import { useEffect, useState } from "react";

type Field = {
  name: keyof FormState;
  label: string;
  placeholder: string;
  type?: "text" | "number" | "url" | "email";
  textarea?: boolean;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  age: string;
  school: string;
  build: string;
  resume: string;
  drive: string;
};

const STORAGE_KEY = "2026_v1";

const FIELDS: Field[] = [
  { name: "name", label: "name", placeholder: "your name" },
  { name: "age", label: "age", placeholder: "16-20", type: "number" },
  {
    name: "email",
    label: "email",
    placeholder: "something@something.com",
    type: "email",
  },
  { name: "phone", label: "phone", placeholder: "phone #" },
  { name: "school", label: "school", placeholder: "where you go" },
  {
    name: "build",
    label: "what_you_want_to_build",
    placeholder: "a sentence or two. be specific.",
    textarea: true,
  },
  {
    name: "resume",
    label: "impress us",
    placeholder: "github / project site / social media / anything",
    type: "url",
    textarea: true,
  },
  {
    name: "drive",
    label: "can u drive?",
    placeholder: "u can carpool, if not.",
    type: "text",
  },
];

const EMPTY_FORM: FormState = {
  name: "",
  age: "",
  school: "",
  build: "",
  resume: "",
  drive: "",
  phone: "",
  email: "",
};

export default function ApplyForm() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submittedName, setSubmittedName] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as { name?: string };
        setSubmittedName(parsed.name ?? "unknown");
      }
    } catch {
      // ignore corrupt storage
    }
    setHydrated(true);
  }, []);

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting || submittedName !== null) return;

    setIsSubmitting(true);
    setResult("Sending....");

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (response.ok && data.success) {
        try {
          localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({ name: form.name, at: new Date().toISOString() }),
          );
        } catch {
          // ignore quota / unavailable
        }
        setSubmittedName(form.name || "unknown");
        setResult("");
      } else {
        const msg = data?.detail
          ? `Error: ${data.error} — ${data.detail}`
          : data?.error
            ? `Error: ${data.error}`
            : "Error";
        setResult(msg);
        console.error("[apply] submit failed", data);
      }
    } catch {
      setResult("Error: network");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!hydrated) {
    return (
      <div className="border border-white/40 p-6 sm:p-8 bg-black/10">
        <p className="text-bsod-gray">&gt; loading_applicant_intake...</p>
      </div>
    );
  }

  if (submittedName !== null) {
    return (
      <div className="border border-white/40 p-6 sm:p-8 bg-black/10">
        <p className="text-bsod-gray">&gt; transmission_received</p>
        <p className="mt-2">
          we got it,{" "}
          <span className="text-bsod-white">{submittedName || "unknown"}</span>.
        </p>
        <p className="mt-2 text-bsod-gray">
          we&apos;ll be in touch. don&apos;t refresh this page expecting more.
        </p>
        <p className="mt-4 cursor">_</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border border-white/40 p-6 sm:p-8 bg-black/10 space-y-6"
    >
      <p className="text-bsod-gray">&gt; initializing applicant_intake.exe</p>

      {FIELDS.map((field) => (
        <label key={field.name} className="block">
          <span className="block text-bsod-gray mb-1">
            &gt; {field.label} :
          </span>
          {field.textarea ? (
            <textarea
              required
              name={field.name}
              className="cli-input resize-none"
              placeholder={field.placeholder}
              value={form[field.name]}
              onChange={(e) => update(field.name, e.target.value)}
              rows={3}
            />
          ) : (
            <input
              required
              name={field.name}
              type={field.type ?? "text"}
              className="cli-input"
              placeholder={field.placeholder}
              value={form[field.name]}
              onChange={(e) => update(field.name, e.target.value)}
              {...(field.type === "number" ? { min: 14, max: 22 } : {})}
            />
          )}
        </label>
      ))}

      <div className="pt-2">
        <button disabled={isSubmitting} type="submit" className="key-prompt">
          {result !== "" ? result : "[ submit ]"}
        </button>
      </div>
    </form>
  );
}
