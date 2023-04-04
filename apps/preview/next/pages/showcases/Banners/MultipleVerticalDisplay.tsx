import { ShowcasePageLayout } from '../../showcases';

// #region source
import { SfButton } from '@storefront-ui/react';
import sunglasses from '@assets/display.png';
import backpack from '@assets/display-2.png';
import classNames from 'classnames';

const displayDetails = [
  {
    title: 'Pack it Up',
    subtitle: 'Be active',
    description: 'Explore the great outdoors with our backpacks',
    callToAction: 'Discover now',
    image: backpack,
    backgroundColor: 'bg-warning-200',
    reverse: false,
  },
  {
    title: 'Sunny Days Ahead',
    subtitle: 'Be inspired',
    description: 'Step out in style with our sunglasses collection',
    callToAction: 'Discover now',
    image: sunglasses,
    backgroundColor: 'bg-negative-200',
    reverse: true,
  },

  {
    title: 'Pack it Up',
    subtitle: 'Be active',
    description: 'Explore the great outdoors with our backpacks',
    callToAction: 'Discover now',
    image: backpack,
    backgroundColor: 'bg-warning-200',
    reverse: true,
  },
  {
    title: 'Sunny Days Ahead',
    subtitle: 'Be inspired',
    description: 'Step out in style with our sunglasses collection',
    callToAction: 'Discover now',
    image: sunglasses,
    backgroundColor: 'bg-negative-200',
    reverse: false,
  },
];
export default function MultipleVerticalDisplay() {
  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <div className="flex flex-col gap-6 md:flex-row">
        {displayDetails.map(
          ({ title, subtitle, description, callToAction, image, backgroundColor, reverse }, index) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={`${title}-${index}`}
              className={classNames(
                `flex flex-col justify-between rounded-md md:items-center md:basis-1/2 ${backgroundColor}`,
                { 'flex-col-reverse': reverse },
              )}
            >
              <div className="flex flex-col items-center p-4 text-center md:p-10">
                <p className="mb-2 font-bold tracking-widest uppercase typography-headline-6">{subtitle}</p>
                <p className="mb-4 font-bold typography-headline-2">{title}</p>
                <p className="mb-4 typography-text-lg">{description}</p>
                <SfButton className="font-semibold !bg-neutral-900">{callToAction}</SfButton>
              </div>
              <div className="flex items-center w-full">
                <img src={image.src} alt={title} width="100%" height="auto" />
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

// #endregion source

MultipleVerticalDisplay.getLayout = ShowcasePageLayout;
