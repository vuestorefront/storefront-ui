import classNames from 'classnames';
import { VsfLoaderSize } from './types';
import type { VsfLoaderCircularProps } from './types';

export default function VsfLoaderCircular({
  size = VsfLoaderSize.lg,
  screenReaderText = 'loading',
  className,
  ...attributes
}: VsfLoaderCircularProps): JSX.Element {
  return (
    <span
      className={classNames('vsf-loader-circular', className)}
      aria-live="polite"
      {...attributes}
      data-testid="loader-circular"
    >
      <span className="vsf-loader-circular__sr-only" data-testid="loader-sr">
        {screenReaderText}
      </span>
      <span className={classNames('vsf-loader-circular__main', `vsf-loader-circular--${size}`)} aria-hidden="true" />
      <svg
        className={classNames('vsf-loader-circular__circle', `vsf-loader-circular--${size}`)}
        viewBox="25 25 50 50"
        data-testid="loader-circular-circle"
      >
        <circle className="vsf-loader-circular__circle-path" cx="50" cy="50" r="24" />
      </svg>
    </span>
  );
}
