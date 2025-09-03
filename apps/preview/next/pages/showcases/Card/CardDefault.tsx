/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfButton } from '@storefront-ui/react';

const cardDetails = [
  {
    image: 'http://localhost:3100/@assets/card-3.png',
    title: "Trail Running: Nature's Ultimate Challenge",
    description:
      "Explore the exhilarating world of trail running. Embrace nature's rugged terrains, elevate your fitness, and learn to conquer every path.",
    button: 'Read more',
  },
  {
    image: 'http://localhost:3100/@assets/card-2.png',
    title: 'Ride the Future: Exploring the Benefits of e-Bikes',
    description:
      'Eco-friendly, efficient, and fun modes of transportation that provide a range of benefits for riders and the environment.',
    button: 'Read more',
  },
  {
    image: 'http://localhost:3100/@assets/card-1.png',
    title: 'Unleash the Ultimate Listening Experience',
    description:
      'Audiophile headphones offer unmatched sound quality and clarity, making them the go-to choice for music enthusiasts.',
    button: 'Read more',
  },
];

export default function CardDefault() {
  return (
    <div className="flex flex-wrap gap-4 lg:gap-6 lg:flex-nowrap">
      {cardDetails.map(({ image, title, description, button }) => (
        <div
          key={title}
          className="flex flex-col min-w-[325px] max-w-[375px] lg:w-[496px] relative border border-neutral-200 rounded-3xl hover:shadow-xl active:shadow-none transition-shadow group"
        >
          <a
            className="absolute inset-0 z-1 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-3xl"
            href="#"
            aria-label={title}
          />
          <img src={image} alt={title} className="object-cover h-auto rounded-t-3xl aspect-video" />
          <div className="flex flex-col items-end p-4 grow">
            <p className="font-medium typography-text-base">{title}</p>
            <p className="mt-1 mb-4 font-normal typography-text-sm text-neutral-700">{description}</p>
            <SfButton
              size="sm"
              variant="tertiary"
              className="mt-auto group-has-[:focus-visible]:outline group-has-[:focus-visible]:outline-offset pointer-events-none"
              tabIndex={-1}
            >
              {button}
            </SfButton>
          </div>
        </div>
      ))}
    </div>
  );
}
// #endregion source
CardDefault.getLayout = ShowcasePageLayout;
