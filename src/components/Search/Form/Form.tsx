"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

import Button from "components/ui/Button";
import Input from "components/ui/Input";
import Label from "components/ui/Label";

import { PrimeNumbers, primeNumbersSchema } from "config/formSchema";

import styles from "./Form.module.scss";

export const Form = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<PrimeNumbers>({
    defaultValues: { limit: 10, page: 1 },
    resolver: yupResolver(primeNumbersSchema),
  });

  const onSubmit: SubmitHandler<PrimeNumbers> = async (data) => {
    const { value, limit, page } = data;

    const params = new URLSearchParams({
      value: value.toString(),
      limit: limit?.toString() || "10",
      page: page?.toString() || "1",
    });

    try {
      const res = await fetch(`/api/prime-numbers?${params.toString()}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await res.json();
      console.log(result);
    } catch {
      console.error("Error fetching data from the server");
    }
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
          value={getValues("page")}
          register={register}
          error={errors.page?.message}
        />
      </div>

      <Button type="submit">Get prime numbers</Button>
    </form>
  );
};
