import classNames from 'classnames';
import type { VsfOverlayProps } from './types';

export default function VsfOverlay({
  onClick,
  visible,
  absolute,
  className,
  children,
  ...attributes
}: VsfOverlayProps) {
  const overlayClasses = classNames('vsf-overlay', absolute && 'vsf-overlay--absolute', className);

  return visible ? (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div onClick={onClick} className={overlayClasses} {...attributes}>
      {children}
    </div>
  ) : null;
}
