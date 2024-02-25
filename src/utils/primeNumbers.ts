export const isPrime = (num: number) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

export const findPrimeNumbersTo = (
  x: number,
  limit: number = 10,
  offset: number = 0
) => {
  let primeNumbers = [];

  for (let i = 2 + offset; i <= x; i++) {
    // no prime number is even except 2
    if (i !== 2 && i % 2 === 0) {
      continue;
    }

    isPrime(i) && primeNumbers.push(i);

    if (primeNumbers.length === limit) {
      break;
    }
  }

  return primeNumbers;
};
