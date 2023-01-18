import classNames from 'classnames';
import { progressSvgSizes } from '@storefront-ui/shared';
import type { VsfProgressCircularProps } from './types';
import { VsfProgressCircularSize } from './types';

export default function VsfProgressCircular({
  value = 0,
  size = VsfProgressCircularSize.base,
  withValue = true,
  className,
  ...attributes
}: VsfProgressCircularProps): JSX.Element {
  const strokeWidth = () => {
    switch (size) {
      case VsfProgressCircularSize['2xl']:
        return 3;

      case VsfProgressCircularSize['3xl']:
        return 4;

      case VsfProgressCircularSize['4xl']:
        return 8;

      default:
        return 2;
    }
  };

  return (
    <div
      className={classNames('vsf-progress-circular', className)}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      {...attributes}
      data-testid="progress"
    >
      <svg
        role="img"
        width={progressSvgSizes[size].icon}
        height={progressSvgSizes[size].icon}
        strokeWidth={strokeWidth()}
        className={classNames(!withValue && 'vsf-progress-circular__icon')}
        viewBox={`0 0 ${progressSvgSizes[size].icon} ${progressSvgSizes[size].icon}`}
      >
        <circle
          stroke="#e6e6e6"
          fill="none"
          r={progressSvgSizes[size].r}
          cx={progressSvgSizes[size].icon / 2}
          cy={progressSvgSizes[size].icon / 2}
          strokeDasharray={`${progressSvgSizes[size].dash} ${progressSvgSizes[size].dash}`}
          className="vsf-progress-circular__circle"
        />

        <circle
          stroke="#16A34A"
          fill="none"
          r={progressSvgSizes[size].r}
          cx={progressSvgSizes[size].icon / 2}
          cy={progressSvgSizes[size].icon / 2}
          strokeDasharray={`${progressSvgSizes[size].dash * (value / 100)}, ${progressSvgSizes[size].dash}`}
          className="vsf-progress-circular__circle"
        />

        <text
          textAnchor="middle"
          alignmentBaseline="central"
          x="50%"
          y="50%"
          className={classNames('vsf-progress-circular__label', `vsf-progress-circular__label--${size}`)}
          data-testid="progress-value"
        >
          {withValue ? `${value}%` : ''}
        </text>
      </svg>
    </div>
  );
}
