import classNames from 'classnames';
import { VsfLoaderLinearSize } from './types';
import type { VsfLoaderLinearProps } from './types';

export default function VsfLoaderLinear({
  size = VsfLoaderLinearSize.minimal,
  screenReaderText = 'loading',
  className,
  ...attributes
}: VsfLoaderLinearProps): JSX.Element {
  return (
    <span
      className={classNames('vsf-loader-linear', className, `vsf-loader-linear--${size}`)}
      aria-live="polite"
      {...attributes}
      data-testid="loader-linear"
    >
      <span className="vsf-loader-linear__sr-only" data-testid="loader-sr">
        {screenReaderText}
      </span>
      <span className="vsf-loader-linear-main" aria-hidden="true" />
      <span className="vsf-loader-linear-animated" aria-hidden="true" />
    </span>
  );
}
