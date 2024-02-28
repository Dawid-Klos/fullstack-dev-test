import styles from "./Label.module.scss";

type Props = {
  name: string;
  description: string;
};

export const Label = ({ name, description }: Props) => {
  return (
    <label className={styles.label} htmlFor={name}>
      <p className={styles.name}>{name}</p>
      <p className={styles.description}>{description}</p>
    </label>
  );
};
