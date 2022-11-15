import { ChangeEvent, useState, SyntheticEvent } from 'react';
import classNames from 'classnames';
import { clamp } from '../../sharedRoot/utils/index';
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
  decimal,
  ...attributes
}: VsfQuantitySelectorProps) {
  const [innerValue, setInnerValue] = useState<number>(value);

  const decreaseDisabled = disabled || innerValue <= minValue;
  const increaseDisabled = disabled || innerValue >= maxValue;

  function handleChange(currentValue: number) {
    const nextValue = Number(clamp(currentValue, minValue, maxValue).toFixed(decimal));
    setInnerValue(nextValue);
    onChange(nextValue);
  }

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    const { value: currentValue } = event.target;
    if (currentValue.length) {
      const nextValue = parseFloat(currentValue);
      handleChange(nextValue);
    } else {
      setInnerValue(Number(currentValue));
    }
  }

  function handleOnBlur(event: SyntheticEvent) {
    const { value: currentValue } = event.target as HTMLInputElement;
    if (currentValue.length) {
      const nextValue = parseFloat(currentValue);
      handleChange(nextValue);
    } else {
      handleChange(value);
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
      data-testid="qty-selector"
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
          data-testid="decrease-button"
          onClick={() => handleChange(innerValue - step)}
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
          value={innerValue}
          disabled={disabled}
          aria-label={inputAriaLabel}
          aria-disabled={disabled}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          min={minValue}
          max={maxValue}
          inputMode={decimal ? 'decimal' : 'numeric'}
        />

        <VsfButton
          variant="tertiary"
          aria-controls={inputId}
          aria-label="increase"
          className="vsf-qty-selector__increase"
          tile
          icon
          disabled={increaseDisabled}
          data-testid="increase-button"
          onClick={() => handleChange(innerValue + step)}
          size={buttonSize}
        >
          <VsfIconPlus />
        </VsfButton>
      </div>
      {children}
    </div>
  );
}
