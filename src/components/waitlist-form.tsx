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
        body: JSON.stringify({ slug: "boringcombinator-edd667f8", email }),
      });

      if (!res.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="border-2 border-[#E8C547] bg-[#E8C547]/10 px-8 py-10 text-center">
        <span className="text-4xl block mb-4">🎉</span>
        <p className="text-[#E8C547] font-black text-xl mb-2">You're on the list.</p>
        <p className="text-[#F5F4EF]/60 text-sm">
          We'll let you know the moment the hot seat is ready. Start rehearsing your pitch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="flex-1 bg-[#F5F4EF] text-[#1A1A2E] placeholder-[#1A1A2E]/40 px-5 py-4 font-medium text-base focus:outline-none focus:ring-2 focus:ring-[#E8C547] disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading" || !email}
          className="bg-[#E8C547] text-[#1A1A2E] font-black text-sm px-8 py-4 uppercase tracking-wider hover:bg-[#F5F4EF] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {status === "loading" ? (
            <span className="flex items-center gap-2 justify-center">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Joining...
            </span>
          ) : (
            "Join Waitlist"
          )}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-3 text-red-400 text-sm font-medium text-left">{errorMsg}</p>
      )}
      <p className="mt-4 text-[#F5F4EF]/30 text-xs">
        No spam. No subscriptions. Just a heads-up when we launch.
      </p>
    </form>
  );
}