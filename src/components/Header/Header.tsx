import Link from "next/link";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1 className={styles.title}>
          PrimeNumbers<span>API</span>
        </h1>
      </Link>
    </header>
  );
};
