import { createRequest } from "node-mocks-http";
import type { NextRequest } from "next/server";

export const mockApiRequest = (value: string) => {
  const searchParams = new URLSearchParams({ value });

  const { req } = createRequest({
    method: "GET",
    headers: { "content-type": "application/json" },
  });

  const nextReq: NextRequest = {
    ...req,
    nextUrl: { searchParams },
  };

  return nextReq;
};

export const mockApiRequestWithPagination = (
  value: string,
  limit: string,
  page: string
) => {
  const searchParams = new URLSearchParams({ value, limit, page });

  const { req } = createRequest({
    method: "GET",
    headers: { "content-type": "application/json" },
  });

  const nextReq: NextRequest = {
    ...req,
    nextUrl: { searchParams },
  };

  return nextReq;
};
