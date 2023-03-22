import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfButton } from '@storefront-ui/react';
import Link from 'next/link';

export default function ButtonAsLink() {
  return (
    <div className="flex flex-col items-center space-y-4 xs:block xs:space-x-4">
      <VsfButton as="a" href="/">
        Link
      </VsfButton>
      <Link href="/" passHref legacyBehavior>
        <VsfButton as="a">NextLink</VsfButton>
      </Link>
    </div>
  );
}

// #endregion source
ButtonAsLink.getLayout = ShowcasePageLayout;
