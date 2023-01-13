import type { InjectionKey } from 'vue';
import { VsfButtonSizes } from 'components/VsfButton';

export interface VsfTabsProps {
  modelValue: number | string | symbol;
  size: VsfButtonSizes;
}

export interface VsfTabsInjectionValue {
  props: VsfTabsProps;
  onChange: (uid: VsfTabsProps['modelValue']) => void;
}

export const VsfTabsInjectionKey = Symbol() as InjectionKey<VsfTabsInjectionValue>;
