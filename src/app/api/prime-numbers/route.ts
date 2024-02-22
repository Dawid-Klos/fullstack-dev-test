import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const x: number = parseInt(searchParams.get("value") || "0");

  if (isNaN(x)) {
    const xType = typeof searchParams.get("value");

    return NextResponse.json(
      {
        message: "Invalid value",
        error: `Expected numerical value not a ${xType}`,
        statusCode: 400,
        data: [],
      },
      { status: 400 }
    );
  }

  if (x < 2) {
    return NextResponse.json(
      {
        message: "Invalid value",
        error: "The smallest prime number is 2",
        statusCode: 400,
        data: [],
      },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { message: "Success", error: "", statusCode: 200, data: [x] },
    { status: 200 }
  );
}
