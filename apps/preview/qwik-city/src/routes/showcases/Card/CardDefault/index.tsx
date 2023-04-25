import { component$ } from '@builder.io/qwik';
import { SfButton } from '@storefront-ui/qwik';

const cardDetails = [
  {
    image: '/images/card-3.png',
    title: 'Sip Sustainably: The Rise of Boxed Water',
    description:
      'Boxed water is a sustainable alternative to traditional plastic bottles, made from renewable resources.',
    button: 'Read more',
  },
  {
    image: '/images/card-2.png',
    title: 'Ride the Future: Exploring the Benefits of e-Bikes',
    description:
      'Eco-friendly, efficient, and fun modes of transportation that provide a range of benefits for riders and the environment.',
    button: 'Read more',
  },
  {
    image: '/images/card-1.png',
    title: 'Unleash the Ultimate Listening Experience',
    description:
      'Audiophile headphones offer unmatched sound quality and clarity, making them the go-to choice for music enthusiasts.',
    button: 'Read more',
  },
];

export default component$(() => {
  return (
    <div class="flex flex-wrap gap-4 lg:gap-6 lg:flex-nowrap">
      {cardDetails.map(({ image, title, description, button }) => (
        <div
          key={title}
          class="flex flex-col min-w-[325px] max-w-[375px] lg:w-[496px] relative border border-neutral-200 rounded-md hover:shadow-xl"
        >
          <a
            class="absolute inset-0 z-1 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-md"
            href="/"
            aria-label={title}
          />
          <img src={image} alt={title} class="object-cover h-auto rounded-t-md aspect-video" />
          <div class="flex flex-col items-start p-4 grow">
            <p class="font-medium typography-text-base">{title}</p>
            <p class="mt-1 mb-4 font-normal typography-text-sm text-neutral-700">{description}</p>
            <SfButton size="sm" variant="tertiary" class="relative mt-auto">
              {button}
            </SfButton>
          </div>
        </div>
      ))}
    </div>
  );
});
