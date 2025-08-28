import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfBadge } from '@storefront-ui/react';

export default function BadgeAvatar() {
  return (
    <div className="flex gap-3">
      <div className="relative">
        <img src="http://localhost:3100/@assets/woman_avatar.png" alt="Avatar of a woman" width="36" height="36" />
        <SfBadge variant="dot" placement="bottom-left" className="outline outline-white" />
      </div>
      <div className="relative">
        <img src="http://localhost:3100/@assets/woman_avatar.png" alt="Avatar of a woman" width="36" height="36" />
        <SfBadge variant="dot" placement="bottom-left" className="!bg-secondary-700 outline outline-white" />
      </div>
    </div>
  );
}

// #endregion source
BadgeAvatar.getLayout = ShowcasePageLayout;
