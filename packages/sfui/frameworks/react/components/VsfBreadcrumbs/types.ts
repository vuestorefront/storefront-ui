export type VsfBreadcrumbType = {
  name: string;
  link: string;
};

export interface VsfBreadcrumbsProps {
  breadcrumbs?: VsfBreadcrumbType[];
  withIcon?: boolean;
  slotIcon?: any;
}
