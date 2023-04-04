/* eslint-disable jsx-a11y/anchor-has-content */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfButton } from '@storefront-ui/react';
import classNames from 'classnames';
import sunglasses from '@assets/display.png';
import backpack from '@assets/display-2.png';
import winterHat from '@assets/display-3.png';

const displayDetails = [
  {
    image: sunglasses,
    title: 'Sunny Days Ahead',
    subtitle: 'Be inspired',
    description: 'Step out in style with our sunglasses collection',
    buttonText: 'Discover now',
    reverse: false,
    backgroundColor: 'bg-negative-200',
    titleClass: 'md:typography-headline-2',
    subtitleClass: 'md:typography-headline-6',
    descriptionClass: 'md:typography-text-lg',
  },
  {
    image: backpack,
    title: 'Pack it Up',
    subtitle: 'Be active',
    description: 'Explore the great outdoors with our backpacks',
    buttonText: 'Discover now',
    reverse: true,
    backgroundColor: 'bg-warning-200',
  },
  {
    image: winterHat,
    title: 'Fresh and Bold',
    subtitle: 'New collection',
    description: 'Add a pop up color to your outfit',
    buttonText: 'Discover now',
    reverse: false,
    backgroundColor: 'bg-secondary-200',
  },
];

export default function DisplayHorizontalBlock() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-6 max-w-[1540px]">
      {displayDetails.map(
        ({ image, title, subtitle, description, buttonText, backgroundColor, reverse, titleClass, subtitleClass }) => (
          <div
            key={title}
            className={classNames(
              'relative flex md:max-w-[1536px] md:[&:not(:first-of-type)]:flex-1 md:first-of-type:w-full',
              backgroundColor,
            )}
          >
            <a
              className="absolute w-full h-full z-1 focus-visible:outline focus-visible:rounded-lg"
              aria-label={title}
              href="/"
            />
            <div
              className={classNames('flex justify-between overflow-hidden grow', {
                'flex-row-reverse': reverse,
              })}
            >
              <div className="flex flex-col justify-center items-start p-6 lg:p-10 max-w-1/2">
                <p
                  className={classNames('uppercase typography-text-xs block font-bold tracking-widest', subtitleClass)}
                >
                  {subtitle}
                </p>
                <h2 className={classNames('mb-4 mt-2 font-bold typography-headline-3', titleClass)}>{title}</h2>
                <p className="typography-text-base block mb-4">{description}</p>
                <SfButton className="!bg-black">{buttonText}</SfButton>
              </div>
              <img src={image.src} alt={title} className="w-1/2 self-end object-contain" />
            </div>
          </div>
        ),
      )}
    </div>
  );
}
// #endregion source
DisplayHorizontalBlock.getLayout = ShowcasePageLayout;
