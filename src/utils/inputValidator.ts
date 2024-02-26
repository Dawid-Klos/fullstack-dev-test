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

export const isLimitInRange = (limit: number) => {
  if (limit < 1) {
    return NextResponse.json(
      {
        message: "Invalid value",
        error: `The limit must be greater than 0`,
        statusCode: 422,
        data: [],
      },
      { status: 422 }
    );
  }

  if (limit > 100) {
    return NextResponse.json(
      {
        message: "Invalid value",
        error: `The limit cannot be greater than 100`,
        statusCode: 422,
        data: [],
      },
      { status: 422 }
    );
  }

  return null;
};

export const isPageInRange = (pageNum: number, max: number) => {
  if (pageNum < 1) {
    return NextResponse.json(
      {
        message: "Invalid value",
        error: `The lowest page number is 1`,
        statusCode: 422,
        data: [],
      },
      { status: 422 }
    );
  }

  if (pageNum > max) {
    return NextResponse.json(
      {
        message: "Invalid value",
        error: `The page number cannot be greater than ${max}`,
        statusCode: 422,
        data: [],
      },
      { status: 422 }
    );
  }

  return null;
};
