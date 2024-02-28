"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import Button from "components/ui/Button";
import Input from "components/ui/Input";
import Label from "components/ui/Label";

import { PrimeNumbers } from "config/formSchema";

import styles from "./Search.module.scss";

export const Search = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<PrimeNumbers>();

  const onSubmit: SubmitHandler<PrimeNumbers> = (data) => {
    console.log(data);
  };

  return (
    <section className={styles.section}>
      <div className={styles.background}></div>

      <div className={styles.topWrapper}>
        <h2 className={styles.title}>endpoint: /api/prime-numbers</h2>
        <p className={styles.description}>
          Returns a list of prime numbers up to the given value.
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputWrapper}>
          <Label name="value" description="maximum prime number" />
          <Input
            name="value"
            type="number"
            placeholder="e.g. 1200"
            value={getValues("value")}
            register={register}
            error={errors.value?.message}
          />
        </div>
        <div className={styles.inputWrapper}>
          <Label
            name="limit"
            description="limits the displayed items (defaults to 10)"
          />
          <Input
            name="limit"
            type="number"
            placeholder="e.g. 20"
            value={getValues("limit")}
            register={register}
            error={errors.limit?.message}
          />
        </div>
        <div className={styles.inputWrapper}>
          <Label
            name="page"
            description="specify the page to display (optional, defaults to 1)"
          />
          <Input
            name="page"
            type="number"
            placeholder="e.g. 5"
            value={getValues("page")}
            register={register}
            error={errors.page?.message}
          />
        </div>

        <Button type="submit">Get prime numbers</Button>
      </form>
    </section>
  );
};
