import "@testing-library/jest-dom";

import { isPrime, findPrimeNumbersTo } from "utils/prime-numbers";

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
    expect(findPrimeNumbersTo(40)).toEqual([
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
    ]);
  });

  it("should return an empty array for x < 2", () => {
    expect(findPrimeNumbersTo(1)).toEqual([]);
    expect(findPrimeNumbersTo(0)).toEqual([]);
    expect(findPrimeNumbersTo(-1)).toEqual([]);
  });
});
