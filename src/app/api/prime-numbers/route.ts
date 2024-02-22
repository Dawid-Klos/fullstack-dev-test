import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { findPrimeNumbersTo } from "utils/prime-numbers";

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
        statusCode: 422,
        data: [],
      },
      { status: 422 }
    );
  }

  const primeNumbers = findPrimeNumbersTo(x);

  return NextResponse.json(
    {
      message: "Successfully found prime numbers to the given value",
      error: "",
      statusCode: 200,
      data: primeNumbers,
    },
    { status: 200 }
  );
}
