import { ShowcasePageLayout } from '../../showcases';

// #region source
import { SfButton } from '@storefront-ui/react';
import image1 from '@assets/display_1.png';
import image2 from '@assets/display_2.png';

const bannerDetails = [
  {
    title: 'Sunny Days Ahead',
    subtitle: 'Be inspired',
    description: 'Step out in style with our sunglasses collection',
    callToAction: 'Discover now',
    image: image1,
  },
  {
    title: 'Pack it Up',
    subtitle: 'BE ACTIVE',
    description: 'Explore the great outdoors with our backpacks',
    callToAction: 'Discover now',
    image: image2,
  },
];
export default function MultipleVerticalBanner() {
  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <div className="flex flex-col justify-between rounded-md md:items-center md:basis-1/4 bg-warning-200">
        <div className="flex flex-col items-center p-4 text-center md:p-10">
          <p className="mb-2 font-bold tracking-widest uppercase typography-headline-6">{bannerDetails[1].subtitle}</p>
          <p className="mb-4 font-bold typography-headline-2">{bannerDetails[1].title}</p>
          <p className="mb-4 typography-text-lg">{bannerDetails[1].description}</p>
          <SfButton className="font-semibold text-white bg-neutral-900 hover:bg-neutral-600 active:bg-neutral-700">
            {bannerDetails[1].callToAction}
          </SfButton>
        </div>
        <div className="flex items-center w-full">
          <img src={bannerDetails[1].image.src} alt={bannerDetails[1].title} width="100%" height="auto" />
        </div>
      </div>
      <div className="flex flex-col justify-between rounded-md md:items-center md:basis-1/4 bg-negative-200">
        <div className="flex items-center w-full">
          <img src={bannerDetails[0].image.src} alt={bannerDetails[0].title} width="100%" height="auto" />
        </div>
        <div className="flex flex-col items-center p-4 text-center md:p-10">
          <p className="mb-2 font-bold tracking-widest uppercase typography-headline-6">{bannerDetails[0].subtitle}</p>
          <p className="mb-4 font-bold typography-headline-2">{bannerDetails[0].title}</p>
          <p className="mb-4 typography-text-lg">{bannerDetails[0].description}</p>
          <SfButton className="font-semibold text-white bg-neutral-900 hover:bg-neutral-600 active:bg-neutral-700">
            {bannerDetails[0].callToAction}
          </SfButton>
        </div>
      </div>
      <div className="flex flex-col justify-between rounded-md md:items-center md:basis-1/4 bg-warning-200">
        <div className="flex items-center w-full">
          <img src={bannerDetails[1].image.src} alt={bannerDetails[1].title} width="100%" height="auto" />
        </div>
        <div className="flex flex-col items-center p-4 text-center md:p-10">
          <p className="mb-2 font-bold tracking-widest uppercase typography-headline-6">{bannerDetails[1].subtitle}</p>
          <p className="mb-4 font-bold typography-headline-2">{bannerDetails[1].title}</p>
          <p className="mb-4 typography-text-lg">{bannerDetails[1].description}</p>
          <SfButton className="font-semibold text-white bg-neutral-900 hover:bg-neutral-600 active:bg-neutral-700">
            {bannerDetails[1].callToAction}
          </SfButton>
        </div>
      </div>
      <div className="flex flex-col justify-between rounded-md md:items-center md:basis-1/4 bg-negative-200">
        <div className="flex flex-col items-center p-4 text-center md:p-10">
          <p className="mb-2 font-bold tracking-widest uppercase typography-headline-6">{bannerDetails[0].subtitle}</p>
          <p className="mb-4 font-bold typography-headline-2">{bannerDetails[0].title}</p>
          <p className="mb-4 typography-text-lg">{bannerDetails[0].description}</p>
          <SfButton className="font-semibold text-white bg-neutral-900 hover:bg-neutral-600 active:bg-neutral-700">
            {bannerDetails[0].callToAction}
          </SfButton>
        </div>
        <div className="flex items-center w-full">
          <img src={bannerDetails[0].image.src} alt={bannerDetails[0].title} width="100%" height="auto" />
        </div>
      </div>
    </div>
  );
}

// #endregion source

MultipleVerticalBanner.getLayout = ShowcasePageLayout;
