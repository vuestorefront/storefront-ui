import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfLink } from '@storefront-ui/react';
import Image from 'next/image';
import card from '@assets/smartwatch.png';

export default function CategoryCard() {
  return (
    <div
      tabIndex={0}
      className="relative first-letter:flex flex-col w-[280px] outline-none justify-center overflow-hidden group focus-visible:outline focus-visible:outline-offset focus-visible:rounded-md"
    >
      <SfLink className="absolute z-10 w-full h-full" href="#" />
      <Image
        className="rounded-full bg-neutral-100 group-hover:shadow-xl group-active:shadow-none"
        src={card.src}
        alt="smartwatch"
        width={280}
        height={280}
      />
      <div className="flex justify-center">
        <span className="mt-4 typography-text-base group-hover:underline group-hover:text-primary-800 group-active:text-primary-800">
          Category
        </span>
      </div>
    </div>
  );
}

// #endregion source
CategoryCard.getLayout = ShowcasePageLayout;
