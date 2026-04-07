"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("https://boringcombinator.com/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: "boringcombinator-edd667f8",
          email,
        }),
      });

      if (!res.ok) throw new Error("Something went wrong. Try again.");
      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "20px 0",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "18px",
            color: "var(--color-fg)",
          }}
        >
          You're on the list. We'll be in touch.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        width: "100%",
        maxWidth: "440px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          gap: "8px",
          flexDirection: "row",
        }}
      >
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            flex: 1,
            padding: "12px 16px",
            fontSize: "14px",
            fontFamily: "var(--font-sans)",
            border: "0.5px solid var(--color-border)",
            borderRadius: "8px",
            backgroundColor: "var(--color-bg)",
            color: "var(--color-fg)",
            outline: "none",
            transition: "border-color 150ms ease",
            minWidth: 0,
          }}
          onFocus={(e) =>
            (e.currentTarget.style.borderColor = "var(--color-fg)")
          }
          onBlur={(e) =>
            (e.currentTarget.style.borderColor = "var(--color-border)")
          }
        />
        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            padding: "12px 24px",
            fontSize: "14px",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            backgroundColor: "var(--color-fg)",
            color: "var(--color-bg)",
            border: "none",
            borderRadius: "8px",
            cursor: status === "loading" ? "wait" : "pointer",
            transition: "opacity 150ms ease",
            whiteSpace: "nowrap",
            opacity: status === "loading" ? 0.7 : 1,
          }}
          onMouseEnter={(e) => {
            if (status !== "loading") e.currentTarget.style.opacity = "0.8";
          }}
          onMouseLeave={(e) => {
            if (status !== "loading") e.currentTarget.style.opacity = "1";
          }}
        >
          {status === "loading" ? "Joining..." : "Join Waitlist"}
        </button>
      </div>
      {status === "error" && (
        <p style={{ fontSize: "13px", color: "#b91c1c" }}>{errorMsg}</p>
      )}
    </form>
  );
}
