import InputForm from "./components/InputForm";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-violet-200 to-pink-200">
      <div className="flex flex-col gap-4 bg-white p-10 rounded-md shadow-md">
        <div className="text-xl font-semibold text-neutral-800">
          URL Shortener
        </div>
        <div className="text-neutral-500">
          Paste your link into the text box below.
        </div>
        <InputForm />
      </div>
    </div>
  );
}
