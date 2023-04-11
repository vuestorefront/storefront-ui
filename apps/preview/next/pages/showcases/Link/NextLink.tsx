/* eslint-disable jsx-a11y/anchor-is-valid */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfLink } from '@storefront-ui/react';
import Link from 'next/link';

export default function NextLinkDemo() {
  return (
    <div className="space-x-4">
      <Link href="#" passHref legacyBehavior>
        <SfLink>NextLink</SfLink>
      </Link>
    </div>
  );
}

// #endregion source
NextLinkDemo.getLayout = ShowcasePageLayout;
