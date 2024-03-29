import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { findPrimeNumbersTo, countPrimeNumbersTo } from "utils/primeNumbers";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const value = Number(searchParams.get("value"));
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;

  const offset = (page - 1) * limit;

  const primeNumbers = findPrimeNumbersTo(value, limit, offset);
  const total = countPrimeNumbersTo(value);

  return NextResponse.json(
    {
      message: "Successfully found prime numbers to the given value",
      error: "",
      status_code: 200,
      data: primeNumbers,
      pagination: {
        total_items: total,
        limit: limit,
        current_page: page,
        total_pages: Math.ceil(total / limit),
        next_page: page * limit < total ? page + 1 : null,
        prev_page: page > 1 ? page - 1 : null,
      },
    },
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin":
          "https://fullstack-dev-test.vercel.app, http://localhost:3000",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}
