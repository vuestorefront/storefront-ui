import { VsfLoaderSizes } from '@storefront-ui/shared/types';

export enum VsfLoaderLinearSize {
  '2xs' = '2xs',
}
export { VsfLoaderSizes };
// TODO: handle extending/merging 2 enums
export type VsfLoaderLinearProps = {
  size?: VsfLoaderLinearSize | VsfLoaderSizes;
  screenReaderText?: string;
};
