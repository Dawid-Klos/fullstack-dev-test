import { NextResponse } from "next/server";

export const handleError = (
  message: string,
  error: string,
  statusCode: number
) => {
  return NextResponse.json(
    {
      message: message,
      error: error,
      statusCode: statusCode,
      data: [],
    },
    { status: statusCode }
  );
};
