import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { findPrimeNumbersTo } from "utils/primeNumbers";
import { handleError } from "utils/errorHandler";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const value = searchParams.get("value");

  if (!value || value === "") {
    return handleError(
      "Bad request",
      "Expected a value, but none was provided",
      400
    );
  }

  const x: number = Number(value);

  switch (true) {
    case isNaN(x):
      const xType = typeof value;
      return handleError(
        "Bad request",
        `Expected numerical value not a ${xType}`,
        400
      );
    case !Number.isInteger(x):
      return handleError("Bad request", `Expected an integer not a float`, 400);
    case x < 2:
      return handleError(
        "Invalid value",
        "The smallest prime number is 2",
        422
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
