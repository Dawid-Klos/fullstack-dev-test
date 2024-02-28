import { Pagination as PaginationType } from "types";

import Button from "components/ui/Button";

import styles from "./Pagination.module.scss";

type Props = {
  pagination: PaginationType;
  handleNext: () => void;
  handlePrevious: () => void;
};

export const Pagination = ({
  pagination,
  handleNext,
  handlePrevious,
}: Props) => {
  return (
    <div className={styles.pagination}>
      <Button
        className={styles.button}
        type="button"
        onClick={handlePrevious}
        disabled={!pagination.prev_page}
      >
        Previous
      </Button>
      <p className={styles.page}>
        {pagination.current_page} of {pagination.total_pages}
      </p>
      <Button
        className={styles.button}
        type="button"
        onClick={handleNext}
        disabled={!pagination.next_page}
      >
        Next
      </Button>
    </div>
  );
};
