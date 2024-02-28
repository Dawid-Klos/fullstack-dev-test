"use client";

import { useRouter } from "next/navigation";
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
    defaultValues: { limit: 10 },
    resolver: yupResolver(primeNumbersSchema),
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<PrimeNumbers> = async (data) => {
    const { value, limit } = data;

    const params = new URLSearchParams({
      value: value.toString(),
      limit: limit?.toString() || "10",
    });

    router.push(`/search?${params.toString()}`);
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
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

      <Button type="submit">Get prime numbers</Button>
    </form>
  );
};
