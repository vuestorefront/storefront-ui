import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfIconStarFilled } from '@storefront-ui/react';

export default function SingleStarRating() {
  const value = 4.5;
  return (
    <div className="flex flex-col gap-2">
      <div className="inline-flex items-center gap-0.5 font-medium typography-text-xs">
        <SfIconStarFilled className="text-warning-500 w-[1.5em] h-[1.5em]" />
        {value}
      </div>
      <div className="inline-flex items-center gap-0.5 font-medium typography-text-sm">
        <SfIconStarFilled className="text-warning-500 w-[1.5em] h-[1.5em]" />
        {value}
      </div>
      <div className="inline-flex items-center gap-1 font-medium">
        <SfIconStarFilled className="text-warning-500 w-[1.5em] h-[1.5em]" />
        {value}
      </div>
      <div className="inline-flex items-center gap-1 font-medium typography-text-lg">
        <SfIconStarFilled className="text-warning-500 w-[1.5em] h-[1.5em]" />
        {value}
      </div>
    </div>
  );
}

// #endregion source
SingleStarRating.getLayout = ShowcasePageLayout;
