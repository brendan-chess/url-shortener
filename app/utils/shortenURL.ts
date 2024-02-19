"use server";

export default async function shortenUrl(
  currentState: string,
  formData: FormData
): Promise<string> {
  const url = formData.get("url");

  const res = await fetch(`http://localhost:3000/api/shorten`, {
    method: "POST",
    body: JSON.stringify({ url }),
  });

  const short: string = await res.json();

  const shortenedURL = `https://localhost:3000/${short}`;

  return shortenedURL;
}
