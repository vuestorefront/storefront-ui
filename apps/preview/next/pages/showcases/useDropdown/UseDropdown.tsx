/* eslint-disable jsx-a11y/label-has-associated-control */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import * as React from 'react';
import { useDropdown, SfButton } from '@storefront-ui/react';

export default function Dropdown() {
  const [isOpen, setOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  const close = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };
  const toggle = () => setOpen((isOpen) => !isOpen);

  const { refs, style } = useDropdown({ isOpen, onClose: close });

  return (
    <div ref={refs.setReference} className="w-max">
      <SfButton ref={triggerRef} onClick={toggle}>
        Toggle
      </SfButton>
      {isOpen && (
        <ul ref={refs.setFloating} style={style} className="absolute p-2 w-max rounded-sm bg-gray-100">
          <li tabIndex={0}>More</li>
          <li tabIndex={0}>About</li>
          <li tabIndex={0}>Settings</li>
        </ul>
      )}
    </div>
  );
}

// #endregion source
Dropdown.getLayout = ShowcasePageLayout;
