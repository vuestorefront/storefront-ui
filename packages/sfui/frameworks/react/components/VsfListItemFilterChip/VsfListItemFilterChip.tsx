import { useState, ChangeEvent } from 'react';
import { VsfListItemMenu } from '../VsfListItemMenu';
import type { VsfListItemFilterChipProps, ItemChipProps } from './types';
import { VsfListItemFilterChipVariant } from './types';
import { VsfChip, VsfChipSize } from '../VsfChip';
import { VsfChipThumbnail, VsfChipThumbnailSize } from '../VsfChipThumbnail';

function ItemChip({ value, disabled, color, selected, onChange }: ItemChipProps) {
  return (
    <VsfChip
      value={value}
      labelTag="span"
      disabled={disabled}
      className="list-item-filter-chip__chip"
      size={VsfChipSize.sm}
      selected={selected}
      onSelected={onChange}
      slotPrefix={<VsfChipThumbnail color={color} size={VsfChipThumbnailSize.sm} />}
    />
  );
}

export default function VsfListItemFilterChip({
  label,
  counter,
  size,
  variant = VsfListItemFilterChipVariant.left,
  secondaryText,
  disabled,
  className,
  truncate,
  value,
  color,
  children,
  defaultValue = false,
  onChange,
  ...attributes
}: VsfListItemFilterChipProps): JSX.Element {
  const [selected, setSelected] = useState(defaultValue);

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    setSelected(event.target.checked);
    onChange(event);
  }
  return (
    <li className="list-item-filter-chip" data-testid="list-item-filter-chip">
      <VsfListItemMenu
        tag="label"
        label={label}
        counter={counter}
        size={size}
        selected={selected}
        className={className}
        secondaryText={secondaryText}
        disabled={disabled}
        truncate={truncate}
        slotPrefix={
          variant === VsfListItemFilterChipVariant.left && (
            <ItemChip value={value} color={color} disabled={disabled} selected={selected} onChange={handleOnChange} />
          )
        }
        slotSuffix={
          variant === VsfListItemFilterChipVariant.right && (
            <ItemChip value={value} color={color} disabled={disabled} selected={selected} onChange={handleOnChange} />
          )
        }
        {...attributes}
      >
        {children}
      </VsfListItemMenu>
    </li>
  );
}
