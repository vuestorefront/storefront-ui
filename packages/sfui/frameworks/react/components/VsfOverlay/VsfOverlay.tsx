import classNames from 'classnames';
import type { VsfOverlayProps } from './types';

export default function VsfOverlay({ onClick, visible, absolute, className, ...attributes }: VsfOverlayProps) {
  const overlayClasses = classNames('vsf-overlay', absolute ? 'absolute' : 'fixed', className);
  return <>{visible && <div onClick={onClick} className={overlayClasses} {...attributes} />}</>;
}
