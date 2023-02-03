import type { PropsWithStyle } from '../../shared/types';
import type { VsfCheckboxProps } from '../VsfCheckbox';

export enum VsfSwitchAlignment {
  prefix = 'prefix',
  suffix = 'suffix',
}
export interface VsfSwitchProps
  extends Pick<VsfCheckboxProps, 'value' | 'label' | 'helpText' | 'disabled' | 'labelTag' | 'name' | 'onChange'>,
    PropsWithStyle {
  alignment?: `${VsfSwitchAlignment}`;
}
