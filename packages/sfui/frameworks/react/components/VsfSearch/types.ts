import { CSSProperties, ReactNode, FormEventHandler, MouseEventHandler } from 'react';

export type VsfSearchProps = {
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  name?: string;
  required?: boolean;
  autocomplete?: string;
  slotPrefix?: ReactNode;
  slotSuffix?: ReactNode;
  slotSubmit?: ReactNode;
  slotResults?: ReactNode;
  onInput?: FormEventHandler<HTMLInputElement>;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  onReset?: MouseEventHandler<Element>;
  className?: string | undefined;
  style?: CSSProperties;
};
