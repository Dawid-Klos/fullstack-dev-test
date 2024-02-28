export type Pagination = {
  total_items: number;
  limit: number;
  total_pages: number;
  current_page: number;
  prev_page: number | null;
  next_page: number | null;
};
