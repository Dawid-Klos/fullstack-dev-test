"use client";

import { usePrimeNumbers } from "hooks/usePrimeNumbers";

import { Pagination } from "./Pagination";

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

      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Search result:</h2>
        <p className={styles.subtitle}>
          Found {pagination.total_items} prime numbers
        </p>
      </div>

      <div className={styles.container}>
        {primeNumbers.map((number) => (
          <p key={number} className={styles.number}>
            {number}
          </p>
        ))}
      </div>

      <Pagination
        pagination={pagination}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
    </section>
  );
};
