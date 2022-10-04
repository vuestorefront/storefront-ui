import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export type VsfBadgeProps = PropsWithStyle<
  PropsWithChildren<{
    dot?: boolean;
    value?: string | number;
    invisible?: boolean;
    bordered?: boolean;
  }>
>;
