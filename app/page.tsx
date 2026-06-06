import ApplyForm from "./apply-form";

export default function Page() {
  return (
    <main className="min-h-screen w-full px-5 sm:px-10 py-10 sm:py-14 max-w-5xl mx-auto">
      {/* ============ HERO ============ */}
      <section className="pb-20 sm:pb-28">
        <div className="bsod-bar mb-8 text-xs sm:text-sm">
          ERROR314 — A FATAL EXCEPTION HAS OCCURRED
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight mb-8 break-word">
          <span
            className="flicker"
            data-text="ERROR_314: TEENAGERS_WITH_TOO_MUCH_AMBITION"
          >
            ERROR_314
          </span>
        </h1>

        <div className="space-y-4 max-w-3xl text-base sm:text-lg leading-relaxed">
          <p className="text-bsod-gray">
            ERROR314 is a teen hack club in St. Louis, MO. summers only.
            <br />
            15 people, max.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:items-center">
          <a href="#apply" className="key-prompt text-base sm:text-lg">
            [ press ENTER to apply ]
          </a>
          <span className="text-bsod-gray text-sm">
            <span className="cursor-inline" /> or _ continue
          </span>
        </div>

        <div className="mt-8 flex gap-4 text-bsod-gray">
          <a
            href="https://discord.gg/CAguxrdsfC"
            target="_blank"
            rel="noreferrer"
            aria-label="Discord"
            className="hover:text-bsod-white transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/125573967"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-bsod-white transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:text-bsod-white transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
          </a>
        </div>

        <div className="mt-16 text-bsod-dim text-xs sm:text-sm space-y-1">
          <p>* Press any key to continue _</p>
          <p>* Not an LLM hallucination.</p>
          <p>* Wow so quirky.</p>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <Section heading="ABOUT.txt" id="about">
        <p>
          ERROR314 is a place for{" "}
          <span className="text-bsod-white">16–20 year-old teen founders</span>{" "}
          in St. Louis to meet up, hang out, code, and build real ventures
          together.
        </p>
        <p className="text-bsod-gray">
          &gt; runs June-Aug (exact dates &amp; location: TBD)
          <br />
          &gt; limit: 15 students
          <br />
          &gt; cost: $0
          <br />
          &gt; you bring: a laptop and something you actually want to build
        </p>
      </Section>

      {/* ============ WHAT WE BUILD ============ */}
      <Section heading="WHAT_WE_BUILD.log" id="build">
        <p>
          projects. ventures. social media campaigns. things that make a dent.
        </p>
        <ul className="space-y-2 text-bsod-gray pl-6">
          <li className="relative">
            <span className="absolute -left-6 text-bsod-white">&gt;</span>
            things people use
          </li>
          <li className="relative">
            <span className="absolute -left-6 text-bsod-white">&gt;</span>
            things that go viral on a sunday at 2am
          </li>
          <li className="relative">
            <span className="absolute -left-6 text-bsod-white">&gt;</span>
            small companies that ship to one real customer
          </li>
          <li className="relative">
            <span className="absolute -left-6 text-bsod-white">&gt;</span>
            weird art, weird tools, weird things
          </li>
        </ul>

        <div className="border border-white/40 p-4 sm:p-5 text-sm sm:text-base bg-black/10">
          <p className="text-bsod-gray uppercase tracking-wider text-xs mb-2">
            // side mission
          </p>
          <p>help the STL community while we at it.</p>
        </div>
      </Section>

      {/* ============ HOW IT WORKS ============ */}
      <Section heading="HOW_IT_WORKS.sh" id="how">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              n: "01",
              cmd: "$ apply",
              desc: "fill out the form below. takes about 4 minutes if you don't overthink it.",
            },
            {
              n: "02",
              cmd: "$ get in",
              desc: "we read everything. 15 spots. we email and text back either way.",
            },
            {
              n: "03",
              cmd: "$ show up & build",
              desc: "this summer. you bring something to build. we bring the vibes and the people.",
            },
          ].map((step) => (
            <div
              key={step.n}
              className="border border-white/40 p-4 bg-black/10"
            >
              <p className="text-bsod-dim text-xs mb-2">step {step.n}</p>
              <p className="text-bsod-white font-bold mb-2">{step.cmd}</p>
              <p className="text-bsod-gray text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ============ APPLY ============ */}
      <Section heading="APPLY.exe" id="apply">
        <p className="text-bsod-gray">
          &gt; running: applicant_intake.exe
          <br />
          &gt; status: accepting connections
          <br />
          &gt; deadline: rolling. apply when you&apos;re ready.
        </p>

        <ApplyForm />
      </Section>

      {/* ============ FOOTER ============ */}
      <footer className="mt-24 pt-8 border-t border-white/30 text-bsod-dim text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <p>ERROR314 &copy; 2025 — St. Louis, MO</p>
        <p className="text-bsod-gray">
          <span className="text-bsod-white">314</span>{" "}
          <span className="cursor-inline" />
        </p>
      </footer>
    </main>
  );
}

function Section({
  heading,
  id,
  children,
}: {
  heading: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-12 sm:py-16 border-t border-white/30">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 flicker">
        <span className="text-bsod-gray">&gt;</span> {heading}
      </h2>
      <div className="space-y-4 text-base sm:text-lg leading-relaxed max-w-3xl">
        {children}
      </div>
    </section>
  );
}
