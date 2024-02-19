import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";
import { UrlHash } from "@prisma/client";
import { redirect } from "next/navigation";

export async function POST(request: NextRequest) {
  const req: { hash: string } = await request.json();

  let urlHash: UrlHash | null = await prisma.urlHash.findFirst({
    where: {
      hash: {
        equals: req.hash,
      },
    },
  });

  if (urlHash == null) return NextResponse.json(null);

  redirect(urlHash.url);
}
