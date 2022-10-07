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
  const classes = classNames('vsf-badge', {
    'vsf-badge--dot': dot,
    'vsf-badge--bordered': bordered,
  });

  const badgeComponent = dot ? (
    <div className={classNames('vsf-badge__badge', 'vsf-badge__dot', className)} />
  ) : (
    <div className={classNames('vsf-badge__badge', 'vsf-badge__base', className)}>{value}</div>
  );

  return (
    <div className={classes} {...attributes}>
      {children}
      {!invisible && value && <div className="vsf-badge__wrapper">{badgeComponent}</div>}
    </div>
  );
}
