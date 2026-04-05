import WaitlistForm from "@/components/waitlist-form";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F4EF] text-[#1A1A2E]">
      {/* Nav */}
      <nav className="px-6 py-5 flex items-center justify-between max-w-5xl mx-auto">
        <span className="font-black text-lg tracking-tight">
          Boring<span className="text-[#E8C547]">Combinator</span>
        </span>
        <a
          href="#waitlist"
          className="text-sm font-semibold border-2 border-[#1A1A2E] px-4 py-2 hover:bg-[#1A1A2E] hover:text-[#F5F4EF] transition-colors"
        >
          Join Waitlist
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-24">
        <div className="inline-block bg-[#E8C547] text-[#1A1A2E] text-xs font-black uppercase tracking-widest px-3 py-1 mb-8">
          For solo founders
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight max-w-3xl mb-6">
          Your startup idea has 30 minutes to survive a VC interrogation.
        </h1>
        <p className="text-lg sm:text-xl text-[#1A1A2E]/70 max-w-2xl mb-10 leading-relaxed">
          An AI investor debates you across 3 brutal rounds — market size, customer reality, go-to-market. If your idea holds up, you walk away with a live landing page and a waitlist. If it doesn't, better to find out now.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <a
            href="#waitlist"
            className="bg-[#1A1A2E] text-[#E8C547] font-black text-base px-8 py-4 hover:bg-[#E8C547] hover:text-[#1A1A2E] transition-colors inline-block"
          >
            Pitch Your Idea — It's Free
          </a>
          <span className="text-sm text-[#1A1A2E]/50 self-center">No credit card. No fluff. Just fire.</span>
        </div>

        {/* Target audience callout */}
        <div className="mt-16 border-l-4 border-[#E8C547] pl-6 max-w-2xl">
          <p className="text-[#1A1A2E]/60 text-sm font-medium uppercase tracking-wider mb-1">This is for you if</p>
          <p className="text-[#1A1A2E] text-base leading-relaxed">
            You've spent two days in ChatGPT tabs and still don't know if anyone actually wants the thing you're building.
          </p>
        </div>
      </section>

      {/* Rounds visual */}
      <section className="bg-[#1A1A2E] text-[#F5F4EF] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#E8C547] text-xs font-black uppercase tracking-widest mb-8">3 Rounds. No Mercy.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#F5F4EF]/10">
            {[
              { round: "01", label: "Market Size", detail: "Is this real or did you just read a Statista headline?" },
              { round: "02", label: "Customer Reality", detail: "Who specifically is buying this, and why would they switch?" },
              { round: "03", label: "Go-to-Market", detail: "How do you get your first 100 customers without a following?" },
            ].map((r) => (
              <div key={r.round} className="p-8 bg-[#1A1A2E] border border-[#F5F4EF]/10">
                <span className="text-[#E8C547] font-black text-3xl block mb-3">{r.round}</span>
                <h3 className="font-black text-lg mb-2">{r.label}</h3>
                <p className="text-[#F5F4EF]/50 text-sm leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-[#E8C547] bg-[#1A1A2E] inline-block text-xs font-black uppercase tracking-widest px-3 py-1 mb-10">What you get</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "A Real Fight",
              description: "Three rounds of adversarial back-and-forth pressure-test your market, your customer, and your plan — not a score out of 10, but actual hard questions you have to answer.",
              icon: "⚔️",
            },
            {
              title: "Live Page, Fast",
              description: "Survive the debate and your landing page goes live at yourname.boringcombinator.com in under 30 minutes — waitlist signup included, no Carrd account required.",
              icon: "🚀",
            },
            {
              title: "Traffic From Day One",
              description: "Get SEO blog posts and social content drafted from your sharpened pitch so you can start driving real traffic this week, not after you've figured out Webflow.",
              icon: "📈",
            },
          ].map((vp) => (
            <div
              key={vp.title}
              className="border-2 border-[#1A1A2E] p-8 hover:bg-[#1A1A2E] hover:text-[#F5F4EF] transition-colors group"
            >
              <span className="text-3xl block mb-4">{vp.icon}</span>
              <h3 className="font-black text-xl mb-3 group-hover:text-[#E8C547]">{vp.title}</h3>
              <p className="text-sm leading-relaxed text-[#1A1A2E]/70 group-hover:text-[#F5F4EF]/70">
                {vp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiation */}
      <section className="bg-[#E8C547] py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#1A1A2E]/50 text-xs font-black uppercase tracking-widest mb-4">Why not just use ChatGPT</p>
            <h2 className="font-black text-3xl sm:text-4xl leading-tight text-[#1A1A2E]">
              Most tools hand you a score. This one argues back.
            </h2>
          </div>
          <div>
            <p className="text-[#1A1A2E]/80 text-base leading-relaxed">
              Boring Combinator puts you in the hot seat the same way a real investor would — so when you do talk to humans, you're not winging it. Describe your idea and get a score? Anyone can do that. Defend your idea under pressure? That's where you find out if it's real.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-[#E8C547] bg-[#1A1A2E] inline-block text-xs font-black uppercase tracking-widest px-3 py-1 mb-10">Pricing</p>
        <h2 className="font-black text-3xl sm:text-4xl mb-12 max-w-xl">Simple. No subscriptions. No surprises.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="border-2 border-[#1A1A2E] p-8">
            <p className="text-3xl font-black mb-1">Free</p>
            <p className="text-[#1A1A2E]/50 text-xs uppercase tracking-wider font-semibold mb-6">AI Debate + Score</p>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><span className="text-[#E8C547] font-black">✓</span> Full 3-round debate</li>
              <li className="flex gap-2"><span className="text-[#E8C547] font-black">✓</span> Brutally honest feedback</li>
              <li className="flex gap-2"><span className="text-[#E8C547] font-black">✓</span> Find out if it's worth building</li>
            </ul>
          </div>
          <div className="border-2 border-[#1A1A2E] bg-[#1A1A2E] text-[#F5F4EF] p-8 relative">
            <div className="absolute -top-3 left-6 bg-[#E8C547] text-[#1A1A2E] text-xs font-black px-3 py-1 uppercase tracking-wider">Most popular</div>
            <p className="text-3xl font-black mb-1 text-[#E8C547]">$29</p>
            <p className="text-[#F5F4EF]/50 text-xs uppercase tracking-wider font-semibold mb-6">One-time</p>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><span className="text-[#E8C547] font-black">✓</span> Everything in Free</li>
              <li className="flex gap-2"><span className="text-[#E8C547] font-black">✓</span> Live landing page published</li>
              <li className="flex gap-2"><span className="text-[#E8C547] font-black">✓</span> Waitlist signup built-in</li>
            </ul>
          </div>
          <div className="border-2 border-[#1A1A2E] p-8">
            <p className="text-3xl font-black mb-1">$49</p>
            <p className="text-[#1A1A2E]/50 text-xs uppercase tracking-wider font-semibold mb-6">One-time, total</p>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><span className="text-[#E8C547] font-black">✓</span> Everything in $29</li>
              <li className="flex gap-2"><span className="text-[#E8C547] font-black">✓</span> SEO blog posts drafted</li>
              <li className="flex gap-2"><span className="text-[#E8C547] font-black">✓</span> Social content from your pitch</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist" className="bg-[#1A1A2E] py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#E8C547] text-xs font-black uppercase tracking-widest mb-4">Get early access</p>
          <h2 className="font-black text-3xl sm:text-4xl text-[#F5F4EF] mb-4 leading-tight">
            Pitch Your Idea —<br />It's Free
          </h2>
          <p className="text-[#F5F4EF]/50 text-base mb-10">
            Join the waitlist and be first in the hot seat when we launch.
          </p>
          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F5F4EF] border-t-2 border-[#1A1A2E]/10 px-6 py-10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-black text-base tracking-tight">
            Boring<span className="text-[#E8C547]">Combinator</span>
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#1A1A2E]/40">© {new Date().getFullYear()} Boring Combinator. All rights reserved.</span>
          </div>
          <div className="bg-[#1A1A2E] text-[#E8C547] text-xs font-black px-4 py-2 tracking-wider uppercase">
            Built with Boring Combinator
          </div>
        </div>
      </footer>
    </main>
  );
}