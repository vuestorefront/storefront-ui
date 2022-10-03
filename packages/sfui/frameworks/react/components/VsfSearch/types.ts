import { CSSProperties, ReactNode, FormEventHandler, MouseEventHandler } from 'react';

type PropsWithStyle<P = unknown> = P & {
  className?: string | undefined;
  style?: CSSProperties;
};

export type VsfSearchProps = PropsWithStyle<{
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
}>;
