import classNames from 'classnames';
import { clamp, roundToNearest } from '@storefront-ui/shared';
import { SfIconStarFilled, SfIconStar, SfIconStarHalf, SfRatingSize } from '@storefront-ui/react';
import type { SfRatingProps } from '@storefront-ui/react';

const sizeClasses = {
  [SfRatingSize.xs]: 'text-xs',
  [SfRatingSize.sm]: 'text-sm',
  [SfRatingSize.base]: 'text-base',
  [SfRatingSize.lg]: 'text-lg',
  [SfRatingSize.xl]: 'text-xl',
};

export default function SfRating({
  size = SfRatingSize.base,
  max = 5,
  value = 0,
  halfIncrement,
  ariaLabel,
  className,
  ...attributes
}: SfRatingProps) {
  const precision = halfIncrement ? 0.5 : 1;
  const ratingValue = clamp(roundToNearest(value, precision), 0, max);

  const partiallyFilled = Number(!Number.isInteger(ratingValue)); // 0 or 1

  const filled = Math.ceil(ratingValue - partiallyFilled);

  const empty = max - filled - partiallyFilled;

  const label = ariaLabel ?? `${value} out of ${max}`;

  return (
    <div
      role="img"
      aria-label={label}
      title={label}
      className={classNames('inline-flex items-center text-warning-500', sizeClasses[size], className)}
      data-testid="rating"
      {...attributes}
    >
      {[...Array(filled).keys()].map((key) => (
        <SfIconStarFilled aria-hidden="true" className="w-[1.5em] h-[1.5em]" key={key} />
      ))}
      {Boolean(partiallyFilled) && <SfIconStarHalf aria-hidden="true" className="w-[1.5em] h-[1.5em]" />}
      {[...Array(empty).keys()].map((key) => (
        <SfIconStar aria-hidden="true" className="text-disabled-500 w-[1.5em] h-[1.5em]" key={key} />
      ))}
    </div>
  );
}
