import classNames from 'classnames';
import type { VsfSwitchProps } from './types';
import { VsfSwitchAlignments } from './types';
import { VsfCheckboxAlignments, VsfCheckbox } from '../VsfCheckbox';

export default function VsfSwitch({
  value,
  label,
  disabled,
  alignment = VsfSwitchAlignments.start,
  helpText,
  className,
  onChange,
  ...attributes
}: VsfSwitchProps): JSX.Element {
  return (
    <VsfCheckbox
      className={classNames('vsf-switch', className)}
      value={value}
      label={label}
      disabled={disabled}
      alignment={
        alignment === VsfSwitchAlignments.start ? VsfCheckboxAlignments.leading : VsfCheckboxAlignments.trailing
      }
      helpText={helpText}
      {...attributes}
      onChange={onChange}
    />
  );
}
