import type { InputHTMLAttributes } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export interface VsfCheckboxProps extends PropsWithStyle, InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}
