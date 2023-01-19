export type VsfPaginationProps = {
  totalItems: number;
  currentPage?: number;
  itemsPerPage?: number;
  maxVisiblePages?: number;
  next?: string;
  prev?: string;
  hideButtonLabels?: boolean;
  handlePageUpdate(): (event: number) => void;
  children?: string;
};
