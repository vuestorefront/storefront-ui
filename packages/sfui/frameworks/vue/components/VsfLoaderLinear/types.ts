import { VsfLoaderSize } from '@storefront-ui/shared';

export enum VsfLoaderLinearSize {
  'minimal' = 'minimal',
}
export { VsfLoaderSize };
export type VsfLoaderLinearProps = {
  size?: VsfLoaderLinearSize | VsfLoaderSize;
  screenReaderText?: string;
};
