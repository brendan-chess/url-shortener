import { redirect } from "next/navigation";
import hashToUrl from "../actions/hashToUrl";

export default async function Page({ params }: { params: { hash: string } }) {
  const url = await hashToUrl(params.hash);

  if (url != null) redirect(url);

  return <div>Link not found</div>;
}
