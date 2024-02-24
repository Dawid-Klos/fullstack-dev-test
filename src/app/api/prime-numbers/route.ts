import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { findPrimeNumbersTo } from "utils/prime-numbers";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  if (!searchParams.has("value") || searchParams.get("value") === "") {
    return NextResponse.json(
      {
        message: "Bad request",
        error: "Expected a value, but none was provided",
        statusCode: 400,
        data: [],
      },
      { status: 400 }
    );
  }

  const x: number = Number(searchParams.get("value"));

  if (isNaN(x)) {
    const xType = typeof searchParams.get("value");

    return NextResponse.json(
      {
        message: "Bad request",
        error: `Expected numerical value not a ${xType}`,
        statusCode: 400,
        data: [],
      },
      { status: 400 }
    );
  }

  if (!Number.isInteger(x)) {
    return NextResponse.json(
      {
        message: "Bad request",
        error: `Expected an integer not a float`,
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
