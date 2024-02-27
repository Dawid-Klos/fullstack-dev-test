import Image from "next/image";

import Link from "components/ui/Link";

import bgBlurs from "assets/home-bg-blurs.svg";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <section className={styles.section}>
      <hgroup className={styles.hgroup}>
        <p className={styles.subtitle}>Your Comprehensive Prime Numbers API</p>
        <h1 className={styles.title}>
          PrimeNumbers<span>API</span>
        </h1>
      </hgroup>

      <p className={styles.description}>
        Our API allows you to effortlessly retrieve prime numbers up to a given
        value, providing you with the flexibility to set your desired limit and
        utilize pagination for seamless navigation through the results.
      </p>

      <Link href="/">Get started now</Link>

      <Image
        className={styles.bgBlurs}
        src={bgBlurs}
        alt="Blurred background"
        quality={100}
        priority
      />
    </section>
  );
}
