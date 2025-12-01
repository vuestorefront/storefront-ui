import { ShowcasePageLayout } from '../../showcases';

// #region source
import { useRef } from 'react';
import { SfButton, SfDropdown, useDisclosure } from '@storefront-ui/react';

export default function BasicDropdown() {
  const { isOpen, toggle, close } = useDisclosure();
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleClose = () => {
    close();
    triggerRef.current?.focus();
  };
  return (
    <SfDropdown
      trigger={<SfButton ref={triggerRef}
      onClick={toggle}>Toggle</SfButton>}
      open={isOpen} onClose={handleClose}
    >
      <ul className="p-2 rounded-sm bg-gray-100">
        <li tabIndex={0}>More</li>
        <li tabIndex={0}>About</li>
        <li tabIndex={0}>Settings</li>
      </ul>
    </SfDropdown>
  );
}

// #endregion source
BasicDropdown.getLayout = ShowcasePageLayout;
