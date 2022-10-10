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
  maxValue = Infinity,
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

  function handleChange(currentValue: number) {
    const nextValue = clamp(currentValue, minValue, maxValue);
    onChange(nextValue);
  }

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    const { value: currentValue } = event.target;
    if (currentValue) {
      handleChange(Number(currentValue));
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
          onClick={() => handleChange(value - step)}
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
          onChange={handleOnChange}
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
          onClick={() => handleChange(value + step)}
          size={buttonSize}
        >
          <VsfIconPlus />
        </VsfButton>
      </div>
      {children}
    </div>
  );
}
