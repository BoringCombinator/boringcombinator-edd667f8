"use client";

import { useState } from "react";

export default function WaitlistForm({ id }: { id?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("https://boringcombinator.com/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: "boringcombinator-edd667f8",
          email,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        id={id}
        style={{
          padding: "16px 24px",
          background: "var(--color-surface)",
          borderRadius: "8px",
          border: "0.5px solid var(--color-border)",
          fontFamily: "var(--font-sans)",
          fontSize: "15px",
          color: "var(--color-fg)",
        }}
      >
        You're on the list. We'll be in touch soon.
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "10px",
        maxWidth: "460px",
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      <input
        type="email"
        required
        placeholder="you@example.com"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === "error") setStatus("idle");
        }}
        style={{
          flex: "1 1 240px",
          padding: "12px 16px",
          fontSize: "15px",
          fontFamily: "var(--font-sans)",
          border: "0.5px solid var(--color-border)",
          borderRadius: "8px",
          background: "var(--color-bg)",
          color: "var(--color-fg)",
          outline: "none",
          transition: "border-color 150ms ease",
          minWidth: 0,
        }}
        onFocus={(e) =>
          (e.currentTarget.style.borderColor = "rgba(0,0,0,0.24)")
        }
        onBlur={(e) =>
          (e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)")
        }
      />
      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          padding: "12px 28px",
          fontSize: "14px",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          background: "var(--color-fg)",
          color: "var(--color-bg)",
          border: "none",
          borderRadius: "8px",
          cursor: status === "loading" ? "wait" : "pointer",
          opacity: status === "loading" ? 0.6 : 1,
          transition: "opacity 150ms ease",
          whiteSpace: "nowrap",
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
      {status === "error" && (
        <p
          style={{
            width: "100%",
            margin: "4px 0 0",
            fontSize: "14px",
            color: "#b91c1c",
            fontFamily: "var(--font-sans)",
          }}
        >
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
