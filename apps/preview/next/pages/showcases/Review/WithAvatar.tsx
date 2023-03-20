import { VsfRating, VsfIconCheck } from '@storefront-ui/react';
import reviewAvatar from '@assets/review_avatar.png';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <article className="w-full p-4 border rounded-md">
      <header className="flex flex-col items-start pb-6 space-y-2 md:flex-row md:justify-between md:space-y-0">
        <div className="flex items-start">
          <img src={reviewAvatar.src} alt="Review avatar" className="p-0.5" />
          <div className="flex-col pl-2">
            <span className="text-sm text-neutral-900">Karla</span>
            <span className="flex items-center pr-2 text-xs text-neutral-500">
              <VsfRating value={5} max={5} size="xs" className="mr-2" />2 days ago
            </span>
          </div>
        </div>
        <p className="flex items-center text-xs truncate text-primary-700">
          <VsfIconCheck size="xs" className="mr-1" /> Verified purchase
        </p>
      </header>
      <div className="text-sm text-neutral-900">I love them</div>
    </article>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
