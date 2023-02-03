import classNames from 'classnames';
import type { VsfSwitchProps } from './types';
import { VsfSwitchAlignment } from './types';
import { VsfCheckboxAlignment, VsfCheckbox } from '../VsfCheckbox';

export default function VsfSwitch({
  value,
  label,
  disabled,
  alignment = VsfSwitchAlignment.prefix,
  helpText,
  className,
  labelTag,
  onChange,
  ...attributes
}: VsfSwitchProps): JSX.Element {
  return (
    <VsfCheckbox
      className={classNames('vsf-switch', className)}
      value={value}
      label={label}
      disabled={disabled}
      alignment={alignment === VsfSwitchAlignment.prefix ? VsfCheckboxAlignment.leading : VsfCheckboxAlignment.trailing}
      helpText={helpText}
      labelTag={labelTag}
      {...attributes}
      onChange={onChange}
    />
  );
}
