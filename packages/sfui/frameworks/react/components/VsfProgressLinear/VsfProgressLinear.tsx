import classNames from 'classnames';
import type { VsfProgressLinearProps } from './types';
import { VsfProgressLinearSize } from './types';

export default function VsfProgressLinear({
  value = 0,
  size = VsfProgressLinearSize.base,
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
      {withValue && size !== VsfProgressLinearSize.minimal && (
        <span className="vsf-progress-linear__label" data-testid="progress-value">{`${value}%`}</span>
      )}
    </label>
  );
}
