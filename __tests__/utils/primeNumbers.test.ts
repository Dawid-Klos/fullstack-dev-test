import "@testing-library/jest-dom";

import {
  isPrime,
  findPrimeNumbersTo,
  countPrimeNumbersTo,
} from "utils/primeNumbers";

describe("isPrime", () => {
  it("should return true for prime numbers", () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(13)).toBe(true);
    expect(isPrime(17)).toBe(true);
    expect(isPrime(19)).toBe(true);
    expect(isPrime(23)).toBe(true);
    expect(isPrime(29)).toBe(true);
  });

  it("should return false for non-prime numbers", () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(8)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(10)).toBe(false);
    expect(isPrime(12)).toBe(false);
    expect(isPrime(14)).toBe(false);
    expect(isPrime(15)).toBe(false);
    expect(isPrime(16)).toBe(false);
    expect(isPrime(18)).toBe(false);
    expect(isPrime(20)).toBe(false);
    expect(isPrime(21)).toBe(false);
    expect(isPrime(22)).toBe(false);
    expect(isPrime(24)).toBe(false);
    expect(isPrime(25)).toBe(false);
    expect(isPrime(26)).toBe(false);
    expect(isPrime(27)).toBe(false);
    expect(isPrime(28)).toBe(false);
  });
});

describe("findPrimeNumbersTo", () => {
  it("should return prime numbers up to x", () => {
    expect(findPrimeNumbersTo(2)).toEqual([2]);
    expect(findPrimeNumbersTo(3)).toEqual([2, 3]);
    expect(findPrimeNumbersTo(4)).toEqual([2, 3]);
    expect(findPrimeNumbersTo(5)).toEqual([2, 3, 5]);
    expect(findPrimeNumbersTo(6)).toEqual([2, 3, 5]);
    expect(findPrimeNumbersTo(7)).toEqual([2, 3, 5, 7]);
    expect(findPrimeNumbersTo(8)).toEqual([2, 3, 5, 7]);
    expect(findPrimeNumbersTo(9)).toEqual([2, 3, 5, 7]);
    expect(findPrimeNumbersTo(10)).toEqual([2, 3, 5, 7]);
    expect(findPrimeNumbersTo(11)).toEqual([2, 3, 5, 7, 11]);
    expect(findPrimeNumbersTo(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
    expect(findPrimeNumbersTo(30)).toEqual([
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
    ]);
  });

  it("should return an empty array for x < 2", () => {
    expect(findPrimeNumbersTo(1)).toEqual([]);
    expect(findPrimeNumbersTo(0)).toEqual([]);
    expect(findPrimeNumbersTo(-1)).toEqual([]);
  });
});

describe("findPrimeNumbersTo with offset", () => {
  it("should return prime numbers up to x", () => {
    expect(findPrimeNumbersTo(2, 10, 1)).toEqual([]);
    expect(findPrimeNumbersTo(3, 10, 1)).toEqual([3]);
    expect(findPrimeNumbersTo(20, 10, 4)).toEqual([11, 13, 17, 19]);
    expect(findPrimeNumbersTo(30, 10, 5)).toEqual([13, 17, 19, 23, 29]);
    expect(findPrimeNumbersTo(30, 10, 10)).toEqual([]);
    expect(findPrimeNumbersTo(120, 10, 10)).toEqual([
      31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    ]);
    expect(findPrimeNumbersTo(200, 10, 20)).toEqual([
      73, 79, 83, 89, 97, 101, 103, 107, 109, 113,
    ]);
  });

  it("should return an empty array for x < 2", () => {
    expect(findPrimeNumbersTo(1, 1)).toEqual([]);
    expect(findPrimeNumbersTo(0, 1)).toEqual([]);
    expect(findPrimeNumbersTo(-1, 1)).toEqual([]);
  });
});

describe("findPrimeNumbersTo with limit", () => {
  it("should return prime numbers up to x", () => {
    expect(findPrimeNumbersTo(2, 2)).toEqual([2]);
    expect(findPrimeNumbersTo(3, 2)).toEqual([2, 3]);
    expect(findPrimeNumbersTo(4, 2)).toEqual([2, 3]);
    expect(findPrimeNumbersTo(5, 2)).toEqual([2, 3]);
    expect(findPrimeNumbersTo(6, 3)).toEqual([2, 3, 5]);
    expect(findPrimeNumbersTo(7, 3)).toEqual([2, 3, 5]);
    expect(findPrimeNumbersTo(8, 3)).toEqual([2, 3, 5]);
    expect(findPrimeNumbersTo(9, 3)).toEqual([2, 3, 5]);
    expect(findPrimeNumbersTo(10, 4)).toEqual([2, 3, 5, 7]);
    expect(findPrimeNumbersTo(11, 4)).toEqual([2, 3, 5, 7]);
    expect(findPrimeNumbersTo(20, 4)).toEqual([2, 3, 5, 7]);
    expect(findPrimeNumbersTo(30, 4)).toEqual([2, 3, 5, 7]);
  });

  it("should return an empty array for x < 2", () => {
    expect(findPrimeNumbersTo(1, 1)).toEqual([]);
    expect(findPrimeNumbersTo(0, 1)).toEqual([]);
    expect(findPrimeNumbersTo(-1, 1)).toEqual([]);
  });
});

describe("findPrimeNumbersTo with limit and offset", () => {
  it("should return prime numbers up to x", () => {
    expect(findPrimeNumbersTo(2, 2, 1)).toEqual([]);
    expect(findPrimeNumbersTo(3, 2, 1)).toEqual([3]);
    expect(findPrimeNumbersTo(20, 2, 4)).toEqual([11, 13]);
    expect(findPrimeNumbersTo(30, 5, 4)).toEqual([11, 13, 17, 19, 23]);
    expect(findPrimeNumbersTo(30, 10, 4)).toEqual([11, 13, 17, 19, 23, 29]);
    expect(findPrimeNumbersTo(120, 10, 10)).toEqual([
      31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    ]);
    expect(findPrimeNumbersTo(120, 10, 20)).toEqual([
      73, 79, 83, 89, 97, 101, 103, 107, 109, 113,
    ]);
    expect(findPrimeNumbersTo(200, 20, 20)).toEqual([
      73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
      157, 163, 167, 173,
    ]);
  });

  it("should return an empty array for x < 2", () => {
    expect(findPrimeNumbersTo(1, 1, 1)).toEqual([]);
    expect(findPrimeNumbersTo(0, 1, 1)).toEqual([]);
    expect(findPrimeNumbersTo(-1, 1, 1)).toEqual([]);
  });
});

describe("countPrimeNumbersTo", () => {
  it("should return the number of prime numbers up to x", () => {
    expect(countPrimeNumbersTo(2)).toEqual(1);
    expect(countPrimeNumbersTo(3)).toEqual(2);
    expect(countPrimeNumbersTo(5)).toEqual(3);
    expect(countPrimeNumbersTo(7)).toEqual(4);
    expect(countPrimeNumbersTo(11)).toEqual(5);
    expect(countPrimeNumbersTo(20)).toEqual(8);
    expect(countPrimeNumbersTo(30)).toEqual(10);
    expect(countPrimeNumbersTo(120)).toEqual(30);
  });

  it("should return 0 for x < 2", () => {
    expect(countPrimeNumbersTo(1)).toEqual(0);
    expect(countPrimeNumbersTo(0)).toEqual(0);
    expect(countPrimeNumbersTo(-1)).toEqual(0);
  });
});
