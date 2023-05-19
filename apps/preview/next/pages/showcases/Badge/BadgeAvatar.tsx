import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfBadge, SfIconCircle } from '@storefront-ui/react';

export default function BadgeAvatar() {
  return (
    <ul>
      <li className="flex items-center mb-2">
        <div className="relative">
          <SfIconCircle className="text-neutral-300" size="lg" />
          <SfBadge variant="dot" placement="bottom-right" className="!bg-primary-600 outline outline-white" />
        </div>
        <p className="ml-2 font-bold">John Doe</p>
      </li>
      <li className="flex items-center">
        <div className="relative">
          <SfIconCircle className="text-neutral-300" size="lg" />
          <SfBadge variant="dot" placement="bottom-right" className="!bg-neutral-600 outline outline-white" />
        </div>
        <p className="ml-2">Jane Doe</p>
      </li>
    </ul>
  );
}

// #endregion source
BadgeAvatar.getLayout = ShowcasePageLayout;
