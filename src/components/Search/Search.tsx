import Form from "./Form";

import styles from "./Search.module.scss";

export const Search = () => {
  return (
    <section className={styles.section}>
      <div className={styles.background}></div>

      <div className={styles.topWrapper}>
        <h2 className={styles.title}>endpoint: /api/prime-numbers</h2>
        <p className={styles.description}>
          Returns a list of prime numbers up to the given value.
        </p>
      </div>

      <Form />
    </section>
  );
};
