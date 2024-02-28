import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { isValidNumber, isNumberInRange } from "utils/inputValidator";
import { countPrimeNumbersTo } from "utils/primeNumbers";

export default function validationMiddleware(request: NextRequest) {
  const searchParams: URLSearchParams = request.nextUrl.searchParams;

  const value = searchParams.get("value");
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;

  // Check if value is empty before parsing to integer
  // to avoid Number("") returning 0
  if (!value || value === "") {
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

  const x: number = Number(value);

  const invalidNumberErrors = [
    isValidNumber(x),
    isValidNumber(page),
    isValidNumber(limit),
  ].filter(Boolean);

  if (invalidNumberErrors.length) {
    return invalidNumberErrors[0];
  }

  const totalPages = Math.ceil(countPrimeNumbersTo(x) / limit);

  const invalidRangeErrors = [
    isNumberInRange(limit, 1, 100, "limit"),
    isNumberInRange(x, 2, Infinity, "value"),
    isNumberInRange(page, 1, totalPages, "page"),
  ].filter(Boolean);

  if (invalidRangeErrors.length) {
    return invalidRangeErrors[0];
  }
}

export const config = {
  matcher: "/api/prime-numbers",
};
