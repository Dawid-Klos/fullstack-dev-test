import Image from "next/image";

import SearchSection from "components/Search";

import bgBlurs from "assets/home-bg-blurs.svg";
import styles from "./page.module.scss";

export default function Search() {
  return (
    <section className={styles.section}>
      <SearchSection />
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
