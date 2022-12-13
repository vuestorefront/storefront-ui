import VsfListItemMenu from '../VsfListItemMenu';
import { VsfListItemFilterRadioProps, VsfListItemFilterRadioVariant } from './types';
import { VsfRadio } from '../VsfRadio';

export default function VsfListItemFilterRadio({
  label,
  counter,
  size,
  variant = VsfListItemFilterRadioVariant.left,
  secondaryText,
  disabled,
  className,
  truncate,
  selected,
  value,
  name,
  onChange = () => '',
  ...attributes
}: VsfListItemFilterRadioProps): JSX.Element {
  const toggle = (currentValue?: string, selectedValue?: string) =>
    onChange(selectedValue === currentValue ? '' : currentValue || '');

  return (
    <VsfListItemMenu
      label={label}
      counter={counter}
      size={size}
      selected={selected === value}
      className={className}
      secondaryText={secondaryText}
      disabled={disabled}
      truncate={truncate}
      onClick={() => toggle(value, selected)}
      slotPrefix={
        variant === VsfListItemFilterRadioVariant.left ? (
          <VsfRadio
            checked={selected === value}
            value={value}
            name={name}
            onChange={(event) => toggle(event.target.value, selected)}
          />
        ) : null
      }
      slotSuffix={
        variant === VsfListItemFilterRadioVariant.right ? (
          <VsfRadio
            checked={selected === value}
            value={value}
            name={name}
            onChange={(event) => toggle(event.target.value, selected)}
          />
        ) : null
      }
      {...attributes}
    />
  );
}
