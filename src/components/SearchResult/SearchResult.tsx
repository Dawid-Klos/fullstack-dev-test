"use client";

import { usePrimeNumbers } from "hooks/usePrimeNumbers";

import Button from "components/ui/Button";

import styles from "./SearchResult.module.scss";

export const SearchResult = () => {
  const { primeNumbers, pagination, handleNext, handlePrevious } =
    usePrimeNumbers();

  if (primeNumbers.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className={styles.background}></div>
      <h2 className={styles.title}>Search result:</h2>
      <div className={styles.container}>
        {primeNumbers.length > 0 &&
          primeNumbers.map((number) => (
            <p key={number} className={styles.number}>
              {number}
            </p>
          ))}
      </div>
    </section>
  );
};
