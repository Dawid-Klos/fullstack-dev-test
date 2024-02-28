import Button from "components/ui/Button";

import styles from "./Pagination.module.scss";

type Props = {
  current: number;
  total: number;
  handleNext: () => void;
  handlePrevious: () => void;
};

export const Pagination = ({
  current,
  total,
  handleNext,
  handlePrevious,
}: Props) => {
  return (
    <div className={styles.pagination}>
      <Button type="button" onClick={handlePrevious}>
        Previous
      </Button>
      <p className={styles.page}>
        {current} of {total}
      </p>
      <Button type="button" onClick={handleNext}>
        Next
      </Button>
    </div>
  );
};
