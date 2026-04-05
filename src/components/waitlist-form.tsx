"use client";

import { useState, FormEvent } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("https://boringcombinator.com/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: "boringcombinator-edd667f8", email }),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
      setEmail("");
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="border-2 border-black px-8 py-8 text-center"
        style={{ backgroundColor: "#1A1A2E", color: "#F7F4EF" }}
      >
        <div
          className="text-3xl font-black mb-2"
          style={{ color: "#F5A623" }}
        >
          You&apos;re in.
        </div>
        <p className="text-sm opacity-75">
          We&apos;ll reach out the moment the debate room is open. Get ready to pitch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full" noValidate>
      <div className="flex flex-col sm:flex-row gap-0 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="your@email.com"
          required
          disabled={status === "loading"}
          className="flex-1 px-5 py-4 text-base outline-none border-b-2 sm:border-b-0 sm:border-r-2 border-black disabled:opacity-50 placeholder:opacity-40 font-medium"
          style={{
            backgroundColor: "var(--color-bg)",
            color: "var(--color-text)",
          }}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-4 text-sm font-black uppercase tracking-widest transition-opacity disabled:opacity-60 whitespace-nowrap"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-primary)",
          }}
        >
          {status === "loading" ? "Joining…" : "Pitch Your Idea — It's Free"}
        </button>
      </div>
      {status === "error" && errorMsg && (
        <p className="mt-3 text-sm font-semibold text-red-600 text-left">{errorMsg}</p>
      )}
    </form>
  );
}