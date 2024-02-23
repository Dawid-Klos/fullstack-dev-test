import { createRequest } from "node-mocks-http";

import type { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { GET } from "app/api/prime-numbers/route";

const mockApiRequest = (value: string) => {
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

describe("GET /api/prime-numbers", () => {
  it("should return 400 status if value is not a number", async () => {
    const req: NextRequest = mockApiRequest("abc");
    const res: NextResponse = await GET(req);

    expect(res.status).toBe(400);
  });

  it("should return empty array if value is not a number", async () => {
    const req: NextRequest = mockApiRequest("abc");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.data).toEqual([]);
  });

  it("should return error if value is not a number", async () => {
    const req: NextRequest = mockApiRequest("abc");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.error).toEqual("Expected numerical value not a string");
  });

  it("should return message if value is not a number", async () => {
    const req: NextRequest = mockApiRequest("abc");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.message).toEqual("Invalid value");
  });
});
