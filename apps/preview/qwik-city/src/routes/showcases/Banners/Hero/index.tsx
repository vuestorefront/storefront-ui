import { component$ } from '@builder.io/qwik';
import { SfButton } from '@storefront-ui/qwik';

const headphones = '/images/hero-headphones.png';
const desktopBackground = '/images/hero-bg.png';
const mobileBackground = '/images/hero-bg-mobile.png';

export default component$(() => {
  return (
    <div class="relative min-h-[600px]">
      <picture>
        <source srcSet={desktopBackground} media="(min-width: 768px)" />
        <img src={mobileBackground} class="absolute w-full h-full z-[-1] md:object-cover" />
      </picture>
      <div class="md:flex md:flex-row-reverse md:justify-center min-h-[600px] max-w-[1536px] mx-auto">
        <div class="flex flex-col md:basis-2/4 md:items-stretch md:overflow-hidden">
          <img src={headphones} alt="Headphones" class="h-full object-cover object-left" />
        </div>
        <div class="p-4 md:p-10 md:flex md:flex-col md:justify-center md:items-start md:basis-2/4">
          <p class="typography-text-xs md:typography-text-sm font-bold tracking-widest text-neutral-500 uppercase">
            Feel the music
          </p>
          <h1 class="typography-headline-2 md:typography-headline-1 md:leading-[67.5px] font-bold mt-2 mb-4">
            New Wireless Pro
          </h1>
          <p class="typography-text-base md:typography-text-lg">
            Spatial audio. Adjustable ear cups. On-device controls. All-day battery.
          </p>
          <div class="flex flex-col md:flex-row gap-4 mt-6">
            <SfButton size="lg"> Order now </SfButton>
            <SfButton size="lg" class="bg-white" variant="secondary">
              Show more
            </SfButton>
          </div>
        </div>
      </div>
    </div>
  );
});
