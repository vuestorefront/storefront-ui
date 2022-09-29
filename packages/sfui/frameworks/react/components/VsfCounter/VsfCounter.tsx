import classNames from 'classnames';
import type { VsfCounterProps } from './types';

export default function VsfCounter({
  size = 'base',
  pill = false,
  children,
  className,
 }: VsfCounterProps): JSX.Element {
  const classes = classNames([
    className,
    'vsf-counter',
    `vsf-counter--${size}`,
    pill ? `vsf-counter__pill vsf-counter__pill--${size}` : 'vsf-counter__pill--brackets',
  ]);
  return (
    <span className={classes}>
      {children}
    </span>
  );
}
