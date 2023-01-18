import type { PropsWithChildren } from 'react';
import type { VsfLinkProps } from '../VsfLink/types';

export interface VsfConfigProp extends PropsWithChildren {
  linkTag?: VsfLinkProps['tag'];
}
