import type { PropsWithChildren } from 'react';
import type { VsfFooterColumnType, VsfFooterLabelType, VsfFooterSectionType } from '@sfui/shared/types/index';
import type { PropsWithStyle } from '../../shared/types';

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
