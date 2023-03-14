/* eslint-disable jsx-a11y/anchor-is-valid */
import { VsfLink } from '@storefront-ui/react';
import Link from 'next/link';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <div className="space-x-4">
      <Link href="#" passHref legacyBehavior>
        <VsfLink> NextLink </VsfLink>
      </Link>
    </div>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
