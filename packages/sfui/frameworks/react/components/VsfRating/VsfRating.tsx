import { useCallback } from 'react';
import { VsfIconStar, VsfIconStarOutline, VsfIconStarPartiallyFilled } from '../../components/VsfIcons';
import type { VsfRatingProps } from './types';
import { clamp, roundToNearest } from '@sfui/sfui/shared/utils';
import classNames from 'classnames';

const VsfCounter = ({ children, size, ...rest }: any) => {
  return <div {...rest}>{children}</div>;
};

export default function VsfRating({
  size = 'base',
  variant = 'base',
  max = 5,
  value = 0,
  halfIncrement,
  className,
  count,
  ...attributes
}: VsfRatingProps) {
  let precision = 1;
  // currently component supports only full/half stars, but this logic might be useful in more complex future cases
  if (halfIncrement) {
    precision = 0.5;
  }
  // always rounds to the nearest step value
  const ratingValue = clamp(roundToNearest(value, precision), 0, max);

  const partiallyFilled = Number(!Number.isInteger(ratingValue)); // 0 or 1

  const filled = Math.ceil(ratingValue - partiallyFilled);

  const empty = max - filled - partiallyFilled;

  const ratingClass = classNames(
    'vsf-rating',
    {
      'vsf-rating--xs': size === 'xs',
      'vsf-rating--sm': size === 'sm',
      'vsf-rating--base': size === 'base',
      'vsf-rating--lg': size === 'lg',
      'vsf-rating--xl': size === 'xl',
    },
    className,
  );
  const counterSize = useCallback(() => {
    return {
      xs: 'base',
      sm: 'base',
      base: 'lg',
      lg: 'xl',
      xl: '2xl',
    }[size];
  }, [size]);

  return (
    <>
      <div role="img" className={ratingClass} aria-label={`Rating: ${ratingValue} out of ${max} stars`} {...attributes}>
        {variant === 'withValue' ? (
          <>
            <VsfIconStar aria-hidden="true" className="vsf-rating__star-filled" size={size} />
            <span className="vsf-rating__value">{ratingValue}</span>
          </>
        ) : (
          <>
            {[...Array(filled)].map((_, index) => (
              <VsfIconStar aria-hidden="true" className="vsf-rating__star-filled" key={index} size={size} />
            ))}
            {Boolean(partiallyFilled) && (
              <VsfIconStarPartiallyFilled aria-hidden="true" className="vsf-rating__star-partial" size={size} />
            )}
            {[...Array(empty)].map((_, index) => (
              <VsfIconStarOutline aria-hidden="true" className="vsf-rating__star-empty" key={index} size={size} />
            ))}
          </>
        )}
        {count && (
          <VsfCounter className="vsf-rating__count" size={counterSize}>
            {count}
          </VsfCounter>
        )}
      </div>
    </>
  );
}
