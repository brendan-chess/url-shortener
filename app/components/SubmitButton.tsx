"use client";

type SubmitButtonProps = {
  input: string;
};

export default function SubmitButton({ input }: SubmitButtonProps) {
  return (
    <button
      onClick={() => console.log(input)}
      className="bg-neutral-900 text-white px-4 py-2 rounded-md hover:bg-neutral-700 transition"
    >
      Shorten
    </button>
  );
}
