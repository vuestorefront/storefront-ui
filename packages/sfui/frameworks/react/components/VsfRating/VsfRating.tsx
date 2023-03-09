import classNames from 'classnames';
import { clamp, roundToNearest } from '@storefront-ui/shared';
import { VsfIconStarFilled, VsfIconStar, VsfIconStarHalf } from '../VsfIcons';
import { VsfRatingSize, type VsfRatingProps } from './types';

const sizeClasses = {
  [VsfRatingSize.xs]: 'text-xs',
  [VsfRatingSize.sm]: 'text-sm',
  [VsfRatingSize.base]: 'text-base',
  [VsfRatingSize.lg]: 'text-lg',
  [VsfRatingSize.xl]: 'text-xl',
};

export default function VsfRating({
  size = VsfRatingSize.base,
  max = 5,
  value = 0,
  halfIncrement,
  ariaLabel,
  className,
  ...attributes
}: VsfRatingProps) {
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
        <VsfIconStarFilled aria-hidden="true" className="w-[1.5em] h-[1.5em]" key={key} />
      ))}
      {Boolean(partiallyFilled) && <VsfIconStarHalf aria-hidden="true" className="w-[1.5em] h-[1.5em]" />}
      {[...Array(empty).keys()].map((key) => (
        <VsfIconStar aria-hidden="true" className="text-disabled-500 w-[1.5em] h-[1.5em]" key={key} />
      ))}
    </div>
  );
}
