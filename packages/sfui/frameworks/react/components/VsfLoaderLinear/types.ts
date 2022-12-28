import type { VsfLoaderSizes } from '@sfui/shared/types';
import type { PropsWithStyle } from '../../shared/types';

export enum VsfLoaderLinearSize {
  '2xs' = '2xs',
}

export type VsfLoaderLinearProps = PropsWithStyle & {
  size?: VsfLoaderSizes | VsfLoaderLinearSize;
  screenReaderText?: string;
};
