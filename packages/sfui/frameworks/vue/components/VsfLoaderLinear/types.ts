import { VsfLoaderSizes } from '@sfui/shared/types';

export enum VsfLoaderLinearSize {
  '2xs' = '2xs',
}

export type VsfLoaderLinearProps = {
  size?: VsfLoaderLinearSize | VsfLoaderSizes;
  screenReaderText?: string;
};
