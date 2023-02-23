import type { PropsWithChildren, ChangeEvent } from 'react';
import type { VsfInputProps } from '../VsfInput';
import type { VsfSelectProps } from '../VsfSelect';
import type { VsfDropdownMenuProps } from '../VsfDropdownMenu';

import type { PropsWithStyle } from '../../shared/types';

export enum VsfSelectDropdownSize {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

export interface VsfSelectDropdownProps
  extends PropsWithChildren,
    PropsWithStyle,
    Pick<VsfInputProps, 'label' | 'disabled' | 'required' | 'value' | 'placeholder' | 'invalid'>,
    Partial<Pick<VsfSelectProps, 'options' | 'errorText' | 'helpText' | 'requiredText'>>,
    Pick<VsfDropdownMenuProps, 'loading'> {
  open?: boolean;
  size?: `${VsfSelectDropdownSize}`;
  onOpenUpdate: (isOpen: boolean) => void;
  onItemClick: (selectedItem: string) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
