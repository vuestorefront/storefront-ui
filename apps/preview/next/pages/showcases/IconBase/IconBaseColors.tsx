import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfIconThumbUp } from '@storefront-ui/react';

export default function IconColors() {
  return (
    <>
      <SfIconThumbUp className="text-red-600" />
      <SfIconThumbUp className="text-purple-500" />
      <SfIconThumbUp className="text-cyan-700" />
      <span className="text-gray-500">
        <SfIconThumbUp />
      </span>
    </>
  );
}

// #endregion source
IconColors.getLayout = ShowcasePageLayout;
