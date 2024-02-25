import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { withValidation } from "./middleware";

import { findPrimeNumbersTo } from "utils/primeNumbers";

export const GET = withValidation(async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;

  const value = Number(searchParams.get("value"));
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;

  const offset = (page - 1) * limit;

  const primeNumbers = findPrimeNumbersTo(value, limit, offset);

  return NextResponse.json(
    {
      message: "Successfully found prime numbers to the given value",
      error: "",
      statusCode: 200,
      data: primeNumbers,
    },
    { status: 200 }
  );
});
