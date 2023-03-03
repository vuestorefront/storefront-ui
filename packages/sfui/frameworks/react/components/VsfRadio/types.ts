import type { PropsWithStyle } from '../../shared/types';

export interface VsfRadioProps extends React.InputHTMLAttributes<HTMLInputElement>, PropsWithStyle {
  invalid?: boolean;
}
