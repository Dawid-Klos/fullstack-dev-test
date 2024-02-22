import "@testing-library/jest-dom";
import { isPrime, findPrimeNumbersTo } from "../../src/utils/prime-numbers";

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
