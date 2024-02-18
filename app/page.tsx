import InputForm from "./components/InputForm";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-600 to-violet-600 px-8">
      <div className="flex flex-col w-full max-w-[600px] min-w-[300px] justify-between bg-white p-10 rounded-md shadow-md">
        <div className="text-2xl font-semibold text-neutral-800">
          URL Shortener
        </div>
        <div className="text-neutral-800 font-semibold mt-8 mb-2 text-lg">
          Step 1
        </div>
        <div className="text-neutral-500 mb-3">
          Paste your long URL into the text box below.
        </div>
        <InputForm />
      </div>
    </div>
  );
}
