"use client";

import { useFormState, useFormStatus } from "react-dom";
import shortenURL from "../utils/shortenURL";

function Button() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-neutral-900 w-32 text-white py-2 rounded-md hover:bg-neutral-800 hover:scale-105 transition"
    >
      {pending ? "Working" : "Shorten"}
    </button>
  );
}

export default function InputForm() {
  const [returnValue, action] = useFormState(
    shortenURL,
    "https://localhost:3000/"
  );

  return (
    <>
      <form action={action}>
        <div className="flex gap-4">
          <input
            type="text"
            name="url"
            placeholder="https://yourlink.com/"
            className="w-full rounded-md text-neutral-700 border border-neutral-200 px-4 py-2 transition focus:ring focus:ring-neutral-900 outline-none"
          />
          <Button />
        </div>
      </form>
      <div className="text-neutral-800 font-semibold mt-8 mb-2 text-lg">
        Step 2
      </div>
      <div className="text-neutral-500 mb-3">Copy your shortened URL!</div>
      <div className="flex gap-4">
        <div className="w-full rounded-md text-neutral-700 border border-neutral-200 px-4 py-2 transition focus:ring focus:ring-neutral-900 outline-none">
          {returnValue}
        </div>
        <button className="bg-neutral-900 w-32 text-white py-2 rounded-md hover:bg-neutral-800 hover:scale-105 transition">
          Copy
        </button>
      </div>
    </>
  );
}
