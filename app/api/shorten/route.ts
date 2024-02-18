import { NextRequest, NextResponse } from "next/server";
import hash from "fnv1a";

export async function POST(request: NextRequest) {
  const req: { url: string } = await request.json();

  const value = hash(req.url);

  return NextResponse.json(value.toString(36));
}
