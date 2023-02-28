import classNames from 'classnames';
import type { VsfBadgeProps } from './types';

export default function VsfBadge({
  children,
  className,
  dot,
  invisible,
  value,
  bordered,
  ...attributes
}: VsfBadgeProps) {
  return (
    <div
      className={classNames('vsf-badge', {
        'vsf-badge--dot': dot,
        'vsf-badge--bordered': bordered,
      })}
      {...attributes}
      data-testid="badge"
    >
      {children}
      {!invisible && !!value && (
        <div className="vsf-badge__wrapper">
          <div className={classNames('vsf-badge__badge', dot ? 'vsf-badge__dot' : 'vsf-badge__base', className)}>
            {dot || value}
          </div>
        </div>
      )}
    </div>
  );
}
