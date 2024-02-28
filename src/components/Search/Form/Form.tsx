"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import Button from "components/ui/Button";
import Input from "components/ui/Input";
import Label from "components/ui/Label";

import { PrimeNumbers } from "config/formSchema";

import styles from "./Form.module.scss";

export const Form = () => {
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
          description="limits the displayed items (default - 10)"
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
          description="specify the page to display (default - 1)"
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
  );
};
