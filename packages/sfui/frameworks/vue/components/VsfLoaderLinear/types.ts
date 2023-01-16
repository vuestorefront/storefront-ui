import { VsfLoaderSizes } from '@storefront-ui/shared';

export enum VsfLoaderLinearSize {
  'minimal' = 'minimal',
}
export { VsfLoaderSizes };
export type VsfLoaderLinearProps = {
  size?: VsfLoaderLinearSize | VsfLoaderSizes;
  screenReaderText?: string;
};
