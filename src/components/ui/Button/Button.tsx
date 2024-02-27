import styles from "./Button.module.scss";

type Props = {
  type?: "submit" | "button";
  disabled?: boolean;
  children: string;
  onClick?: () => void;
};

export const Button = ({
  type = "button",
  disabled = false,
  onClick,
  children,
}: Props) => {
  return (
    <button
      className={styles.button}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
