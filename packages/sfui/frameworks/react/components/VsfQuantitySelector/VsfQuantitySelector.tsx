import { useRef } from 'react';
import classNames from 'classnames';
import { VsfIconMinus, VsfIconPlus } from '../VsfIcons';
import VsfButton from '../VsfButton/VsfButton';
import type { VsfQuantitySelectorProps } from './types';

export default function VsfQuantitySelector({
  value,
  minValue = 1,
  maxValue,
  step = 1,
  disabled,
  size,
  ariaLabel = 'Quantity selector',
  stockText,
  emptyStockText,
  block,
  onChange,
  slotDescription,
  ...attributes
}: VsfQuantitySelectorProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleIncrease() {}

  function handleDecrease() {}

  const stopIncrease = !!maxValue && Number(value) >= maxValue;

  const stopDecrease = Number(value) <= minValue;

  return (
    <div className={} {...attributes}>
      <div className={}>
        <VsfButton
          variant="tertiary"
          aria-controls="quantity-selector"
          aria-label="decrease"
          className="rounded-l-md"
          tile
          icon
          disabled={disabled || stopDecrease}
          aria-disabled={disabled || stopDecrease}
          onClick={handleDecrease}
          size={size}
        >
          <VsfIconMinus size="base" />
        </VsfButton>

        <div className={}>
          <input
            step={step}
            role="spinbutton"
            className="w-full text-center text-gray-900 bg-transparent disabled:text-transparent"
            ref={inputRef}
            value={value}
            disabled={disabled}
            aria-label={ariaLabel}
            aria-disabled={disabled}
            aria-valuenow={value}
            aria-valuemin={minValue}
            aria-valuemax={maxValue}
            onChange={onChange}
            min={minValue}
            max={maxValue}
            size={String(value).length}
          />
        </div>

        <VsfButton
          variant="tertiary"
          aria-controls="quantity-selector"
          aria-label="increase"
          className="rounded-r-md"
          tile
          icon
          disabled={disabled || stopIncrease}
          aria-disabled={disabled || stopIncrease}
          onClick={handleIncrease}
          size=""
        >
          <VsfIconPlus />
        </VsfButton>
      </div>
      <div className="mt-1 text-xs font-normal text-center font-body">
        {slotDescription || disabled ? (
          <span className="text-negative-600">Out of stock</span>
        ) : (
          <>
            {maxValue && <span className="font-medium mr-1">{maxValue}</span>}
            <span>in stock</span>
          </>
        )}
      </div>
    </div>
  );
}
