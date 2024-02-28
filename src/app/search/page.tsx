import Image from "next/image";

import SearchSection from "components/Search";
import SearchResult from "components/SearchResult";

import bgBlurs from "assets/home-bg-blurs.svg";
import styles from "./page.module.scss";

export default function Search() {
  return (
    <section className={styles.section}>
      <SearchSection />
      <SearchResult />
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
