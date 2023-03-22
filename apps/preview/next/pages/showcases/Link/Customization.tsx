import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfLink } from '@storefront-ui/react';

export default function CustomLink() {
  return (
    <div className="space-x-4">
      <SfLink href="#" className="text-sm">
        Small
      </SfLink>
      <SfLink href="#" variant="secondary" className="text-negative-700">
        To delete page
      </SfLink>
    </div>
  );
}

// #endregion source
CustomLink.getLayout = ShowcasePageLayout;
