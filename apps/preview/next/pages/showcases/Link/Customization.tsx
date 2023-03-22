import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfLink } from '@storefront-ui/react';

export default function CustomLink() {
  return (
    <div className="space-x-4">
      <VsfLink href="#" className="text-sm">
        Small
      </VsfLink>
      <VsfLink href="#" variant="secondary" className="text-negative-700">
        To delete page
      </VsfLink>
    </div>
  );
}

// #endregion source
CustomLink.getLayout = ShowcasePageLayout;
