import { VsfIconSizeEnum } from '../VsfIconBase/types';
import type { VsfIconBaseProps } from '../VsfIconBase/types';

export { VsfIconSizeEnum };
export type VsfIconProps = Omit<VsfIconBaseProps, 'children' | 'viewBox'> & Partial<Pick<VsfIconBaseProps, 'viewBox'>>;
