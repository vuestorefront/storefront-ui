import { VsfButton } from '@storefront-ui/react';
import Link from 'next/link';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
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

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
