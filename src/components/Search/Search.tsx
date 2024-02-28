import Button from "components/ui/Button";
import Input from "components/ui/Input";
import Label from "components/ui/Label";

import styles from "./Search.module.scss";

export const Search = () => {
  return (
    <section className={styles.section}>
      <div className={styles.background}></div>
      <div className={styles.topWrapper}>
        <h2 className={styles.title}>endpoint: /api/prime-numbers</h2>
        <p className={styles.description}>
          Returns a list of prime numbers up to the given value.
        </p>
      </div>
      <div className={styles.bottomWrapper}>
        <div className={styles.inputWrapper}>
          <Label name="value" description="maximum prime number" />
          <Input name="value" placeholder="e.g. 1200" value="" />
        </div>
        <div className={styles.inputWrapper}>
          <Label
            name="limit"
            description="limits the displayed items (defaults to 10)"
          />
          <Input name="limit" placeholder="e.g. 20" value="" />
        </div>
        <div className={styles.inputWrapper}>
          <Label
            name="page"
            description="specify the page to display (optional, defaults to 1)"
          />
          <Input name="page" placeholder="e.g. 5" value="" />
        </div>
      </div>
      <Button type="submit">Get prime numbers</Button>
    </section>
  );
};
