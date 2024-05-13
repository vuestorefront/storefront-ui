'use client';
import classNames from 'classnames';
import { useRef } from 'react';
import { useClickAway } from 'react-use';
import { type SfModalProps, polymorphicForwardRef, useTrapFocus, mergeRefs } from '@storefront-ui/react';

const defaultModalTag = 'div';

const SfModal = polymorphicForwardRef<typeof defaultModalTag, SfModalProps>(
  ({ as, open, disableClickAway, disableEsc, onClose, className, children, ...attributes }, ref) => {
    const Tag = as || defaultModalTag;
    const modalRef = useRef(null);
    useClickAway(modalRef, () => {
      if (disableClickAway) return;
      onClose?.();
    });

    // eslint-disable-next-line consistent-return
    const onKeyDown = (event: KeyboardEvent) => {
      if (!disableEsc && event.key === 'Escape') {
        onClose?.();
      }
      if ('onKeyDown' in attributes && typeof attributes.onKeyDown === 'function') return attributes.onKeyDown?.(event);
    };

    useTrapFocus(modalRef, {
      trapTabs: true,
      activeState: open,
      initialFocus: false,
      initialFocusContainerFallback: true,
    });

    return open ? (
      <Tag
        ref={mergeRefs([modalRef, ref])}
        className={classNames(
          'fixed inset-0 w-fit h-fit m-auto p-6 pt-10 lg:p-10 border border-neutral-100 bg-white shadow-xl rounded-xl outline-none',
          className,
        )}
        tabIndex="-1"
        aria-modal="true"
        data-testid="modal"
        {...attributes}
        onKeyDown={onKeyDown}
      >
        {children}
      </Tag>
    ) : null;
  },
);

export default SfModal;
