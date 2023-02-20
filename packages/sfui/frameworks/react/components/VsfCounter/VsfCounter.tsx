import classNames from 'classnames';
import type { VsfCounterProps } from './types';
import { VsfCounterSize } from './types';

export default function VsfCounter({
  size = VsfCounterSize.base,
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
    <span className={classes} data-testid="counter" {...attributes}>
      {children}
    </span>
  );
}
