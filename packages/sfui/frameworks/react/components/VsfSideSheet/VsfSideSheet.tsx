import classNames from 'classnames';
import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useClickAway } from 'react-use';
import { VsfIconClose } from '../VsfIcons';
import type { VsfSideSheetProps } from './types';
import VsfOverlay from '../VsfOverlay/VsfOverlay';
import VsfButton from '../VsfButton/VsfButton';

export default function VsfSideSheet({
  className,
  permanent,
  withButton,
  leftSide,
  overlayVisible,
  open,
  onOpenChange,
  children,
  ...attributes
}: VsfSideSheetProps): JSX.Element {
  const nodeRef = useRef(null);
  useClickAway(nodeRef, () => {
    if (!overlayVisible) return;
    onOpenChange();
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
          {withButton && !permanent && (
            // TODO: replace with VsfButton pure version after refactor
            <VsfButton
              className="vsf-side-sheet__aside__close-button"
              variant="tertiary"
              onClick={onOpenChange}
              type="button"
              data-testid="side-sheet-close-button"
            >
              <VsfIconClose />
            </VsfButton>
          )}
          {children}
        </aside>
      </CSSTransition>
    </div>
  );
}
