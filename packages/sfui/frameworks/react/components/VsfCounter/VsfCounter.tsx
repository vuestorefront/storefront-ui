import classNames from 'classnames';
import type { VsfCounterProps } from './types';

export default function VsfCounter({ size = 'base', pill = false, children, className }: VsfCounterProps): JSX.Element {
  const classes = classNames([
    className,
    'vsf-counter',
    `vsf-counter--${size}`,
    {
      'vsf-counter--pill': pill,
    },
  ]);
  return <span className={classes}>{children}</span>;
}
