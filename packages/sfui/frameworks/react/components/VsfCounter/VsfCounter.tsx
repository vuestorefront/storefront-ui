import classNames from 'classnames';
import type { VsfCounterProps } from './types';

export default function VsfCounter({
  size = 'base',
  pill = false,
  children,
  className,
 }: VsfCounterProps): JSX.Element {
  return (
    <span className={classNames([
      className,
      'vsf-counter',
      `vsf-counter__font-size--${size}`,
      `vsf-counter__font-weight--${size}`,
      `${pill ?
        `vsf-counter__font-weight--pill
        vsf-counter__pill-size--${size}
        vsf-counter__pill-spacing--${size}` :
        'vsf-counter__pill-brackets'
      }`
    ])}>
      {children}
    </span>
  );
}
