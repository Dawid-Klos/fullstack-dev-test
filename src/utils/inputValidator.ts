import { NextResponse } from "next/server";

export const validateInput = (
  num: number,
  minValue: number,
  minValueError: string
) => {
  if (Number.isNaN(num)) {
    return NextResponse.json(
      {
        message: "Bad request",
        error: "Expected numerical value",
        statusCode: 400,
        data: [],
      },
      { status: 400 }
    );
  }

  if (!Number.isInteger(num)) {
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

  if (num < minValue) {
    return NextResponse.json(
      {
        message: "Invalid value",
        error: minValueError,
        statusCode: 422,
        data: [],
      },
      { status: 422 }
    );
  }

  return null;
};
