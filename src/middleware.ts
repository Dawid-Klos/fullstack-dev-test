import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { validateInput } from "utils/inputValidator";

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

  const validationErrors = [
    validateInput(x, 2, "The smallest prime number is 2"),
    validateInput(page, 1, "Page number must be greater than 0"),
    validateInput(limit, 10, "The minimum limit is 10"),
  ].filter(Boolean);

  if (validationErrors.length) {
    return validationErrors[0];
  }
}

export const config = {
  matcher: "/api/prime-numbers",
};
