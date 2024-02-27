import NextLink from "next/link";

import styles from "./Link.module.scss";

type Props = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export const Link = ({ href, children, onClick }: Props) => {
  return (
    <NextLink className={styles.link} href={href} onClick={onClick}>
      {children}
    </NextLink>
  );
};
