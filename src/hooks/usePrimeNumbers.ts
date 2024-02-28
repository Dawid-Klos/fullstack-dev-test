import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

type Pagination = {
  total_items: number;
  limit: number;
  total_pages: number;
  current_page: number;
  prev_page: number | null;
  next_page: number | null;
};

export const usePrimeNumbers = () => {
  const [primeNumbers, setPrimeNumbers] = useState<number[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    total_items: 0,
    limit: 10,
    total_pages: 0,
    current_page: 1,
    prev_page: null,
    next_page: null,
  });

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    const fetchPrimeNumbers = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/prime-numbers?${params.toString()}`
        );
        const data = await response.json();

        setPrimeNumbers(data.data);
        setPagination(data.pagination);
      } catch (error) {
        console.error(error);
      }
    };

    if (params.get("value")) {
      fetchPrimeNumbers();
    }
  }, [searchParams]);

  const handlePageChange = (page: number | null) => {
    if (page) {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set("page", page.toString());
      router.push(`?${newParams.toString()}`);
    }
  };

  const handlePrevious = () => handlePageChange(pagination.prev_page);
  const handleNext = () => handlePageChange(pagination.next_page);

  return { primeNumbers, pagination, handlePrevious, handleNext };
};
