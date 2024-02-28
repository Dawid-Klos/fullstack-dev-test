import { UseFormRegister } from "react-hook-form";

import styles from "./Input.module.scss";

type Props = {
  type?: string;
  name: string;
  placeholder?: string;
  value: number | undefined;
  register: UseFormRegister<any>;
  error?: string;
};

export const Input = ({
  type = "text",
  name,
  placeholder,
  register,
  error,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
