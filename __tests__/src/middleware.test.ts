import type { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { mockApiRequest } from "../../__mocks__/mockApiRequest";

import validationMiddleware from "src/middleware";

describe("validationMiddleware - test status codes", () => {
  it("should return 400 status if value is not a number", async () => {
    const req: NextRequest = mockApiRequest("abc");
    const res: NextResponse = await validationMiddleware(req);

    expect(res.status).toBe(400);
  });

  it("should return 400 status if value is a number with decimal places", async () => {
    const req: NextRequest = mockApiRequest("4.25");
    const res: NextResponse = await validationMiddleware(req);

    expect(res.status).toBe(400);
  });

  it("should return 400 status if value is partially correct", async () => {
    const req: NextRequest = mockApiRequest("621asd");
    const res: NextResponse = await validationMiddleware(req);

    expect(res.status).toBe(400);
  });

  it("should return 400 status if value is empty", async () => {
    const req: NextRequest = mockApiRequest("");
    const res: NextResponse = await validationMiddleware(req);

    expect(res.status).toBe(400);
  });

  it("should return 422 status if value is a number less than 2", async () => {
    const req: NextRequest = mockApiRequest("1");
    const res: NextResponse = await validationMiddleware(req);

    expect(res.status).toBe(422);
  });

  it("should return 422 status if value is a negative number", async () => {
    const req: NextRequest = mockApiRequest("-10");
    const res: NextResponse = await validationMiddleware(req);

    expect(res.status).toBe(422);
  });

  it("should not return anything if value is correct", async () => {
    const req: NextRequest = mockApiRequest("11");
    const res: NextResponse = await validationMiddleware(req);

    expect(res).toBeUndefined();
  });
});

describe("validationMiddleware - test error messages", () => {
  it("should return error if value is not a number", async () => {
    const req: NextRequest = mockApiRequest("abc");
    const res: NextResponse = await validationMiddleware(req);

    const jsonResponse = await res.json();
    expect(jsonResponse.error).toEqual("Expected numerical value");
  });

  it("should return error if value is a number with decimal places", async () => {
    const req: NextRequest = mockApiRequest("5.50");
    const res: NextResponse = await validationMiddleware(req);

    const jsonResponse = await res.json();
    expect(jsonResponse.error).toEqual("Expected an integer not a float");
  });

  it("should return error if value is partially correct", async () => {
    const req: NextRequest = mockApiRequest("6542asd");
    const res: NextResponse = await validationMiddleware(req);

    const jsonResponse = await res.json();
    expect(jsonResponse.error).toEqual("Expected numerical value");
  });

  it("should return error if value is empty", async () => {
    const req: NextRequest = mockApiRequest("");
    const res: NextResponse = await validationMiddleware(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.error).toEqual(
      "Expected a value, but none was provided"
    );
  });

  it("should return error if value is a number less than 2", async () => {
    const req: NextRequest = mockApiRequest("1");
    const res: NextResponse = await validationMiddleware(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.error).toEqual("The value must be greater than 2");
  });
});

describe("validationMiddleware - test messages", () => {
  it("should return Bad request if value is not a number", async () => {
    const req: NextRequest = mockApiRequest("abc");
    const res: NextResponse = await validationMiddleware(req);

    const jsonResponse = await res.json();
    expect(jsonResponse.message).toEqual("Bad request");
  });

  it("should return Bad request if value is a number with decimal places", async () => {
    const req: NextRequest = mockApiRequest("25.50");
    const res: NextResponse = await validationMiddleware(req);

    const jsonResponse = await res.json();
    expect(jsonResponse.message).toEqual("Bad request");
  });

  it("should return Bad request if value is partially correct", async () => {
    const req: NextRequest = mockApiRequest("252asda");
    const res: NextResponse = await validationMiddleware(req);

    const jsonResponse = await res.json();
    expect(jsonResponse.message).toEqual("Bad request");
  });

  it("should return Bad request if value is empty", async () => {
    const req: NextRequest = mockApiRequest("");
    const res: NextResponse = await validationMiddleware(req);

    const jsonResponse = await res.json();
    expect(jsonResponse.message).toEqual("Bad request");
  });

  it("should return Invalid value if value is a number less than 2", async () => {
    const req: NextRequest = mockApiRequest("1");
    const res: NextResponse = await validationMiddleware(req);

    const jsonResponse = await res.json();
    expect(jsonResponse.message).toEqual("Invalid value");
  });
});

describe("validationMiddleware - test data", () => {
  it("should return empty array if value is not a number", async () => {
    const req: NextRequest = mockApiRequest("abc");
    const res: NextResponse = await validationMiddleware(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.data).toEqual([]);
  });

  it("should return empty array if value is a number with decimal places", async () => {
    const req: NextRequest = mockApiRequest("120.201");
    const res: NextResponse = await validationMiddleware(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.data).toEqual([]);
  });

  it("should return empty array if value is partially correct", async () => {
    const req: NextRequest = mockApiRequest("120asdas");
    const res: NextResponse = await validationMiddleware(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.data).toEqual([]);
  });

  it("should return empty array if value is empty", async () => {
    const req: NextRequest = mockApiRequest("");
    const res: NextResponse = await validationMiddleware(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.data).toEqual([]);
  });

  it("should return empty array if value is a number less than 2", async () => {
    const req: NextRequest = mockApiRequest("1");
    const res: NextResponse = await validationMiddleware(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.data).toEqual([]);
  });
});
