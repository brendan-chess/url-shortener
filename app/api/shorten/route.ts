import { NextRequest, NextResponse } from "next/server";
import hash from "fnv1a";
import prisma from "@/prisma/prisma";
import { UrlHash } from "@prisma/client";

export async function POST(request: NextRequest) {
  const req: { url: string } = await request.json();

  const value = hash(req.url).toString(36);

  let urlHash: UrlHash | null = await prisma.urlHash.findFirst({
    where: {
      hash: {
        equals: value,
      },
    },
  });

  if (urlHash == null) {
    urlHash = await prisma.urlHash.create({
      data: {
        url: req.url,
        hash: value,
      },
    });
  }

  return NextResponse.json(urlHash.hash);
}
