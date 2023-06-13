import { useState, type ChangeEvent } from 'react';
import classNames from 'classnames';
import {
  SfIconStar,
  SfIconStarFilled,
  SfIconSize,
  SfRatingButtonSize,
  type SfRatingButtonProps,
  type SfRatingButtonRenderProps,
} from '@storefront-ui/react';

function defaultLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}`;
}

const renderDefaultIcon = ({ isFilled, iconSize }: SfRatingButtonRenderProps) => {
  if (isFilled) {
    return (
      <SfIconStarFilled
        data-testid="ratingbutton-icon-filled"
        role="none"
        className="text-primary-700 cursor-pointer peer-disabled:cursor-default peer-disabled:text-disabled-500 peer-focus-visible:outline"
        size={iconSize}
      />
    );
  }
  return (
    <SfIconStar
      data-testid="ratingbutton-icon-empty"
      role="none"
      className="text-neutral-500 cursor-pointer peer-disabled:cursor-default peer-disabled:text-disabled-500 peer-focus-visible:outline"
      size={iconSize}
    />
  );
};

export default function SfRatingButton({
  onChange,
  value = 0,
  disabled = false,
  max = 5,
  name = 'sf-rating-button',
  ariaLabel = 'Rating',
  size = SfRatingButtonSize.base,
  getLabelText = defaultLabelText,
  children = renderDefaultIcon,
  className,
  ...attributes
}: SfRatingButtonProps): JSX.Element {
  const [hoverValue, setHoverValue] = useState(0);
  const icons = Array.from({ length: Math.floor(Math.abs(max)) }, (_, index) => index + 1);
  const isIconFilled = (ratingValue: number) => ratingValue <= hoverValue || (hoverValue === 0 && ratingValue <= value);
  const iconSize: Record<SfRatingButtonSize, SfRatingButtonRenderProps['iconSize']> = {
    [SfRatingButtonSize.sm]: SfIconSize.base,
    [SfRatingButtonSize.base]: SfIconSize.lg,
    [SfRatingButtonSize.lg]: SfIconSize.xl,
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(Number(event.target.value));
  };

  const handleHoverIn = (ratingValue: number) => () => {
    if (!disabled) {
      setHoverValue(ratingValue);
    }
  };

  const handleHoverOut = () => {
    if (!disabled) {
      setHoverValue(0);
    }
  };

  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      className={classNames('flex', className)}
      data-testid="ratingbutton"
      {...attributes}
    >
      {icons.map((ratingValue) => (
        <label key={ratingValue} onMouseEnter={handleHoverIn(ratingValue)} onMouseLeave={handleHoverOut}>
          <span className="sr-only">{getLabelText(ratingValue)}</span>
          <input
            type="radio"
            name={name}
            value={ratingValue}
            checked={ratingValue === value}
            onChange={handleChange}
            disabled={disabled}
            className="sr-only peer"
          />
          {children({ isFilled: isIconFilled(ratingValue), value, max, iconSize: iconSize[size] })}
        </label>
      ))}
    </div>
  );
}
