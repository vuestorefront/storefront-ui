/* eslint-disable jsx-a11y/alt-text */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import classNames from 'classnames';
import { SfButton } from '@storefront-ui/react';

const heroDetails = {
  headline: 'Feel the music',
  title: 'New Wireless Pro',
  description: 'Spatial audio. Adjustable ear cups. On-device controls. All-day battery.',
  callToAction: 'Order now',
  callToActionSecondary: 'Show more',
  backgroundImage: 'http://localhost:3100/@assets/hero-bg.png',
  backgroundImageMobile: 'http://localhost:3100/@assets/hero-bg-mobile.png',
  image: 'http://localhost:3100/@assets/hero-headphones.png',
  imageAlt: 'Headphones',
  variant: 'light',
};

export default function Hero() {
  const {
    title,
    headline,
    description,
    callToAction,
    callToActionSecondary,
    backgroundImage,
    backgroundImageMobile,
    image,
    imageAlt,
    variant,
  } = heroDetails;
  return (
    <div className="relative h-dvh w-dvh shrink-0">
      <picture>
        <source srcSet={backgroundImage} media="(min-width: 768px)" />
        <img src={backgroundImageMobile} className="absolute w-full h-full z-[-1] object-cover" />
      </picture>
      <div
        className={classNames(
          'h-full w-full max-w-[1536px] mx-auto flex flex-col md:flex-row-reverse md:justify-center',
          variant === 'light' ? 'text-white' : 'text-neutral-900',
        )}
      >
        <div className="flex flex-col md:basis-2/4 md:items-stretch">
          <img src={image} alt={imageAlt} className="h-full object-cover object-left overflow-visible" />
        </div>
        <div className="p-4 md:p-10 flex flex-col justify-center basis-2/4 md:items-start">
          <p className="typography-text-xs md:typography-text-sm font-bold tracking-widest uppercase">{headline}</p>
          <h1 className="mt-2 mb-4 typography-display-2 md:typography-display-1 md:leading-[67.5px] font-bold">
            {title}
          </h1>
          <p className="typography-text-base md:typography-text-lg">{description}</p>
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <SfButton size="lg">{callToAction}</SfButton>
            <SfButton size="lg" className="bg-white" variant="secondary">
              {callToActionSecondary}
            </SfButton>
          </div>
        </div>
      </div>
    </div>
  );
}
// #endregion source
Hero.getLayout = ShowcasePageLayout;
