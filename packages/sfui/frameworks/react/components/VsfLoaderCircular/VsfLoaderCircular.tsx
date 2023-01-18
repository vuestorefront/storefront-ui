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
      <span className="vsf-loader-circular-main" aria-hidden="true" />
      <span
        className={classNames('vsf-loader-circular-circle', `vsf-loader-circular--${size}`)}
        aria-hidden="true"
        data-testid="loader-circular-circle"
      />
    </span>
  );
}
