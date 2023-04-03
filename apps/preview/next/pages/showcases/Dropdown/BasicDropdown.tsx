import { ShowcasePageLayout } from '../../showcases';

// #region source
import { SfButton, SfDropdown, useDisclosure } from '@storefront-ui/react';

export default function BasicDropdown() {
  const { isOpen, toggle, close } = useDisclosure();
  return (
    <SfDropdown trigger={<SfButton onClick={toggle}>Toggle</SfButton>} open={isOpen} onClose={close}>
      <ul className="p-2 rounded bg-gray-100">
        <li>More</li>
        <li>About</li>
        <li>Settings</li>
      </ul>
    </SfDropdown>
  );
}

// #endregion source
BasicDropdown.getLayout = ShowcasePageLayout;
