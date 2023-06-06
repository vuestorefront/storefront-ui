import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfBadge } from '@storefront-ui/react';

export default function BadgeAvatar() {
  return (
    <ul>
      <li className="flex items-center mb-2">
        <div className="relative">
          <img src="http://localhost:3100/@assets/woman_avatar.png" alt="Avatar of a woman" width={36} height={36} />
          <SfBadge variant="dot" placement="bottom-right" className="!bg-primary-600 outline outline-white" />
        </div>
      </li>
      <li className="flex items-center">
        <div className="relative">
          <img src="http://localhost:3100/@assets/woman_avatar.png" alt="Avatar of a woman" width={36} height={36} />
          <SfBadge variant="dot" placement="bottom-right" className="!bg-neutral-600 outline outline-white" />
        </div>
      </li>
    </ul>
  );
}

// #endregion source
BadgeAvatar.getLayout = ShowcasePageLayout;
