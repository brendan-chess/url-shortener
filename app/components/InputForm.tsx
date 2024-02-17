"use client";

import { useState } from "react";
import SubmitButton from "./SubmitButton";
import UrlTextInput from "./UrlTextInput";

export default function InputForm() {
  const [input, setInput] = useState("");

  return (
    <div className="flex gap-4">
      <UrlTextInput setInput={setInput} />
      <SubmitButton input={input} />
    </div>
  );
}
