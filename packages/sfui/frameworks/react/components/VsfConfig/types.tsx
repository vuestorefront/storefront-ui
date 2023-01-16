import type { PropsWithChildren } from 'react';
import { VsfLinkProps } from '../VsfLink/types';

export interface VsfConfigProp extends PropsWithChildren {
  linkTag?: VsfLinkProps['tag'];
}
