/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-has-content */
import { ShowcasePageLayout } from '../../showcases';

// #region source
import { SfButton } from '@storefront-ui/react';
import classNames from 'classnames';

const displayDetails = [
  {
    title: 'Pack it Up',
    subtitle: 'Be active',
    description: 'Explore the great outdoors with our backpacks',
    callToAction: 'Discover now',
    image: 'http://localhost:3100/@assets/display-2.png',
    backgroundColor: 'bg-warning-200',
    reverse: false,
  },
  {
    title: 'Sunny Days Ahead',
    subtitle: 'Be inspired',
    description: 'Step out in style with our sunglasses collection',
    callToAction: 'Discover now',
    image: 'http://localhost:3100/@assets/display.png',
    backgroundColor: 'bg-negative-200',
    reverse: true,
  },

  {
    title: 'Fresh and Bold',
    subtitle: 'New collection',
    description: 'Add a pop up color to your outfit',
    callToAction: 'Discover now',
    image: 'http://localhost:3100/@assets/display-3.png',
    backgroundColor: 'bg-secondary-200',
    reverse: false,
  },
];
export default function DisplayVerticalMultiple() {
  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <div className="flex flex-col flex-grow gap-6 md:flex-row">
        {displayDetails.map(
          ({ title, subtitle, description, callToAction, image, backgroundColor, reverse }, index) => (
            <div
              key={`${title}-${index}`}
              className={classNames(
                `relative flex flex-col justify-between rounded-md md:items-center md:basis-1/2 ${backgroundColor} @container group`,
                { 'flex-col-reverse': reverse },
              )}
            >
              <a
                className="absolute w-full h-full z-1 focus-visible:outline focus-visible:rounded-lg"
                aria-label={title}
                href="#"
              />
              <div className="flex flex-col p-6 text-center items-center @3xl:p-10">
                <p className="uppercase typography-text-xs block font-medium tracking-widest @3xl:typography-headline-6">
                  { subtitle }
                </p>
                <h2 className="mb-4 mt-2 font-semibold typography-display-3 -tracking-wide @3xl:typography-display-1">
                  { title }
                </h2>
                <p className="typography-text-base block mb-4 @3xl:typography-text-lg">
                  { description }
                </p>
                <SfButton blank className="text-white bg-neutral-700 hover:bg-neutral-800 active:bg-neutral-900 group-hover:bg-neutral-800 group-active:bg-neutral-900">
                  { callToAction }
                </SfButton>
              </div>
              <div className="flex items-center w-full">
                <img src={image} alt={title} className="w-full" />
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

// #endregion source

DisplayVerticalMultiple.getLayout = ShowcasePageLayout;
