import { VsfButton } from '@storefront-ui/react/components/VsfButton';
import Link from 'next/link';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <div className="space-x-4">
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
