import type { PropsWithChildren } from 'react';
import type { PropsWithStyle } from '../../shared/types';
import type { VsfFooterColumnType, VsfFooterLabelType, VsfFooterSectionType } from '../../sharedRoot/types/index';

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
