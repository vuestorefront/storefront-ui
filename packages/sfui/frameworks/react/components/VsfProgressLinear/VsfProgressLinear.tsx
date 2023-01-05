import classNames from 'classnames';
import type { VsfProgressLinearProps } from './types';
import { VsfProgressLinearSizes } from './types';

export default function VsfProgressLinear({
  value = 0,
  size = VsfProgressLinearSizes.base,
  withValue = true,
  className,
  ...attributes
}: VsfProgressLinearProps): JSX.Element {
  return (
    <label
      className={classNames(
        'vsf-progress-linear',
        `vsf-progress-linear--size--${size}`,
        { 'vsf-progress-linear--no-value': !withValue },
        className,
      )}
      data-testid="progress"
      {...attributes}
    >
      <progress id="progressbar" max={100} className="vsf-progress-linear__progress" value={value} />
      {withValue && size !== VsfProgressLinearSizes.minimal && (
        <span className="vsf-progress-linear__label" data-testid="progress-value">{`${value}%`}</span>
      )}
    </label>
  );
}
