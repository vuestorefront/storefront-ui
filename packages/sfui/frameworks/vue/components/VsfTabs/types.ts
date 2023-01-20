import type { InjectionKey } from 'vue';
import { VsfButtonSize } from 'components/VsfButton';

export interface VsfTabsProps {
  modelValue: number | string | symbol;
  size: `${VsfButtonSize}`;
}

export interface VsfTabsInjectionValue {
  props: VsfTabsProps;
  onChange: (uid: VsfTabsProps['modelValue']) => void;
}

export const VsfTabsInjectionKey = Symbol() as InjectionKey<VsfTabsInjectionValue>;
