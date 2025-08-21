/* eslint-disable jsx-a11y/alt-text */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfButton } from '@storefront-ui/react';

export default function Hero() {
  return (
    <div className="relative h-dvh w-dvh">
      <picture className="before:absolute before:inset-0 before:bg-primary-900 before:-z-10">
        <source srcSet="http://localhost:3100/@assets/hero-bg-2.png" media="(min-width: 768px)" />
        <img
          src="http://localhost:3100/@assets/hero-bg-mobile-2.png"
          className="absolute w-full h-full z-[-1] object-cover opacity-50"
          alt="hero"
        />
      </picture>
      <div className="h-full w-full max-w-[1536px] mx-auto p-4 md:px-10 flex flex-col justify-end md:justify-center text-white">
        <p className="typography-text-xs md:typography-text-sm font-bold tracking-widest uppercase">New collection</p>
        <h1 className="typography-display-2 md:typography-display-1 md:leading-[67.5px] font-bold mt-2 mb-4">
          Made to move. Built to win.
        </h1>
        <p className="typography-text-base md:typography-text-lg">The new sport collection is now in store.</p>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <SfButton size="lg" className="bg-white" variant="secondary">
            Order now
          </SfButton>
          <SfButton size="lg">Show more</SfButton>
        </div>
      </div>
    </div>
  );
}
// #endregion source
Hero.getLayout = ShowcasePageLayout;
