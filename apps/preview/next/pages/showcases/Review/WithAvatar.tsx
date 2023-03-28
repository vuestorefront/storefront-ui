import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfRating, SfIconCheck } from '@storefront-ui/react';

export default function Review() {
  return (
    <article className="w-full p-4 border rounded-md">
      <header className="flex flex-col items-start pb-4 md:flex-row md:justify-between">
        <div className="flex items-start">
          <img src="/review_avatar.png" alt="Review avatar" className="p-0.5" />
          <div className="flex-col pl-2">
            <span className="text-sm text-neutral-900">Karla</span>
            <span className="flex items-center pr-2 text-xs text-neutral-500">
              <SfRating value={5} max={5} size="xs" className="mr-2" />2 days ago
            </span>
          </div>
        </div>
        <p className="flex items-center text-xs truncate text-primary-700">
          <SfIconCheck size="xs" className="mr-1" /> Verified purchase
        </p>
      </header>
      <div className="text-sm text-neutral-900">I love them</div>
    </article>
  );
}

// #endregion source
Review.getLayout = ShowcasePageLayout;
