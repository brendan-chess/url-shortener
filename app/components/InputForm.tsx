"use client";

import { useFormState, useFormStatus } from "react-dom";
import shortenUrl from "../utils/shortenUrl";
import Link from "next/link";

function Button() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-gradient-to-b from-neutral-800 to-neutral-900 shadow-md w-32 text-white font-medium py-2 rounded-md hover:scale-105 transition"
    >
      {pending ? "Working" : "Shorten"}
    </button>
  );
}

export default function InputForm() {
  const [returnValue, action] = useFormState(
    shortenUrl,
    "http://localhost:3000/"
  );

  return (
    <>
      <form action={action}>
        <div className="flex gap-4">
          <input
            type="text"
            name="url"
            placeholder="https://yourlink.com/"
            autoComplete="off"
            className="w-full rounded-md text-neutral-700 bg-white/70 shadow-sm border border-neutral-200 px-4 py-2 transition focus:ring-2 focus:ring-neutral-900 outline-none"
          />
          <Button />
        </div>
      </form>
      <div className="text-neutral-800 font-semibold mt-8 mb-2 text-lg">
        Step 2
      </div>
      <div className="text-neutral-600 mb-3">Copy your shortened URL!</div>
      <div className="flex gap-4">
        <div className="w-full rounded-md text-neutral-700 bg-white/70 shadow-sm border border-neutral-200 px-4 py-2 underline">
          <Link href={returnValue}>{returnValue}</Link>
        </div>
        <button className="bg-gradient-to-b from-neutral-800 to-neutral-900 w-32 text-white font-medium py-2 rounded-md hover:scale-105 transition">
          Copy
        </button>
      </div>
    </>
  );
}
