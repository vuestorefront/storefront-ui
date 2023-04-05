import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfButton } from '@storefront-ui/react';
import headphones from '@assets/hero-headphones.png';
import mobileBackground from '@assets/hero-bg-mobile.png';
import desktopBackground from '@assets/hero-bg.png';

const variables = {
  '--sf-img-mobile': `url(${mobileBackground.src})`,
  '--sf-img-desktop': `url(${desktopBackground.src})`,
} as React.CSSProperties;

export default function Hero() {
  return (
    <div
      style={variables}
      className="md:flex md:flex-row-reverse min-h-[600px] max-w-[1536px] mx-auto bg-[url:var(--sf-img-mobile)] md:bg-[url:var(--sf-img-desktop)] bg-center bg-cover bg-no-repeat"
    >
      <div className="flex flex-col md:basis-2/4 md:items-stretch md:overflow-hidden">
        <img src={headphones.src} alt="Headphones alt" className="h-full object-cover object-left" />
      </div>
      <div className="p-4 md:p-10 md:flex md:flex-col md:justify-center md:items-start md:basis-2/4">
        <p className="typography-text-xs md:typography-text-sm font-bold tracking-widest text-neutral-500">
          Feel the music
        </p>
        <h2 className="typography-headline-2 md:typography-headline-1 md:leading-[67.5px] font-bold mt-2 mb-4">
          New Wireless Pro
        </h2>
        <p className="typography-text-base md:typography-text-lg">
          Spatial audio. Adjustable ear cups. On-device controls. All-day battery.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <SfButton> Order now </SfButton>
          <SfButton variant="secondary"> Show more </SfButton>
        </div>
      </div>
    </div>
  );
}
// #endregion source
Hero.getLayout = ShowcasePageLayout;
