import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfIconThumbUp } from '@storefront-ui/react';

export default function IconColors() {
  return (
    <>
      <VsfIconThumbUp className="text-red-600" />
      <VsfIconThumbUp className="text-purple-500" />
      <VsfIconThumbUp className="text-cyan-700" />
      <span className="text-gray-500">
        <VsfIconThumbUp />
      </span>
    </>
  );
}

// #endregion source
IconColors.getLayout = ShowcasePageLayout;
