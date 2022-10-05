import { ChangeEvent } from 'react';
import classNames from 'classnames';
import { VsfIconMinus, VsfIconPlus } from '../VsfIcons';
import VsfButton from '../VsfButton/VsfButton';
import { VsfQuantitySelectorProps, VsfQuantitySelectorSizes } from './types';

export default function VsfQuantitySelector({
  inputAriaLabel,
  inputId,
  value,
  minValue = 1,
  maxValue,
  step = 1,
  disabled,
  size = VsfQuantitySelectorSizes.base,
  block,
  onChange,
  slotDescription,
  className,
  ...attributes
}: VsfQuantitySelectorProps) {
  const increaseDisabled = disabled || (maxValue !== undefined && value !== undefined && value >= maxValue);
  const decreaseDisabled = disabled || (minValue !== undefined && value !== undefined && value <= minValue);

  function handleIncrease() {
    const nextValue = (Number(value) ?? 0) + Number(step);
    if (maxValue !== undefined && nextValue > maxValue) {
      return;
    }
    onChange?.(nextValue);
  }

  function handleDecrease() {
    const nextValue = (Number(value) ?? 0) - Number(step);
    if (minValue !== undefined && nextValue < minValue) {
      return;
    }
    onChange?.(nextValue);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value: currentValue } = event.target;
    const nextValue = currentValue.length > 0 ? Number(currentValue) : undefined;
    if (nextValue !== undefined) {
      if (maxValue !== undefined && nextValue > maxValue) {
        return;
      }
      if (minValue !== undefined && nextValue < minValue) {
        return;
      }
      onChange?.(nextValue);
    }
  }
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
          size={size}
          tabIndex="-1"
        >
          <VsfIconMinus />
        </VsfButton>

        <input
          id={inputId}
          step={step}
          role="spinbutton"
          className="vsf-qty-selector__input"
          value={value}
          disabled={disabled}
          aria-label={inputAriaLabel}
          aria-disabled={disabled}
          aria-valuenow={value}
          aria-valuemin={minValue}
          aria-valuemax={maxValue}
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
          size={size}
          tabIndex="-1"
        >
          <VsfIconPlus />
        </VsfButton>
      </div>
      {slotDescription && <div className="vsf-qty-selector__description">{slotDescription}</div>}
    </div>
  );
}
