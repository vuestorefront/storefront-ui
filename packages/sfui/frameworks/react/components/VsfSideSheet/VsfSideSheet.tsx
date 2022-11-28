import classNames from 'classnames';
import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import useClickOutside from '../../hooks/useClickOutside';
import { VsfIconClose } from '../VsfIcons';
import type { VsfSideSheetProps } from './types';
import VsfOverlay from '../VsfOverlay/VsfOverlay';

export default function VsfSideSheet({
  className,
  permanent,
  withButton,
  leftSide,
  overlayVisible,
  isOpen,
  onClick,
  children,
  ...attributes
}: VsfSideSheetProps): JSX.Element {
  const nodeRef = useRef(null);
  const conditions = overlayVisible && isOpen;
  useClickOutside(nodeRef, onClick, conditions);

  return (
    <div className={classNames('vsf-side-sheet')} {...attributes} data-testid="side-sheet">
      {overlayVisible && !permanent && isOpen && (
        <VsfOverlay visible={overlayVisible} className="vsf-side-sheet__overlay" data-testid="side-sheet-overlay" />
      )}
      <CSSTransition
        nodeRef={nodeRef}
        in={isOpen || permanent}
        appear
        timeout={500}
        unmountOnExit
        classNames={`vsf-slide-${leftSide ? 'left' : 'right'}-react`}
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
            <button
              className="vsf-side-sheet__aside__close-button"
              onClick={onClick}
              type="button"
              data-testid="side-sheet-close-button"
            >
              <slot name="button-content">
                <VsfIconClose />
              </slot>
            </button>
          )}
          {children}
        </aside>
      </CSSTransition>
    </div>
  );
}
