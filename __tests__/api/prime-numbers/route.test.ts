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

describe("GET /api/prime-numbers - test status code", () => {
  it("should return 400 status if value is not a number", async () => {
    const req: NextRequest = mockApiRequest("abc");
    const res: NextResponse = await GET(req);

    expect(res.status).toBe(400);
  });

  it("should return 400 status if value is a number with decimal places", async () => {
    const req: NextRequest = mockApiRequest("4.25");
    const res: NextResponse = await GET(req);

    expect(res.status).toBe(400);
  });

  it("should return 400 status if value is partially correct", async () => {
    const req: NextRequest = mockApiRequest("621asd");
    const res: NextResponse = await GET(req);

    expect(res.status).toBe(400);
  });

  it("should return 400 status if value is empty", async () => {
    const req: NextRequest = mockApiRequest("");
    const res: NextResponse = await GET(req);

    expect(res.status).toBe(400);
  });

  it("should return 422 status if value is a number less than 2", async () => {
    const req: NextRequest = mockApiRequest("1");
    const res: NextResponse = await GET(req);

    expect(res.status).toBe(422);
  });

  it("should return 422 status if value is a negative number", async () => {
    const req: NextRequest = mockApiRequest("-10");
    const res: NextResponse = await GET(req);

    expect(res.status).toBe(422);
  });

  it("should return 200 status if value is a number", async () => {
    const req: NextRequest = mockApiRequest("11");
    const res: NextResponse = await GET(req);

    expect(res.status).toBe(200);
  });
});

describe("GET /api/prime-numbers - test data", () => {
  it("should return empty array if value is not a number", async () => {
    const req: NextRequest = mockApiRequest("abc");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.data).toEqual([]);
  });

  it("should return empty array if value is a number with decimal places", async () => {
    const req: NextRequest = mockApiRequest("4.25");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.data).toEqual([]);
  });

  it("should return empty array if value is partially correct", async () => {
    const req: NextRequest = mockApiRequest("4422abc");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.data).toEqual([]);
  });

  it("should return empty array if value is empty", async () => {
    const req: NextRequest = mockApiRequest("");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.data).toEqual([]);
  });

  it("should return empty array if value is a number less than 2", async () => {
    const req: NextRequest = mockApiRequest("0");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.data).toEqual([]);
  });

  it("should return an array with one prime number if value is a number equal to 2", async () => {
    const req: NextRequest = mockApiRequest("2");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.data).toEqual([2]);
    expect(jsonResponse.data.length).toBe(1);
  });

  it("should return an array with prime numbers if value is a number", async () => {
    const req: NextRequest = mockApiRequest("11");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.data).toEqual([2, 3, 5, 7, 11]);
  });
});

describe("GET /api/prime-numbers - test error messages", () => {
  it("should return error if value is not a number", async () => {
    const req: NextRequest = mockApiRequest("abc");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.error).toEqual("Expected numerical value");
  });

  it("should return error if value is a number with decimal places", async () => {
    const req: NextRequest = mockApiRequest("5.50");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.error).toEqual("Expected an integer not a float");
  });

  it("should return error if value is partially correct", async () => {
    const req: NextRequest = mockApiRequest("6542asd");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.error).toEqual("Expected numerical value");
  });

  it("should return error if value is empty", async () => {
    const req: NextRequest = mockApiRequest("");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.error).toEqual(
      "Expected a value, but none was provided"
    );
  });

  it("should return error if value is a number less than 2", async () => {
    const req: NextRequest = mockApiRequest("1");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.error).toEqual("The smallest prime number is 2");
  });

  it("should return error if value is not an integer", async () => {
    const req: NextRequest = mockApiRequest("120.50");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.error).toEqual("Expected an integer not a float");
  });

  it("should return empty error string if value is a number", async () => {
    const req: NextRequest = mockApiRequest("11");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.error).toEqual("");
  });
});

describe("GET /api/prime-numbers - test messages", () => {
  it("should return Bad request if value is not a number", async () => {
    const req: NextRequest = mockApiRequest("abc");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.message).toEqual("Bad request");
  });

  it("should return Bad request if value is a number with decimal places", async () => {
    const req: NextRequest = mockApiRequest("25.50");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.message).toEqual("Bad request");
  });

  it("should return Bad request if value is partially correct", async () => {
    const req: NextRequest = mockApiRequest("252asda");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.message).toEqual("Bad request");
  });

  it("should return Bad request if value is empty", async () => {
    const req: NextRequest = mockApiRequest("");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.message).toEqual("Bad request");
  });

  it("should return Invalid value if value is a number less than 2", async () => {
    const req: NextRequest = mockApiRequest("1");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.message).toEqual("Invalid value");
  });

  it("should return Bad request if value is not an integer", async () => {
    const req: NextRequest = mockApiRequest("1200.50");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.message).toEqual("Bad request");
  });

  it("should return Success if value is a valid number", async () => {
    const req: NextRequest = mockApiRequest("11");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.message).toEqual(
      "Successfully found prime numbers to the given value"
    );
  });
});
