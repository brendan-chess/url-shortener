"use client";

import { Dispatch, SetStateAction } from "react";

type UrlTextInputProps = {
  setInput: Dispatch<SetStateAction<string>>;
};

export default function UrlTextInput({ setInput }: UrlTextInputProps) {
  return (
    <input
      type="text"
      placeholder="https://yourlink.com/"
      onChange={(event) => setInput(event.target.value)}
      className="rounded-md text-neutral-700 border border-neutral-200 px-4 py-2 w-80 transition focus:ring focus:ring-neutral-200 outline-none"
    />
  );
}
