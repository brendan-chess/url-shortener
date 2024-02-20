import InputForm from "./components/InputForm";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center px-8 bg-[url('./background.svg')] bg-cover">
      <div className="flex flex-col w-full max-w-[600px] min-w-[300px] justify-between p-8 rounded-md shadow-xl bg-gradient-to-b from-white/85 to-white/80">
        <div className="text-2xl font-semibold text-neutral-800">
          URL Shortener
        </div>
        <div className="text-neutral-800 font-semibold mt-8 mb-2 text-lg">
          Step 1
        </div>
        <div className="text-neutral-600 mb-3">
          Paste your long URL into the text box below.
        </div>
        <InputForm />
      </div>
    </div>
  );
}
