import type { PropsWithStyle } from '../../shared/types';
import type { VsfCheckboxProps } from '../VsfCheckbox';

export enum VsfSwitchAlignment {
  prefix = 'prefix',
  suffix = 'suffix',
}
export interface VsfSwitchProps extends Pick<VsfCheckboxProps, 'value' | 'disabled' | 'onChange'>, PropsWithStyle {}
