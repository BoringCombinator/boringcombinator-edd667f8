import WaitlistForm from "@/components/waitlist-form";

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={className}
      style={{
        maxWidth: "960px",
        margin: "0 auto",
        padding: "80px 24px",
      }}
    >
      {children}
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "var(--color-surface)",
        border: "0.5px solid var(--color-border)",
        borderRadius: "12px",
        padding: "32px",
      }}
    >
      {children}
    </div>
  );
}

function StepNumber({ n }: { n: number }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "13px",
        color: "var(--color-muted)",
        display: "block",
        marginBottom: "12px",
        letterSpacing: "0.02em",
      }}
    >
      {String(n).padStart(2, "0")}
    </span>
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
          padding: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "18px",
            color: "var(--color-fg)",
          }}
        >
          boring combinator
        </span>
        <a
          href="#waitlist"
          className="nav-cta"
        >
          Join Waitlist
        </a>
      </nav>

      {/* Hero */}
      <section
        style={{
          padding: "80px 24px 100px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              marginBottom: "24px",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              color: "var(--color-fg)",
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
              maxWidth: "560px",
              margin: "0 auto 40px",
              fontFamily: "var(--font-sans)",
            }}
          >
            An AI VC debates your idea for 3 rounds. Survive the challenge and
            get a live landing page with waitlist signup. Find out if real people
            actually want what you're building.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <WaitlistForm id="waitlist-hero" />
          </div>
        </div>
      </section>

      {/* The Problem */}
      <div style={{ background: "var(--color-surface)" }}>
        <Section>
          <div style={{ maxWidth: "640px" }}>
            <p
              style={{
                fontSize: "13px",
                fontFamily: "var(--font-mono)",
                color: "var(--color-muted)",
                marginBottom: "16px",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              The problem
            </p>
            <h2
              style={{
                fontSize: "clamp(24px, 3.5vw, 36px)",
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                marginBottom: "24px",
                lineHeight: 1.25,
              }}
            >
              You spent a week validating. You still don't know if anyone wants
              it.
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "var(--color-muted)",
                marginBottom: "16px",
              }}
            >
              You asked ChatGPT if your idea was good. It said yes. You asked
              your friends. They said "that's cool." You spent two days fighting
              with a page builder. You posted on Reddit and got three upvotes.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "var(--color-muted)",
              }}
            >
              A week gone. Zero signal on real demand. That's the default path
              for solo founders right now.
            </p>
          </div>
        </Section>
      </div>

      {/* How It Works */}
      <Section>
        <p
          style={{
            fontSize: "13px",
            fontFamily: "var(--font-mono)",
            color: "var(--color-muted)",
            marginBottom: "16px",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          How it works
        </p>
        <h2
          style={{
            fontSize: "clamp(24px, 3.5vw, 36px)",
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            marginBottom: "48px",
            lineHeight: 1.25,
            maxWidth: "560px",
          }}
        >
          From raw idea to live landing page in 30 minutes
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          <Card>
            <StepNumber n={1} />
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "20px",
                fontWeight: 400,
                marginBottom: "12px",
              }}
            >
              Describe your idea
            </h3>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.6,
                color: "var(--color-muted)",
              }}
            >
              Two sentences is enough. Who is it for and what does it do? No
              pitch deck required.
            </p>
          </Card>

          <Card>
            <StepNumber n={2} />
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "20px",
                fontWeight: 400,
                marginBottom: "12px",
              }}
            >
              Defend it in 3 rounds
            </h3>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.6,
                color: "var(--color-muted)",
              }}
            >
              Our AI VC pressure-tests your market, customer, and go-to-market.
              It's adversarial on purpose. Your thinking gets sharper with each
              round.
            </p>
          </Card>

          <Card>
            <StepNumber n={3} />
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "20px",
                fontWeight: 400,
                marginBottom: "12px",
              }}
            >
              Get a live page
            </h3>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.6,
                color: "var(--color-muted)",
              }}
            >
              Your landing page goes live at yourname.boringcombinator.com with
              waitlist signup built in. Start collecting emails today.
            </p>
          </Card>
        </div>
      </Section>

      {/* Value Props */}
      <div style={{ background: "var(--color-surface)" }}>
        <Section>
          <p
            style={{
              fontSize: "13px",
              fontFamily: "var(--font-mono)",
              color: "var(--color-muted)",
              marginBottom: "16px",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            What you get
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              marginBottom: "48px",
              lineHeight: 1.25,
              maxWidth: "560px",
            }}
          >
            Everything you need to test demand. Nothing you don't.
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
            }}
          >
            {[
              {
                title: "Adversarial idea debate",
                desc: "Three rounds of hard questions about your market, customer, and distribution. Sharper than asking ChatGPT. Sharper than asking your friends. The kind of pressure that makes weak ideas obvious and good ideas better.",
              },
              {
                title: "Live landing page with waitlist",
                desc: "A clean, hosted landing page at yourname.boringcombinator.com. Built from sharpened thinking, not vibes. Waitlist signup included. Live in under 30 minutes.",
              },
              {
                title: "SEO blog posts and social drafts",
                desc: "Content that drives traffic from day one. Blog posts targeting keywords your customers are already searching for. Social media drafts ready to copy and paste. No more staring at a blank page.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 1fr",
                  gap: "24px",
                  alignItems: "start",
                }}
                className="value-prop-row"
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: 1.35,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.65,
                    color: "var(--color-muted)",
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Differentiation */}
      <Section>
        <div
          style={{
            maxWidth: "640px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              marginBottom: "24px",
              lineHeight: 1.25,
            }}
          >
            This is not "describe your idea and get a score"
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "var(--color-muted)",
              marginBottom: "16px",
            }}
          >
            Most validation tools give you a pat on the back and a number.
            That's not validation. That's a horoscope.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "var(--color-muted)",
            }}
          >
            Boring Combinator forces you to defend your idea under adversarial
            pressure. The same way real VCs evaluate startups. So your landing
            page is built on tested assumptions, not wishful thinking.
          </p>
        </div>
      </Section>

      {/* Pricing */}
      <div style={{ background: "var(--color-surface)" }}>
        <Section>
          <p
            style={{
              fontSize: "13px",
              fontFamily: "var(--font-mono)",
              color: "var(--color-muted)",
              marginBottom: "16px",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Pricing
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              marginBottom: "48px",
              lineHeight: 1.25,
            }}
          >
            Simple. No subscriptions.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                name: "Debate",
                price: "Free",
                desc: "3-round AI VC debate plus a score. See how your idea holds up before spending a dollar.",
              },
              {
                name: "Launch",
                price: "$29",
                desc: "Everything in Debate, plus a live landing page with waitlist at yourname.boringcombinator.com. One-time payment.",
              },
              {
                name: "Grow",
                price: "$49",
                desc: "Everything in Launch, plus SEO blog posts and social content drafts to start driving traffic immediately.",
              },
            ].map((tier) => (
              <div
                key={tier.name}
                style={{
                  background: "var(--color-bg)",
                  border: "0.5px solid var(--color-border)",
                  borderRadius: "12px",
                  padding: "32px",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                    marginBottom: "8px",
                    color: "var(--color-fg)",
                  }}
                >
                  {tier.name}
                </p>
                <p
                  style={{
                    fontSize: "36px",
                    fontFamily: "var(--font-mono)",
                    fontWeight: 400,
                    marginBottom: "16px",
                    lineHeight: 1.1,
                    color: "var(--color-fg)",
                  }}
                >
                  {tier.price}
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.6,
                    color: "var(--color-muted)",
                  }}
                >
                  {tier.desc}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Final CTA */}
      <Section>
        <div
          id="waitlist"
          style={{
            maxWidth: "560px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              marginBottom: "16px",
              lineHeight: 1.25,
            }}
          >
            Stop guessing. Start testing.
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "var(--color-muted)",
              marginBottom: "32px",
            }}
          >
            Join the waitlist. We'll let you in soon.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <WaitlistForm id="waitlist" />
          </div>
        </div>
      </Section>

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
            fontFamily: "var(--font-sans)",
          }}
        >
          Built with Boring Combinator
        </p>
      </footer>

      <style>{`
        .nav-cta {
          font-size: 14px;
          font-family: var(--font-sans);
          font-weight: 500;
          color: var(--color-bg);
          background: var(--color-fg);
          padding: 8px 20px;
          border-radius: 8px;
          text-decoration: none;
          transition: opacity 150ms ease;
        }
        .nav-cta:hover {
          opacity: 0.8;
        }
        @media (max-width: 600px) {
          .value-prop-row {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </main>
  );
}
