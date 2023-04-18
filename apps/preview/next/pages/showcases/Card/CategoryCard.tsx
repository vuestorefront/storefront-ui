/* eslint-disable jsx-a11y/anchor-has-content */
import { ShowcasePageLayout } from '../../showcases';
// #region source
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
        <div className="relative min-w-[180px] flex-col max-w-[240px] group" key={title}>
          <a
            className="absolute w-full h-full z-1 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-md"
            href="/"
            aria-label={title}
          />
          <img
            className="rounded-full bg-neutral-100 group-hover:shadow-xl group-active:shadow-none"
            src={image}
            alt={title}
            width={240}
            height={240}
          />
          <div className="flex justify-center">
            <a className="mt-4 font-semibold no-underline text-normal-900 typography-text-base group-hover:underline group-hover:text-primary-800 group-hover:font-normal group-active:text-primary-800 group-active:font-normal">
              {title}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

// #endregion source
CategoryCard.getLayout = ShowcasePageLayout;
