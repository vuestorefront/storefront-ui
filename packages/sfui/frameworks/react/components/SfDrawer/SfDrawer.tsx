import classNames from 'classnames';
import { useRef } from 'react';
import { useClickAway } from 'react-use';
import mergeRefs from 'merge-refs';
import { SfDrawerPlacement, polymorphicForwardRef } from '@storefront-ui/react';
import type { SfDrawerProps } from '@storefront-ui/react';

const defaultDrawerTag = 'aside';

const placementClasses = (placementValue: SfDrawerProps['placement']) => ({
  'left-0': placementValue !== SfDrawerPlacement.right,
  'right-0': placementValue !== SfDrawerPlacement.left,
  'top-0': placementValue !== SfDrawerPlacement.bottom,
  'bottom-0': placementValue !== SfDrawerPlacement.top,
});

const SfDrawer = polymorphicForwardRef<typeof defaultDrawerTag, SfDrawerProps>(
  (
    {
      as,
      open,
      placement = SfDrawerPlacement.left,
      disableClickAway,
      disableEsc,
      onClose,
      className,
      children,
      ...attributes
    },
    ref,
  ) => {
    const Tag = as || defaultDrawerTag;
    const drawerRef = useRef(null);
    useClickAway(drawerRef, () => {
      if (disableClickAway) return;
      onClose?.();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (disableEsc) return;
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    return open ? (
      <Tag
        ref={mergeRefs(drawerRef, ref)}
        className={classNames('fixed', placementClasses(placement), className)}
        tabIndex="-1"
        data-testid="drawer"
        {...attributes}
        onKeyDown={onKeyDown}
      >
        {children}
      </Tag>
    ) : null;
  },
);

export default SfDrawer;
