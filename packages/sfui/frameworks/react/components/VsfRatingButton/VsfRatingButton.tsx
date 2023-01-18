import React, { useState, useMemo } from 'react';
import type { VsfRatingButtonProps } from './types';
import { VsfRatingButtonSize } from './types';
import { VsfIconSize } from '../VsfIconBase/types';

export default function VsfRatingButton({
  max = 5,
  size = VsfRatingButtonSize.base,
  disabled = false,
  value = 0,
  name,
  ariaLabel,
  onChange,
  className,
  renderIconFilled,
  renderIconEmpty,
  ...attributes
}: VsfRatingButtonProps) {
  const [activeIcon, setActiveIcon] = useState(0);
  const getIconSize = (): VsfIconSize => {
    switch (size) {
      case VsfRatingButtonSize.sm:
        return VsfIconSize.base;
      case VsfRatingButtonSize.lg:
        return VsfIconSize.xl;
      default:
        return VsfIconSize.lg;
    }
  };
  function createRatingPointsArray(amount: number): number[] {
    return Array.from({ length: amount }, (item, index) => index + 1);
  }
  const ratingPointsArray = useMemo(() => createRatingPointsArray(max), [max]);
  const iconFilled = renderIconFilled?.(getIconSize());
  const iconEmpty = renderIconEmpty?.(getIconSize());

  return (
    <fieldset
      className={`vsf-rating-button vsf-rating-button__group ${className}`}
      disabled={disabled}
      {...attributes}
      data-testid="rating-button"
    >
      <legend className="vsf-rating-button__legend" data-testid="rating-button-legend">
        {name}
      </legend>
      {ratingPointsArray.map((rateValue) => (
        <span
          className="vsf-rating-button__item"
          key={`${name}-${rateValue}`}
          data-testid={`rating-button-item-${rateValue}`}
        >
          <input
            type="radio"
            aria-label={ariaLabel}
            name={name}
            id={`${name}-${rateValue}`}
            value={rateValue}
            className="vsf-rating-button__input vsf-rating-button__input--items peer"
            onChange={() => onChange?.(rateValue)}
            disabled={disabled}
            checked={value === rateValue}
            onFocus={() => setActiveIcon(rateValue)}
            data-testid={`rating-button-item-input-${rateValue}`}
          />
          <label
            className="vsf-rating-button__label"
            htmlFor={`${name}-${rateValue}`}
            onMouseEnter={() => setActiveIcon(rateValue)}
            onMouseLeave={() => setActiveIcon(value)}
          >
            {(activeIcon || value) >= rateValue && !disabled ? (
              <span
                className="vsf-rating-button__icon vsf-rating-button__icon--filled"
                data-testid={`rating-button-icon-filled-${rateValue}`}
              >
                {iconFilled}
              </span>
            ) : (
              <span className="vsf-rating-button__icon vsf-rating-button__icon--empty">{iconEmpty}</span>
            )}
          </label>
        </span>
      ))}
    </fieldset>
  );
}
