import * as yup from "yup";

export const primeNumbersSchema = yup.object().shape({
  value: yup
    .number()
    .min(2, "Value must be greater than 1")
    .required("Value is required"),
  limit: yup
    .number()
    .min(10, "Limit must be greater than 9")
    .max(100, "Limit must be less than 101"),
  page: yup.number().min(1, "Page must be greater than 0"),
});

export type PrimeNumbers = yup.InferType<typeof primeNumbersSchema>;
