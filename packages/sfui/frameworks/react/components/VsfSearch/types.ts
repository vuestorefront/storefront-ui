import type { ReactNode, FormEventHandler, MouseEventHandler } from 'react';
import type { PropsWithStyle } from '../../shared/types';

export type VsfSearchProps = PropsWithStyle & {
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  name?: string;
  inputProps?: Record<string, unknown>;
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
  slotSubmit?: ReactNode;
  slotResults?: ReactNode;
  onInput?: FormEventHandler<HTMLInputElement>;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  onReset?: MouseEventHandler<Element>;
};
