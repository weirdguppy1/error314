import ApplyForm from "./apply-form";

export default function Page() {
  return (
    <main className="min-h-screen w-full px-5 sm:px-10 py-10 sm:py-14 max-w-5xl mx-auto">
      {/* ============ HERO ============ */}
      <section className="pb-20 sm:pb-28">
        <div className="bsod-bar mb-8 text-xs sm:text-sm">
          ERROR314 — A FATAL EXCEPTION HAS OCCURRED
        </div>

        <h1 className="text-xl sm:text-3xl md:text-6xl font-bold leading-tight mb-8 break-word">
          <span
            className="glitch"
            data-text="ERROR_314: TEENAGERS_WITH_TOO_MUCH_AMBITION"
          >
            ERROR_314
          </span>
        </h1>

        <div className="space-y-4 max-w-3xl text-base sm:text-lg leading-relaxed">
          <p>
            A fatal exception 0x314 has occurred at the intersection of high
            school and ambition.
          </p>
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
