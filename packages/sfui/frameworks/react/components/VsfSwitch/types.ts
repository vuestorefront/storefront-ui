import type { PropsWithStyle } from '../../shared/types';

export interface VsfSwitchProps extends PropsWithStyle, React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}
