import { clamp, roundToNearest } from '@sfui/sfui/shared/utils/index';
import classNames from 'classnames';
import { VsfIconStar, VsfIconStarOutline, VsfIconStarPartiallyFilled } from '../VsfIcons';
import { VsfRatingSizes, VsfRatingVariants } from './types';
import type { VsfRatingProps } from './types';

export default function VsfRating({
  size = VsfRatingSizes.base,
  variant = VsfRatingVariants.base,
  max = 5,
  value = 0,
  halfIncrement,
  className,
  ...attributes
}: VsfRatingProps) {
  let precision = 1;
  // currently component supports only full/half stars, but this logic might be useful in more complex future cases
  if (halfIncrement) {
    precision = 0.5;
  }
  // round value to the nearest step value
  const ratingValue = clamp(roundToNearest(value, precision), 0, max);

  const partiallyFilled = Number(!Number.isInteger(ratingValue)); // 0 or 1

  const filled = Math.ceil(ratingValue - partiallyFilled);

  const empty = max - filled - partiallyFilled;

  const classes = classNames(
    'vsf-rating',
    {
      'vsf-rating--xs': size === VsfRatingSizes.xs,
      'vsf-rating--sm': size === VsfRatingSizes.sm,
      'vsf-rating--base': size === VsfRatingSizes.base,
      'vsf-rating--lg': size === VsfRatingSizes.lg,
      'vsf-rating--xl': size === VsfRatingSizes.xl,
    },
    className,
  );

  const label = `${value} out of ${max}`;

  return (
    <div role="img" className={classes} aria-label={label} {...attributes} title={label}>
      {variant === 'withValue' ? (
        <>
          <VsfIconStar aria-hidden="true" className="vsf-rating__star-filled" />
          <span className="vsf-rating__value">{value}</span>
        </>
      ) : (
        <>
          {[...Array(filled).keys()].map((key) => (
            <VsfIconStar aria-hidden="true" className="vsf-rating__star-filled" key={key} />
          ))}
          {Boolean(partiallyFilled) && (
            <VsfIconStarPartiallyFilled aria-hidden="true" className="vsf-rating__star-partial" />
          )}
          {[...Array(empty).keys()].map((key) => (
            <VsfIconStarOutline aria-hidden="true" className="vsf-rating__star-empty" key={key} />
          ))}
        </>
      )}
    </div>
  );
}
