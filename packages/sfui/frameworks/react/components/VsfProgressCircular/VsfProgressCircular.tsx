import classNames from 'classnames';
import { svgSizes } from '@storefront-ui/shared/progress';
import type { VsfProgressCircularProps } from './types';
import { VsfProgressCircularSizes } from './types';

export default function VsfProgressCircular({
  value = 0,
  size = VsfProgressCircularSizes.base,
  withValue = true,
  className,
  ...attributes
}: VsfProgressCircularProps): JSX.Element {
  const strokeWidth = () => {
    switch (size) {
      case VsfProgressCircularSizes['2xl']:
        return 3;

      case VsfProgressCircularSizes['3xl']:
        return 4;

      case VsfProgressCircularSizes['4xl']:
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
        width={svgSizes[size].icon}
        height={svgSizes[size].icon}
        strokeWidth={strokeWidth()}
        className={classNames(!withValue && 'vsf-progress-circular__icon')}
        viewBox={`0 0 ${svgSizes[size].icon} ${svgSizes[size].icon}`}
      >
        <circle
          stroke="#e6e6e6"
          fill="none"
          r={svgSizes[size].r}
          cx={svgSizes[size].icon / 2}
          cy={svgSizes[size].icon / 2}
          strokeDasharray={`${svgSizes[size].dash} ${svgSizes[size].dash}`}
          className="vsf-progress-circular__circle"
        />

        <circle
          stroke="#16A34A"
          fill="none"
          r={svgSizes[size].r}
          cx={svgSizes[size].icon / 2}
          cy={svgSizes[size].icon / 2}
          strokeDasharray={`${svgSizes[size].dash * (value / 100)}, ${svgSizes[size].dash}`}
          className="vsf-progress-circular__circle"
        />

        <text
          textAnchor="middle"
          alignmentBaseline="central"
          x="50%"
          y="50%"
          className={classNames('vsf-progress-circular__label', `vsf-progress-circular__label--${size}`)}
        >
          {withValue ? `${value}%` : ''}
        </text>
      </svg>
    </div>
  );
}
