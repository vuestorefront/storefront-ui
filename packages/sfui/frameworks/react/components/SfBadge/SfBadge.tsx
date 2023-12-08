import { SfBadgePlacement } from '@storefront-ui/shared';
import classNames from 'classnames';
import type { SfBadgeProps } from '@storefront-ui/react';

export default function SfBadge({
  content,
  variant,
  max = 99,
  placement = SfBadgePlacement['top-right'],
  className,
  ...attributes
}: SfBadgeProps): JSX.Element {
  const isDot = variant === 'dot';
  let displayValue = content;
  if (isDot) {
    displayValue = '';
  } else if (!Number.isNaN(content) && Number(content) > max) {
    displayValue = `${max}+`;
  }
  return (
    <span
      className={classNames(
        'block absolute py-0.5 px-1 bg-secondary-700 font-medium text-white text-[8px] leading-[8px] rounded-xl',
        {
          'min-w-[12px] min-h-[12px]': !isDot,
          'w-[10px] h-[10px]': isDot,
          'top-0 right-0 -translate-x-0.5 translate-y-0.5': placement === 'top-right',
          'top-0 left-0 translate-x-0.5 translate-y-0.5': placement === 'top-left',
          'bottom-0 right-0 -translate-x-0.5 -translate-y-0.5': placement === 'bottom-right',
          'bottom-0 left-0 translate-x-0.5 -translate-y-0.5': placement === 'bottom-left',
        },
        className,
      )}
      data-testid="badge"
      {...attributes}
    >
      {displayValue}
    </span>
  );
}
