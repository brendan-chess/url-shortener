"use server";
import prisma from "@/prisma/prisma";
import { UrlHash } from "@prisma/client";

export default async function hashToUrl(hash: string) {
  let urlHash: UrlHash | null = await prisma.urlHash.findFirst({
    where: {
      hash: {
        equals: hash,
      },
    },
  });

  if (urlHash == null) return null;

  return urlHash.url;
}
