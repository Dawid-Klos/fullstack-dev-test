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
  let count = 0;

  for (let i = 2; i <= x; i++) {
    // no prime number is even except 2
    if (i !== 2 && i % 2 === 0) {
      continue;
    }

    if (isPrime(i)) {
      count += 1;
      count > offset && primeNumbers.push(i);
    }

    if (primeNumbers.length === limit) {
      break;
    }
  }

  return primeNumbers;
};

export const countPrimeNumbersTo = (x: number) => {
  let count = 0;

  for (let i = 2; i <= x; i++) {
    // no prime number is even except 2
    if (i !== 2 && i % 2 === 0) {
      continue;
    }

    isPrime(i) && count++;
  }

  return count;
};
