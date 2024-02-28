import type { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import {
  mockApiRequest,
  mockApiRequestWithPagination,
} from "../../../../../__mocks__/mockApiRequest";

import { GET } from "app/api/prime-numbers/route";

describe("GET /api/prime-numbers - test status code", () => {
  it("should return 200 if only value is provided", async () => {
    const req: NextRequest = mockApiRequestWithPagination("11", "", "");
    const res: NextResponse = await GET(req);

    expect(res.status).toBe(200);
  });

  it("should return 200 if value and page are provided", async () => {
    const req: NextRequest = mockApiRequestWithPagination("11", "", "1");
    const res: NextResponse = await GET(req);

    expect(res.status).toBe(200);
  });

  it("should return 200 if value and limit are provided", async () => {
    const req: NextRequest = mockApiRequestWithPagination("11", "10", "");
    const res: NextResponse = await GET(req);

    expect(res.status).toBe(200);
  });

  it("should return 200 if only page is provided", async () => {
    const req: NextRequest = mockApiRequestWithPagination("11", "", "1");
    const res: NextResponse = await GET(req);

    expect(res.status).toBe(200);
  });

  it("should return 200 if only limit is provided", async () => {
    const req: NextRequest = mockApiRequestWithPagination("11", "10", "");
    const res: NextResponse = await GET(req);

    expect(res.status).toBe(200);
  });

  it("should return 200 if value, page and limit are provided", async () => {
    const req: NextRequest = mockApiRequestWithPagination("11", "10", "1");
    const res: NextResponse = await GET(req);

    expect(res.status).toBe(200);
  });
});

describe("GET /api/prime-numbers - test data", () => {
  it("should return an array with one prime number if value is equal to 2", async () => {
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
    expect(jsonResponse.data.length).toBe(5);
  });
});

describe("GET /api/prime-numbers - test messages", () => {
  it("should return Success if value is a valid number", async () => {
    const req: NextRequest = mockApiRequest("11");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.message).toEqual(
      "Successfully found prime numbers to the given value"
    );
  });

  it("should return Success if value is equal to 2", async () => {
    const req: NextRequest = mockApiRequest("2");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.message).toEqual(
      "Successfully found prime numbers to the given value"
    );
  });
});

describe("GET /api/prime-numbers - test pagination", () => {
  it("should include pagination object", async () => {
    const req: NextRequest = mockApiRequestWithPagination("11", "10", "1");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse).toHaveProperty("pagination");
  });

  it("should return total items", async () => {
    const req: NextRequest = mockApiRequestWithPagination("11", "10", "1");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.pagination.total_items).toEqual(5);
  });

  it("should return limit", async () => {
    const req: NextRequest = mockApiRequestWithPagination("11", "10", "1");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.pagination.limit).toEqual(10);
  });

  it("should return current page number", async () => {
    const req: NextRequest = mockApiRequestWithPagination("11", "10", "1");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.pagination.current_page).toEqual(1);
  });

  it("should return total pages", async () => {
    const req: NextRequest = mockApiRequestWithPagination("11", "10", "1");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.pagination.total_pages).toEqual(1);
  });

  it("should return next page number", async () => {
    const req: NextRequest = mockApiRequestWithPagination("11", "10", "1");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.pagination.current_page).toEqual(1);
    expect(jsonResponse.pagination.next_page).toBeNull();
  });

  it("should return current page", async () => {
    const req: NextRequest = mockApiRequestWithPagination("450", "10", "4");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.pagination.current_page).toEqual(4);
    expect(jsonResponse.pagination.next_page).toEqual(5);
  });

  it("should return null if no more pages", async () => {
    const req: NextRequest = mockApiRequestWithPagination("20", "10", "1");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.pagination.current_page).toEqual(1);
    expect(jsonResponse.pagination.next_page).toBeNull();
  });

  it("should return prev page number", async () => {
    const req: NextRequest = mockApiRequestWithPagination("40", "10", "2");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.pagination.current_page).toEqual(2);
    expect(jsonResponse.pagination.prev_page).toEqual(1);
  });

  it("should return null if no previous page", async () => {
    const req: NextRequest = mockApiRequestWithPagination("11", "10", "1");
    const res: NextResponse = await GET(req);

    const jsonResponse = await res.json();

    expect(jsonResponse.pagination.current_page).toEqual(1);
    expect(jsonResponse.pagination.prev_page).toBeNull();
  });
});
