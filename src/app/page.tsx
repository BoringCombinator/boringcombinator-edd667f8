import WaitlistForm from "@/components/waitlist-form";

function Section({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <section
      style={{
        maxWidth: "960px",
        margin: "0 auto",
        padding: "80px 24px",
        ...style,
      }}
    >
      {children}
    </section>
  );
}

function Card({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div
      style={{
        border: "0.5px solid var(--color-border)",
        borderRadius: "12px",
        backgroundColor: "var(--color-surface)",
        padding: "32px",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
          color: "var(--color-muted)",
          letterSpacing: "0.02em",
        }}
      >
        {step}
      </span>
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "20px",
          fontWeight: 400,
          marginTop: "12px",
          lineHeight: 1.3,
          color: "var(--color-fg)",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "15px",
          lineHeight: 1.6,
          color: "var(--color-muted)",
          marginTop: "12px",
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* Nav */}
      <nav
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "24px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "17px",
            fontWeight: 400,
            color: "var(--color-fg)",
          }}
        >
          boring combinator
        </span>
        <a
          href="#waitlist"
          style={{
            fontSize: "14px",
            fontFamily: "var(--font-sans)",
            textDecoration: "none",
            padding: "8px 20px",
            borderRadius: "8px",
            backgroundColor: "var(--color-fg)",
            color: "var(--color-bg)",
            fontWeight: 500,
            transition: "opacity 150ms ease",
          }}
        >
          Join Waitlist
        </a>
      </nav>

      {/* Hero */}
      <section
        style={{
          width: "100%",
          textAlign: "center",
          padding: "80px 24px 60px",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 400,
              lineHeight: 1.15,
              color: "var(--color-fg)",
              letterSpacing: "-0.01em",
            }}
          >
            Stress-test your startup idea in 30 minutes.
            <br />
            Ship a landing page before you write code.
          </h1>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.65,
              color: "var(--color-muted)",
              marginTop: "28px",
              maxWidth: "580px",
              margin: "28px auto 0",
            }}
          >
            An AI VC debates your idea for 3 rounds. Survive, and you get a live
            landing page with waitlist signup. Find out if real people actually
            want what you're building.
          </p>
          <div style={{ marginTop: "40px" }}>
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Social proof line */}
      <div
        style={{
          textAlign: "center",
          padding: "0 24px 80px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            color: "var(--color-muted)",
            letterSpacing: "0.02em",
          }}
        >
          From idea to live landing page. No code. No designer. No weekend lost.
        </p>
      </div>

      {/* Divider */}
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div style={{ borderTop: "0.5px solid var(--color-border)" }} />
      </div>

      {/* How it works */}
      <Section>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(26px, 4vw, 36px)",
              fontWeight: 400,
              lineHeight: 1.2,
              color: "var(--color-fg)",
            }}
          >
            How it works
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--color-muted)",
              marginTop: "16px",
              maxWidth: "500px",
              margin: "16px auto 0",
            }}
          >
            Three steps. Thirty minutes. One answer: does anyone actually care?
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          <Card
            step="01"
            title="Pitch your idea"
            description="Describe what you want to build. Who it's for. Why it matters. Takes about 2 minutes."
          />
          <Card
            step="02"
            title="Survive 3 rounds"
            description="Our AI VC pokes holes in your market, customer, and go-to-market. You defend. Your thinking gets sharper with every round."
          />
          <Card
            step="03"
            title="Get your landing page"
            description="We generate a live page at yourname.boringcombinator.com with waitlist signup, ready to share. Under 30 minutes, start to finish."
          />
        </div>
      </Section>

      {/* Divider */}
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div style={{ borderTop: "0.5px solid var(--color-border)" }} />
      </div>

      {/* Why this works */}
      <Section>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(26px, 4vw, 36px)",
              fontWeight: 400,
              lineHeight: 1.2,
              color: "var(--color-fg)",
            }}
          >
            Not another "describe your idea" tool
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--color-muted)",
              marginTop: "16px",
              maxWidth: "560px",
              margin: "16px auto 0",
              lineHeight: 1.65,
            }}
          >
            Most AI startup tools give you a score and a pat on the back. We
            make you defend your idea under pressure. The same way real VCs
            actually evaluate startups.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              border: "0.5px solid var(--color-border)",
              borderRadius: "12px",
              backgroundColor: "var(--color-surface)",
              padding: "32px",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: 1.3,
                color: "var(--color-fg)",
              }}
            >
              Adversarial, not affirmative
            </h3>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.6,
                color: "var(--color-muted)",
                marginTop: "12px",
              }}
            >
              ChatGPT tells you your idea is great. Your friends nod along. Our
              AI VC finds the weak spots so you can fix them before you waste
              months building.
            </p>
          </div>
          <div
            style={{
              border: "0.5px solid var(--color-border)",
              borderRadius: "12px",
              backgroundColor: "var(--color-surface)",
              padding: "32px",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: 1.3,
                color: "var(--color-fg)",
              }}
            >
              Sharpened thinking, not vibes
            </h3>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.6,
                color: "var(--color-muted)",
                marginTop: "12px",
              }}
            >
              Your landing page copy comes from 3 rounds of pressure-tested
              reasoning. Not a template. Not a generic prompt output. Words that
              actually mean something.
            </p>
          </div>
          <div
            style={{
              border: "0.5px solid var(--color-border)",
              borderRadius: "12px",
              backgroundColor: "var(--color-surface)",
              padding: "32px",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: 1.3,
                color: "var(--color-fg)",
              }}
            >
              Live in minutes, not days
            </h3>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.6,
                color: "var(--color-muted)",
                marginTop: "12px",
              }}
            >
              Stop spending your weekend wiring together ChatGPT, Carrd, and
              Reddit posts. Go from idea to live page with real waitlist signups
              in one sitting.
            </p>
          </div>
        </div>
      </Section>

      {/* Divider */}
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div style={{ borderTop: "0.5px solid var(--color-border)" }} />
      </div>

      {/* Pricing */}
      <Section>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(26px, 4vw, 36px)",
              fontWeight: 400,
              lineHeight: 1.2,
              color: "var(--color-fg)",
            }}
          >
            Simple pricing. No subscriptions.
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--color-muted)",
              marginTop: "16px",
            }}
          >
            Pay once. Keep your page forever.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
            maxWidth: "840px",
            margin: "0 auto",
          }}
        >
          {/* Free */}
          <div
            style={{
              border: "0.5px solid var(--color-border)",
              borderRadius: "12px",
              backgroundColor: "var(--color-surface)",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--color-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Debate
            </span>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "36px",
                fontWeight: 400,
                color: "var(--color-fg)",
                marginTop: "12px",
              }}
            >
              Free
            </span>
            <p
              style={{
                fontSize: "15px",
                color: "var(--color-muted)",
                marginTop: "16px",
                lineHeight: 1.6,
                flex: 1,
              }}
            >
              3-round AI VC debate. Get a score and honest feedback on your idea.
              No credit card needed.
            </p>
          </div>
          {/* $29 */}
          <div
            style={{
              border: "0.5px solid var(--color-fg)",
              borderRadius: "12px",
              backgroundColor: "var(--color-surface)",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--color-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Landing Page
            </span>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "36px",
                fontWeight: 400,
                color: "var(--color-fg)",
                marginTop: "12px",
              }}
            >
              <span style={{ fontFamily: "var(--font-mono)" }}>$29</span>
            </span>
            <p
              style={{
                fontSize: "15px",
                color: "var(--color-muted)",
                marginTop: "16px",
                lineHeight: 1.6,
                flex: 1,
              }}
            >
              Everything in Debate, plus a live landing page at
              yourname.boringcombinator.com with waitlist signup. One-time
              payment.
            </p>
          </div>
          {/* $49 */}
          <div
            style={{
              border: "0.5px solid var(--color-border)",
              borderRadius: "12px",
              backgroundColor: "var(--color-surface)",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--color-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Full Package
            </span>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "36px",
                fontWeight: 400,
                color: "var(--color-fg)",
                marginTop: "12px",
              }}
            >
              <span style={{ fontFamily: "var(--font-mono)" }}>$49</span>
            </span>
            <p
              style={{
                fontSize: "15px",
                color: "var(--color-muted)",
                marginTop: "16px",
                lineHeight: 1.6,
                flex: 1,
              }}
            >
              Everything in Landing Page, plus SEO blog posts and social content
              drafts. Start driving traffic today, not next week.
            </p>
          </div>
        </div>
      </Section>

      {/* Divider */}
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div style={{ borderTop: "0.5px solid var(--color-border)" }} />
      </div>

      {/* Final CTA */}
      <section
        id="waitlist"
        style={{
          width: "100%",
          textAlign: "center",
          padding: "100px 24px",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(26px, 4vw, 36px)",
              fontWeight: 400,
              lineHeight: 1.2,
              color: "var(--color-fg)",
            }}
          >
            Ready to find out if your idea has legs?
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--color-muted)",
              marginTop: "16px",
              lineHeight: 1.65,
            }}
          >
            30 minutes. 3 rounds of tough questions. One live landing page. Join
            the waitlist and be first to try it.
          </p>
          <div style={{ marginTop: "40px" }}>
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "0.5px solid var(--color-border)",
          padding: "32px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            color: "var(--color-muted)",
          }}
        >
          Built with Boring Combinator
        </p>
      </footer>
    </main>
  );
}
