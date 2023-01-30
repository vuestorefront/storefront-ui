import { TagOrComponent } from '../../shared/types';

export type VsfBreadcrumbType = {
  name: string;
  link: string;
};

export type VsfBreadcrumbHomeType = {
  linkTag?: TagOrComponent;
  bindings?: Record<string, unknown>;
};

export interface VsfBreadcrumbsProps {
  breadcrumbs?: VsfBreadcrumbType[];
  withIcon?: boolean;
  homeItem?: VsfBreadcrumbHomeType;
  ariaLabelHomeButton?: string;
  ariaLabelHomeIcon?: string;
}
