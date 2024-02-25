export const isPrime = (num: number) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

export const findPrimeNumbersTo = (x: number) => {
  let primeNumbers = [];

  for (let i = 1; i <= x; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers;
};