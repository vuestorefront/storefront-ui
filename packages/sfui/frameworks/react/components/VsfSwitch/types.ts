import type { PropsWithStyle } from '../../shared/types';
import type { VsfCheckboxProps } from '../VsfCheckbox';

export enum VsfSwitchAlignments {
  prefix = 'prefix',
  suffix = 'suffix',
}
export interface VsfSwitchProps
  extends Pick<VsfCheckboxProps, 'value' | 'label' | 'helpText' | 'disabled' | 'onChange'>,
    PropsWithStyle {
  alignment: VsfSwitchAlignments;
}
