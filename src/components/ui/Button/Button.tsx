import styles from "./Button.module.scss";

type Props = {
  type?: "submit" | "button";
  disabled?: boolean;
  className?: string;
  children: string;
  onClick?: () => void;
};

export const Button = ({
  type = "button",
  disabled = false,
  className,
  onClick,
  children,
}: Props) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
