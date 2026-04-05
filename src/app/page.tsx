import WaitlistForm from "@/components/waitlist-form";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}>
      {/* Nav */}
      <nav className="border-b border-black/10 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <span className="font-black text-lg tracking-tight" style={{ color: "var(--color-primary)" }}>
          Boring Combinator
        </span>
        <span
          className="text-xs font-semibold px-3 py-1 rounded-full border"
          style={{ borderColor: "var(--color-accent)", color: "var(--color-accent)" }}
        >
          Free to Pitch
        </span>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <div
          className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8"
          style={{ backgroundColor: "var(--color-accent)", color: "var(--color-primary)" }}
        >
          AI VC · 3 Rounds · 30 Minutes
        </div>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6"
          style={{ color: "var(--color-primary)" }}
        >
          Pitch Your Idea to an AI VC.{" "}
          <span
            className="relative inline-block"
            style={{ color: "var(--color-accent)" }}
          >
            Get a Live Landing Page
          </span>{" "}
          in 30 Minutes.
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10 opacity-80">
          Three rounds of adversarial debate pressure-test your market, your customer, and your go-to-market. Survive it, and you walk away with a real landing page at{" "}
          <span className="font-semibold" style={{ color: "var(--color-accent)" }}>
            yourname.boringcombinator.com
          </span>{" "}
          — ready to collect waitlist signups today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
          <a
            href="#"
            className="inline-block font-black text-base px-8 py-4 rounded-none border-2 border-black transition-transform hover:-translate-y-0.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            style={{ backgroundColor: "var(--color-accent)", color: "var(--color-primary)" }}
          >
            Pitch Your Idea — It&apos;s Free
          </a>
          <span className="text-sm opacity-60">No credit card. No code. No fluff.</span>
        </div>
        <p className="text-xs opacity-50 mt-2">
          For solo founders tired of two days in ChatGPT before learning nobody wants it.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t-2 border-black/10" />
      </div>

      {/* Value Props */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-2xl sm:text-3xl font-black text-center mb-14 tracking-tight">
          What actually happens
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              number: "01",
              title: "A VC Who Argues Back",
              description:
                "Three rounds of pointed, adversarial questions force you to sharpen your thinking on market size, customer pain, and distribution — before you write a single line of code.",
            },
            {
              number: "02",
              title: "Live Page, 30 Minutes",
              description:
                "Your landing page goes live at yourname.boringcombinator.com with a working waitlist signup — built from what you actually argued, not a generic template.",
            },
            {
              number: "03",
              title: "Traffic From Day One",
              description:
                "Get SEO blog posts and social content drafts ready to publish so you can start driving real visitors immediately, not after you figure out your content strategy.",
            },
          ].map((prop) => (
            <div
              key={prop.number}
              className="border-2 border-black p-8 relative"
              style={{ backgroundColor: "var(--color-bg)" }}
            >
              <div
                className="text-5xl font-black opacity-10 absolute top-4 right-6 leading-none select-none"
                style={{ color: "var(--color-primary)" }}
              >
                {prop.number}
              </div>
              <div
                className="w-10 h-1 mb-6"
                style={{ backgroundColor: "var(--color-accent)" }}
              />
              <h3 className="text-xl font-black mb-3 tracking-tight">{prop.title}</h3>
              <p className="text-sm leading-relaxed opacity-75">{prop.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiation */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--color-primary)", color: "#F7F4EF" }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div
            className="text-xs font-bold uppercase tracking-widest mb-6 inline-block"
            style={{ color: "var(--color-accent)" }}
          >
            Why this is different
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-8 leading-tight tracking-tight">
            Most tools give you a score.{" "}
            <span style={{ color: "var(--color-accent)" }}>We make you earn it.</span>
          </h2>
          <p className="text-lg leading-relaxed opacity-80 max-w-2xl mx-auto">
            Most validation tools ask you to describe your idea and hand you a score. Boring Combinator makes you{" "}
            <em>defend it</em>. You get pushed on the weak spots — the ones real investors would find — so by the time your landing page is live, the positioning is sharp because{" "}
            <strong className="text-white">you earned it.</strong>
          </p>
        </div>
      </section>

      {/* How it Works */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl sm:text-3xl font-black text-center mb-14 tracking-tight">
          Three rounds. Sharp positioning. One live page.
        </h2>
        <div className="space-y-0">
          {[
            {
              round: "Round 1",
              label: "The Market",
              detail: "Is this a real problem? Who has it? How many of them are there?",
            },
            {
              round: "Round 2",
              label: "The Customer",
              detail: "Who exactly buys first? Why now? Why you?",
            },
            {
              round: "Round 3",
              label: "Go-to-Market",
              detail: "How do you get the first 100 customers? What's the unfair advantage?",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center gap-4 border-2 border-black p-6"
              style={{
                borderBottom: i < 2 ? "none" : undefined,
              }}
            >
              <div
                className="text-xs font-black uppercase tracking-widest whitespace-nowrap px-3 py-1 border border-black"
                style={{ backgroundColor: "var(--color-accent)", color: "var(--color-primary)" }}
              >
                {item.round}
              </div>
              <div className="flex-1">
                <span className="font-black text-base">{item.label}</span>
                <span className="mx-2 opacity-30">—</span>
                <span className="text-sm opacity-70">{item.detail}</span>
              </div>
            </div>
          ))}
        </div>
        <div
          className="mt-0 border-2 border-t-0 border-black p-6 text-center"
          style={{ backgroundColor: "var(--color-primary)", color: "#F7F4EF" }}
        >
          <p className="font-black text-base">
            Survive all three →{" "}
            <span style={{ color: "var(--color-accent)" }}>
              Your landing page goes live at yourname.boringcombinator.com
            </span>
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section
        className="py-20 border-t-2 border-b-2 border-black"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-black text-center mb-12 tracking-tight">
            Pricing so simple it's embarrassing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-2 border-black">
            {[
              {
                tier: "Debate",
                price: "Free",
                sub: "Always",
                features: ["Full 3-round AI debate", "Scored feedback report", "Know if your idea holds up"],
                accent: false,
              },
              {
                tier: "Launch",
                price: "$29",
                sub: "One-time",
                features: ["Everything in Debate", "Live landing page hosted", "Working waitlist signup", "yourname.boringcombinator.com"],
                accent: true,
              },
              {
                tier: "Amplify",
                price: "$49",
                sub: "One-time total",
                features: ["Everything in Launch", "SEO blog post drafts", "Social content drafts", "Drive traffic from day one"],
                accent: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className="p-8 border-r-0 last:border-r-0"
                style={{
                  backgroundColor: plan.accent ? "var(--color-primary)" : "var(--color-bg)",
                  color: plan.accent ? "#F7F4EF" : "var(--color-text)",
                  borderRight: i < 2 ? "2px solid black" : undefined,
                }}
              >
                {plan.accent && (
                  <div
                    className="text-xs font-black uppercase tracking-widest mb-4 inline-block px-2 py-0.5"
                    style={{ backgroundColor: "var(--color-accent)", color: "var(--color-primary)" }}
                  >
                    Most Popular
                  </div>
                )}
                <div className="text-sm font-bold uppercase tracking-widest opacity-60 mb-2">
                  {plan.tier}
                </div>
                <div className="text-4xl font-black mb-1">{plan.price}</div>
                <div className="text-xs opacity-50 mb-6">{plan.sub}</div>
                <ul className="space-y-2">
                  {plan.features.map((f, j) => (
                    <li key={j} className="text-sm flex items-start gap-2">
                      <span style={{ color: "var(--color-accent)" }} className="mt-0.5 font-black">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist / CTA */}
      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <div
          className="text-xs font-bold uppercase tracking-widest mb-4 inline-block"
          style={{ color: "var(--color-accent)" }}
        >
          Get Early Access
        </div>
        <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">
          Be first in the debate room.
        </h2>
        <p className="text-base opacity-70 mb-10 leading-relaxed">
          Drop your email and we&apos;ll let you know the moment you can pitch your idea. Free to start. Live page in 30 minutes.
        </p>
        <WaitlistForm />
        <p className="text-xs opacity-40 mt-4">No spam. No pitch decks. Just your live page.</p>
      </section>

      {/* Footer */}
      <footer
        className="border-t-2 border-black py-8 px-6"
        style={{ backgroundColor: "var(--color-primary)", color: "#F7F4EF" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-black text-base tracking-tight">Boring Combinator</span>
          <span className="text-xs opacity-40">
            © {new Date().getFullYear()} Boring Combinator. All rights reserved.
          </span>
          <a
            href="https://boringcombinator.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-3 py-1.5 border"
            style={{ borderColor: "var(--color-accent)", color: "var(--color-accent)" }}
          >
            Built with Boring Combinator
          </a>
        </div>
      </footer>
    </main>
  );
}