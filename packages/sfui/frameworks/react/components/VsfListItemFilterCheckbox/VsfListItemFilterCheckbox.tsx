import { useState } from 'react';
import VsfListItemMenu from '../VsfListItemMenu';
import { VsfListItemFilterCheckboxProps, VsfListItemFilterCheckboxVariant } from './types';
import VsfCheckbox from '../VsfCheckbox';

export default function VsfListItemFilterCheckbox({
  label,
  counter,
  size,
  variant = VsfListItemFilterCheckboxVariant.left,
  secondaryText,
  disabled,
  className,
  truncate,
  value,
  name,
  children,
  checked,
  onChange = () => '',
  ...attributes
}: VsfListItemFilterCheckboxProps): JSX.Element {
  const [checkedState, setCheckedState] = useState(false);

  return (
    <li>
      <VsfListItemMenu
        tag="label"
        label={label}
        counter={counter}
        size={size}
        selected={checkedState}
        className={className}
        secondaryText={secondaryText}
        disabled={disabled}
        truncate={truncate}
        slotPrefix={
          variant === VsfListItemFilterCheckboxVariant.left ? (
            <VsfCheckbox
              labelTag="div"
              value={value}
              name={name}
              onChange={(event) => {
                setCheckedState(event.target.checked);
                onChange(event);
              }}
            />
          ) : null
        }
        slotSuffix={
          variant === VsfListItemFilterCheckboxVariant.right ? (
            <VsfCheckbox
              labelTag="div"
              value={value}
              name={name}
              onChange={(event) => {
                setCheckedState(event.target.checked);
                onChange(event);
              }}
            />
          ) : null
        }
        {...attributes}
      >
        {children}
      </VsfListItemMenu>
    </li>
  );
}
