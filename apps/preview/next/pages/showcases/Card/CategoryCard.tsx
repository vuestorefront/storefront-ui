/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfLink } from '@storefront-ui/react';
import men from '@assets/men_category.png';
import women from '@assets/women_category.png';
import kid from '@assets/kid_category.png';

const categories = [
  {
    title: `Women`,
    image: women.src,
  },
  {
    title: `Men`,
    image: men.src,
  },
  {
    title: `Kid`,
    image: kid.src,
  },
];
export default function CategoryCard() {
  return (
    <div className="flex flex-wrap gap-4 lg:gap-6 lg:flex-no-wrap">
      {categories.map(({ title, image }) => (
        <div
          className="relative first-letter:flex flex-col w-max-[280px] justify-center overflow-hidden group"
          key={title}
        >
          <SfLink className="absolute w-full h-full z-1" href="/" aria-label={title} />
          <img
            className="rounded-full bg-neutral-100 group-hover:shadow-xl group-active:shadow-none focus:outline focus:outline-offset focus:rounded-md"
            src={image}
            alt={title}
            width={280}
            height={280}
          />
          <div className="flex justify-center">
            <SfLink
              variant="secondary"
              className="mt-4 font-semibold no-underline !text-normal-900 typography-text-base group-hover:underline group-hover:text-primary-800 group-hover:font-normal group-active:text-primary-800 group-active:font-normal"
            >
              {title}
            </SfLink>
          </div>
        </div>
      ))}
    </div>
  );
}

// #endregion source
CategoryCard.getLayout = ShowcasePageLayout;
