import classNames from 'classnames';
import type { VsfSwitchProps } from './types';
import { VsfCheckbox } from '../VsfCheckbox';

export default function VsfSwitch({
  value,
  disabled,
  className,
  onChange,
  ...attributes
}: VsfSwitchProps): JSX.Element {
  return (
    <VsfCheckbox
      className={classNames('vsf-switch', className)}
      value={value}
      disabled={disabled}
      {...attributes}
      onChange={onChange}
    />
  );
}
