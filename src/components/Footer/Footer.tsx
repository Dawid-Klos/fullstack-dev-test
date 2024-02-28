import Image from "next/image";

import copyIcon from "assets/icons/copyright.svg";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image src={copyIcon} alt="" />
      <p className={styles.text}>2024 Dawid Klos. All copyrights reserved.</p>
    </footer>
  );
};
