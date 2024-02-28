"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import styles from "./SearchResult.module.scss";

export const SearchResult = () => {
  const [primeNumbers, setPrimeNumbers] = useState<number[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    const fetchPrimeNumbers = async () => {
      const response = await fetch(
        `http://localhost:3000/api/prime-numbers?${params.toString()}`
      );
      const data = await response.json();

      setPrimeNumbers(data.data);
    };

    if (params.get("value")) {
      fetchPrimeNumbers();
    }
  }, [searchParams]);

  if (!searchParams.get("value")) {
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
