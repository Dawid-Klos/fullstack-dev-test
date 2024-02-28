import styles from "./Input.module.scss";

type Props = {
  type?: string;
  name: string;
  placeholder?: string;
  value: string | undefined;
};

export const Input = ({ type = "text", name, placeholder, value }: Props) => {
  return (
    <input
      className={styles.input}
      id={name}
      type={type}
      value={value || ""}
      placeholder={placeholder}
    />
  );
};
