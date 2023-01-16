import classNames from 'classnames';
import type { VsfCounterProps } from './types';
import { VsfCounterSizes } from './types';

export default function VsfCounter({
  size = VsfCounterSizes.base,
  pill = false,
  children,
  className,
  ...attributes
}: VsfCounterProps): JSX.Element {
  const classes = classNames([
    className,
    'vsf-counter',
    `vsf-counter--${size}`,
    {
      'vsf-counter--pill': pill,
    },
  ]);
  return (
    <span className={classes} {...attributes}>
      {children}
    </span>
  );
}
