import type { PropsWithChildren } from 'react';

import type { PropsWithStyle } from '../../shared/types';

export enum VsfLinkVariant {
  primary = 'primary',
  secondary = 'secondary',
}

export interface VsfLinkProps extends PropsWithChildren, PropsWithStyle {
  variant?: `${VsfLinkVariant}`;
}
