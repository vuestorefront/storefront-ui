import type { PropsWithChildren, ReactNode } from 'react';
import type { VsfInputProps } from '../VsfInput';
import type { PropsWithStyle } from '../../shared/types';

export interface VsfComboboxProps
  extends PropsWithChildren,
    PropsWithStyle,
    Partial<
      Pick<VsfInputProps, 'label' | 'disabled' | 'required' | 'value' | 'placeholder' | 'invalid' | 'onChange' | 'size'>
    > {
  open?: boolean;
  errorText?: string;
  helpText?: string;
  requiredText?: string;
  children?: ReactNode;
  loading?: boolean;
  onClick?: MouseEvent;
  onReset?: () => void;
  onOpenChange?: (value: boolean) => void;
  onFocus?: KeyboardEvent;
}
