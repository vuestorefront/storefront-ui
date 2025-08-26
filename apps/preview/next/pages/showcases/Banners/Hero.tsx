/* eslint-disable jsx-a11y/alt-text */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import classNames from 'classnames';
import { SfButton } from '@storefront-ui/react';

const heroDetails = {
  headline: 'New collection',
  title: 'Made to move. Built to win.',
  description: 'The new sport collection is now in store.',
  callToAction: 'Order now',
  callToActionSecondary: 'Show more',
  backgroundImage: 'http://localhost:3100/@assets/hero-bg-2.png',
  backgroundImageMobile: 'http://localhost:3100/@assets/hero-bg-mobile-2.png',
  image: undefined,
  imageAlt: undefined,
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
        <img src={backgroundImageMobile} className="absolute w-full h-full z-[-1] object-cover" alt="hero" />
      </picture>
      <div
        className={classNames(
          'h-full w-full max-w-[1536px] mx-auto flex flex-col justify-end md:justify-center',
          variant === 'light' ? 'text-white' : 'text-neutral-900',
        )}
      >
        <div className="p-4 md:p-10 flex flex-col">
          <p className="typography-text-xs md:typography-text-sm font-bold tracking-widest uppercase">{headline}</p>
          <h1 className="mt-2 mb-4 typography-display-2 md:typography-display-1 md:leading-[67.5px] font-bold">
            {title}
          </h1>
          <p className="typography-text-base md:typography-text-lg">{description}</p>
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <SfButton size="lg" className="bg-white" variant="secondary">
              {callToAction}
            </SfButton>
            <SfButton size="lg">{callToActionSecondary}</SfButton>
          </div>
        </div>
      </div>
    </div>
  );
}
// #endregion source
Hero.getLayout = ShowcasePageLayout;
