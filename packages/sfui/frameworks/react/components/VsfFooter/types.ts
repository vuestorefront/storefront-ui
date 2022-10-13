import { PropsWithChildren } from 'react';
import { PropsWithStyle } from '@sfui/sfui/shared/types';
import { VsfFooterColumnType, VsfFooterLabelType, VsfFooterSectionType } from '@sfui/types/_components';

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
