import Image from "next/image";

import bgBlurs from "assets/home-bg-blurs.svg";
import styles from "./page.module.scss";

export default function Search() {
  return (
    <section className={styles.section}>
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
