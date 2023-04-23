import { $, Slot, component$, useSignal } from '@builder.io/qwik';
import { SfDrawerPlacement, SfDrawerProps } from './types';

const defaultDrawerTag = 'aside';

const placementClasses = (placementValue: SfDrawerProps['placement']) => `
  ${placementValue !== SfDrawerPlacement.right ? 'left-0' : ''}
  ${placementValue !== SfDrawerPlacement.left ? 'right-0' : ''}
  ${placementValue !== SfDrawerPlacement.bottom ? 'top-0' : ''}
  ${placementValue !== SfDrawerPlacement.top ? 'bottom-0' : ''}
`;

export const SfDrawer = component$<SfDrawerProps>(
  ({
    as,
    ref,
    open,
    placement = SfDrawerPlacement.left,
    disableClickAway,
    disableEsc,
    onClose$,
    class: _class,
    ...attributes
  }) => {
    const Tag = as || defaultDrawerTag;
    const drawerRef = useSignal<Element>();

    // TODO
    // useClickAway(drawerRef, () => {
    //   if (disableClickAway) return;
    //   onClose?.();
    // });

    const onKeyDown = $((event: KeyboardEvent) => {
      if (disableEsc) return;
      if (event.key === 'Escape') {
        onClose$?.();
      }
    });

    return open ? (
      <Tag
        ref={ref ? ref : drawerRef}
        className={`fixed ${placementClasses(placement)} ${_class}`}
        tabIndex="-1"
        data-testid="drawer"
        {...attributes}
        onKeyDown$={onKeyDown}
      >
        <Slot />
      </Tag>
    ) : null;
  },
);
