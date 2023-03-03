import type { PropsWithChildren } from 'react';

export interface VsfConfigProp extends PropsWithChildren {
  linkTag?: React.ElementType<any> | string;
}
