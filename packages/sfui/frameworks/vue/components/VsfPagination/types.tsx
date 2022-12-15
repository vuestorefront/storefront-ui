export type VsfPaginationProps = {
  totalItems: number;
  currentPage?: number;
  itemsPerPage?: number;
  maxVisiblePages?: number;
  handlePageUpdate(): (event: number) => void;
  children?: string;
};
