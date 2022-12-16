import classNames from 'classnames';
import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useClickAway } from 'react-use';
import type { VsfSideSheetProps } from './types';
import VsfOverlay from '../VsfOverlay/VsfOverlay';

export default function VsfSideSheet({
  className,
  permanent,
  leftSide,
  overlayVisible,
  open,
  onOpenChange = () => undefined,
  children,
  ...attributes
}: VsfSideSheetProps): JSX.Element {
  const nodeRef = useRef(null);
  useClickAway(nodeRef, () => {
    if (!overlayVisible) return;
    onOpenChange(!open);
  });

  return (
    <div className={classNames('vsf-side-sheet', className)} {...attributes} data-testid="side-sheet">
      {overlayVisible && !permanent && open && (
        <VsfOverlay visible={overlayVisible} className="vsf-side-sheet__overlay" data-testid="side-sheet-overlay" />
      )}
      <CSSTransition
        nodeRef={nodeRef}
        in={open || permanent}
        appear
        timeout={500}
        unmountOnExit
        classNames={`vsf-side-sheet__slide-${leftSide ? 'left' : 'right'}-react`}
      >
        <aside
          ref={nodeRef}
          className={classNames('vsf-side-sheet__aside', {
            'vsf-side-sheet__aside--fixed': !permanent,
            'vsf-side-sheet__aside--right-side': !leftSide,
            'vsf-side-sheet__aside--left-side': leftSide,
          })}
          data-testid="side-sheet-aside"
        >
          {children}
        </aside>
      </CSSTransition>
    </div>
  );
}
