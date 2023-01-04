import type { ReactNode } from 'react';

import { UrlObject } from 'url';

export enum VsfLinkVariant {
  primary = 'primary',
  secondary = 'secondary',
  none = 'none',
}

export interface VsfLinkProps {
  tag?: LinkComponent | 'a' | string;
  link?: string;
  variant?: VsfLinkVariant;
  className?: string;
  children?: ReactNode | undefined;
}

// TODO: Next Link types copied, we cant have import because app can be run in React context so import will fail to resolve

declare type Url = string | UrlObject;
declare type InternalLinkProps = {
  href: Url;
  as?: Url;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  passHref?: boolean;
  prefetch?: boolean;
  locale?: string | false;
  legacyBehavior?: boolean;
  /**
   * requires experimental.newNextLinkBehavior
   */
  onMouseEnter?: (e: any) => void;
  /**
   * requires experimental.newNextLinkBehavior
   */
  onTouchStart?: (e: any) => void;
  /**
   * requires experimental.newNextLinkBehavior
   */
  onClick?: (e: any) => void;
};
export declare type LinkProps = InternalLinkProps;
export type LinkComponent = React.ForwardRefExoticComponent<
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof InternalLinkProps> &
    InternalLinkProps & {
      children?: React.ReactNode;
    } & React.RefAttributes<HTMLAnchorElement>
> & {
  render?: { name: string };
};
