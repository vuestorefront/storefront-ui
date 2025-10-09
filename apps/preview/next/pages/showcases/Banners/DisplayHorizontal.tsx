/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfButton } from '@storefront-ui/react';
import classNames from 'classnames';

const displayDetails = [
  {
    image: 'http://localhost:3100/@assets/display.png',
    title: 'Sunny Days Ahead',
    subtitle: 'Be inspired',
    description: 'Step out in style with our sunglasses collection',
    buttonText: 'Discover now',
    reverse: false,
    backgroundColor: 'bg-negative-200',
  },
  {
    image: 'http://localhost:3100/@assets/display-2.png',
    title: 'Pack it Up',
    subtitle: 'Be active',
    description: 'Explore the great outdoors with our backpacks',
    buttonText: 'Discover now',
    reverse: true,
    backgroundColor: 'bg-warning-200',
  },
  {
    image: 'http://localhost:3100/@assets/display-3.png',
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
    <div className="grid md:flex md:flex-row flex-wrap gap-6 max-w-[1540px]">
      {displayDetails.map(({ image, title, subtitle, description, buttonText, backgroundColor, reverse }) => (
        <div
          key={title}
          className={classNames(
            'relative flex md:max-w-[1536px] md:[&:not(:first-of-type)]:flex-1 md:first-of-type:w-full @container group',
            backgroundColor,
          )}
        >
          <a
            className="absolute w-full h-full z-1 focus-visible:outline focus-visible:rounded-lg"
            aria-label={title}
            href="#"
          />
          <div
            className={classNames('flex justify-between overflow-hidden grow', {
              'flex-row-reverse': reverse,
            })}
          >
            <div className="grow flex flex-col justify-center items-start p-4 @sm:p-6 @3xl:p-10 max-w-1/2">
              <p className="uppercase typography-text-xs block font-medium tracking-widest @3xl:typography-headline-6">
                {subtitle}
              </p>
              <h2 className="mb-4 mt-2 font-semibold typography-display-3 -tracking-wide @3xl:typography-display-1">
                {title}
              </h2>
              <p className="typography-text-base block mb-4 @3xl:typography-text-lg">{description}</p>
              <SfButton
                blank
                className="text-white bg-neutral-700 hover:bg-neutral-800 active:bg-neutral-900 group-hover:bg-neutral-800 group-active:bg-neutral-900 group-has-[:focus-visible]:outline group-has-[:focus-visible]:outline-offset pointer-events-none"
                tabIndex={-1}
              >
                {buttonText}
              </SfButton>
            </div>
            <div className="shrink-0 w-1/2 self-start object-contain">
              <img src={image} alt={title} className="w-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
// #endregion source
DisplayHorizontalBlock.getLayout = ShowcasePageLayout;
