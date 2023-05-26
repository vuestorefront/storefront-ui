/* eslint-disable jsx-a11y/alt-text */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfButton } from '@storefront-ui/react';

export default function Hero() {
  return (
    <div className="relative min-h-[600px]">
      <picture>
        <source srcSet="http://localhost:3100/@assets/hero-bg.png" media="(min-width: 768px)" />
        <img
          src="http://localhost:3100/@assets/hero-bg-mobile.png"
          className="absolute w-full h-full z-[-1] md:object-cover"
        />
      </picture>
      <div className="md:flex md:flex-row-reverse md:justify-center min-h-[600px] max-w-[1536px] mx-auto">
        <div className="flex flex-col md:basis-2/4 md:items-stretch md:overflow-hidden">
          <img
            src="http://localhost:3100/@assets/hero-headphones.png"
            alt="Headphones"
            className="h-full object-cover object-left"
          />
        </div>
        <div className="p-4 md:p-10 md:flex md:flex-col md:justify-center md:items-start md:basis-2/4">
          <p className="typography-text-xs md:typography-text-sm font-bold tracking-widest text-neutral-500 uppercase">
            Feel the music
          </p>
          <h1 className="typography-headline-2 md:typography-headline-1 md:leading-[67.5px] font-bold mt-2 mb-4">
            New Wireless Pro
          </h1>
          <p className="typography-text-base md:typography-text-lg">
            Spatial audio. Adjustable ear cups. On-device controls. All-day battery.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <SfButton size="lg"> Order now </SfButton>
            <SfButton size="lg" className="bg-white" variant="secondary">
              Show more
            </SfButton>
          </div>
        </div>
      </div>
    </div>
  );
}
// #endregion source
Hero.getLayout = ShowcasePageLayout;
