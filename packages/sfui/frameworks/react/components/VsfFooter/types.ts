import type { PropsWithChildren } from 'react';
import type { VsfFooterColumnType, VsfFooterLabelType, VsfFooterSectionType } from '@storefront-ui/shared';
import type { PropsWithStyle } from '../../shared/types';

export { VsfFooterColumnType, VsfFooterLabelType, VsfFooterSectionType };

export interface VsfFooterDefaultProps extends PropsWithChildren, PropsWithStyle {}

export interface VsfFooterColumnProps extends VsfFooterDefaultProps {
  type?: VsfFooterColumnType;
}
export interface VsfFooterSectionProps extends VsfFooterDefaultProps {
  type?: VsfFooterSectionType;
}

export interface VsfFooterLabelProps extends VsfFooterDefaultProps {
  type?: VsfFooterLabelType;
}
