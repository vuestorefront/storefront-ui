import { Slot, component$ } from '@builder.io/qwik';
import { SfModalProps } from './types';

const defaultModalTag = 'div';

export const SfModal = component$<SfModalProps>(
  ({ as, ref, open, disableClickAway, disableEsc, onClose, class: _class, ...attributes }) => {
    const Tag = as || defaultModalTag;

    // TODO
    // const modalRef = useRef(null);
    // useClickAway(modalRef, () => {
    //   if (disableClickAway) return;
    //   onClose?.();
    // });

    const onKeyDown = (event: KeyboardEvent) => {
      if (!disableEsc && event.key === 'Escape') {
        onClose?.();
      }
      if ('onKeyDown' in attributes && typeof attributes.onKeyDown === 'function') return attributes.onKeyDown?.(event);
    };

    // TODO
    // useTrapFocus(modalRef, {
    //   activeState: open,
    //   initialFocus: InitialFocusType.autofocus,
    //   initialFocusContainerFallback: true,
    // });

    return open ? (
      <Tag
        {...(ref ? { ref } : {})}
        className={`fixed inset-0 w-fit h-fit m-auto p-6 pt-10 lg:p-10 border border-neutral-100 bg-white shadow-xl rounded-xl outline-none 
          ${_class}`}
        tabIndex="-1"
        aria-modal="true"
        data-testid="modal"
        {...attributes}
        onKeyDown={onKeyDown}
      >
        <Slot />
      </Tag>
    ) : null;
  },
);

export default SfModal;
