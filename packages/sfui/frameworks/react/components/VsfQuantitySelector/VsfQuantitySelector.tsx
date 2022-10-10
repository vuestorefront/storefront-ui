import { ChangeEvent } from 'react';
import classNames from 'classnames';
import { clamp } from '@sfui/sfui/shared/utils';
import { VsfIconMinus, VsfIconPlus } from '../VsfIcons';
import VsfButton, { VsfButtonSizes } from '../VsfButton';
import { VsfQuantitySelectorProps, VsfQuantitySelectorSizes } from './types';

export default function VsfQuantitySelector({
  inputAriaLabel = 'Quantity Selector',
  inputId = 'qty-selector',
  minValue = 1,
  maxValue = Number.POSITIVE_INFINITY,
  step = 1,
  size = VsfQuantitySelectorSizes.base,
  value,
  disabled,
  block,
  onChange,
  className,
  children,
  ...attributes
}: VsfQuantitySelectorProps) {
  const increaseDisabled = disabled || value >= maxValue;
  const decreaseDisabled = disabled || value <= minValue;

  function handleIncrease() {
    onChange(Math.min(value + Number(step), maxValue));
  }

  function handleDecrease() {
    onChange(Math.max(value - Number(step), minValue));
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value: currentValue } = event.target;
    if (currentValue) {
      const nextValue = clamp(Number(currentValue), minValue, maxValue);
      onChange(nextValue);
    }
  }
  const buttonSize = size === VsfQuantitySelectorSizes.lg ? VsfButtonSizes.lg : VsfButtonSizes.base;

  return (
    <div
      className={classNames(
        'vsf-qty-selector',
        { 'vsf-qty-selector--disabled': disabled, 'vsf-qty-selector--block': block },
        className,
      )}
      {...attributes}
    >
      <div className="vsf-qty-selector__wrapper">
        <VsfButton
          variant="tertiary"
          aria-controls={inputId}
          aria-label="decrease"
          className="vsf-qty-selector__decrease"
          tile
          icon
          disabled={decreaseDisabled}
          onClick={handleDecrease}
          size={buttonSize}
        >
          <VsfIconMinus />
        </VsfButton>

        <input
          id={inputId}
          type="number"
          step={step}
          role="spinbutton"
          className="vsf-qty-selector__input"
          value={value}
          disabled={disabled}
          aria-label={inputAriaLabel}
          aria-disabled={disabled}
          onChange={handleChange}
          min={minValue}
          max={maxValue}
        />

        <VsfButton
          variant="tertiary"
          aria-controls={inputId}
          aria-label="increase"
          className="vsf-qty-selector__increase"
          tile
          icon
          disabled={increaseDisabled}
          onClick={handleIncrease}
          size={buttonSize}
        >
          <VsfIconPlus />
        </VsfButton>
      </div>
      {children}
    </div>
  );
}
