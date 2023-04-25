import { component$ } from '@builder.io/qwik';

const categories = [
  {
    title: `Women`,
    image: '/images/women_category.png',
  },
  {
    title: `Men`,
    image: '/images/men_category.png',
  },
  {
    title: `Kid`,
    image: '/images/kid_category.png',
  },
];
export default component$(() => {
  return (
    <div class="flex flex-wrap gap-4 lg:gap-6 lg:flex-no-wrap">
      {categories.map(({ title, image }) => (
        <div class="relative min-w-[180px] flex-col max-w-[240px] group" key={title}>
          <a
            class="absolute w-full h-full z-1 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-md"
            href="/"
            aria-label={title}
          />
          <img
            class="rounded-full bg-neutral-100 group-hover:shadow-xl group-active:shadow-none"
            src={image}
            alt={title}
            width={240}
            height={240}
          />
          <div class="flex justify-center">
            <a class="mt-4 font-semibold no-underline text-normal-900 typography-text-base group-hover:underline group-hover:text-primary-800 group-hover:font-normal group-active:text-primary-800 group-active:font-normal">
              {title}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
});
