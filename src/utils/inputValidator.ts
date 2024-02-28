import { NextResponse } from "next/server";

export const isValidNumber = (num: number) => {
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

  return null;
};

export const isNumberInRange = (
  num: number,
  min: number,
  max: number,
  name: string
) => {
  if (num < min) {
    return NextResponse.json(
      {
        message: "Invalid value",
        error: `The ${name} must be greater than ${min}`,
        statusCode: 422,
        data: [],
      },
      { status: 422 }
    );
  }

  if (num > max) {
    return NextResponse.json(
      {
        message: "Invalid value",
        error: `The ${name} value cannot be greater than ${max}`,
        statusCode: 422,
        data: [],
      },
      { status: 422 }
    );
  }

  return null;
};
