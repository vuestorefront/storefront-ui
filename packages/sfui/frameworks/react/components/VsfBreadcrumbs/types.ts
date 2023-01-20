import { ReactNode } from 'react';

export type VsfBreadcrumbType = {
  name: string;
  link: string;
};

export interface VsfBreadcrumbsProps {
  breadcrumbs?: VsfBreadcrumbType[];
  withIcon?: boolean;
  slotIcon?: ReactNode;
  moreButtonAriaLabel?: string;
  homeIconAriaLabel?: string;
  homeIconLink?: string;
}
