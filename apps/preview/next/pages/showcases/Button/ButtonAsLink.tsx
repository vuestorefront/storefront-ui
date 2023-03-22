import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfButton } from '@storefront-ui/react';
import Link from 'next/link';

export default function ButtonAsLink() {
  return (
    <div className="flex flex-col items-center space-y-4 xs:block xs:space-x-4">
      <SfButton as="a" href="/">
        Link
      </SfButton>
      <Link href="/" passHref legacyBehavior>
        <SfButton as="a">NextLink</SfButton>
      </Link>
    </div>
  );
}

// #endregion source
ButtonAsLink.getLayout = ShowcasePageLayout;
