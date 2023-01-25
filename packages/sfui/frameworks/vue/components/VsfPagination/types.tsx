export type VsfPaginationProps = {
  totalItems: number;
  currentPage?: number;
  itemsPerPage?: number;
  maxVisiblePages?: number;
  next?: string;
  prev?: string;
  hideButtonLabels?: boolean;
};
