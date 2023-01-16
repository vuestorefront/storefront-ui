import type { ConcreteComponent, PropType } from 'vue';
import type { _RouterLinkI } from 'vue-router';

export enum VsfLinkVariant {
  primary = 'primary',
  secondary = 'secondary',
  none = 'none',
}
export type RouterLinkType = _RouterLinkI;
export type VsfLinkTagPropType = 'a' | ConcreteComponent | RouterLinkType;
export const VsfLinkTagProp = {
  type: [String, Object] as PropType<VsfLinkTagPropType>,
  default: undefined,
};
