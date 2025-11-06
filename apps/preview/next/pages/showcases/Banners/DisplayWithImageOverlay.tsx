/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfButton } from '@storefront-ui/react';

const displayDetails = [
  {
    title: 'Cap Game Strong',
    subtitle: 'Special Offer',
    description: 'Score serious style points with our Open Capsule collection',
    buttonText: 'Browse offers',
    backgroundImage: 'http://localhost:3100/@assets/display-overlay.png',
  },
];

export default function DisplayWithImageOverlay() {
  return (
    <div className="max-w-[1540px]">
      {displayDetails.map(({ title, subtitle, description, buttonText, backgroundImage }) => (
        <div key={title} className="relative flex text-white max-w-[1536px] @container group">
          <a
            className="absolute w-full h-full z-1 focus-visible:outline focus-visible:rounded-lg"
            aria-label={title}
            href="#"
          />
          <div className="h-[680px] @3xl:h-auto @3xl:aspect-[2] flex justify-center overflow-hidden grow">
            <div className="grow flex flex-col justify-center items-center text-center p-4 @sm:p-6 @3xl:p-10 max-w-1/2">
              <p className="uppercase typography-text-xs block font-medium tracking-widest @3xl:typography-headline-6">
                {subtitle}
              </p>
              <h2 className="mb-4 mt-2 font-semibold typography-display-3 -tracking-wide @3xl:typography-display-1">
                {title}
              </h2>
              <p className="typography-text-base block mb-4 @3xl:typography-text-lg">{description}</p>
              <SfButton
                blank
                className="w-[200px] bg-white text-primary-700 ring-secondary-400 group-hover:bg-primary-100 group-hover:hover:text-primary-800 group-hover:ring-secondary-500 group-active:bg-primary-200 group-active:text-primary-900 group-active:ring-secondary-600 group-has-[:focus-visible]:outline group-has-[:focus-visible]:outline-offset pointer-events-none"
                tabIndex={-1}
                variant="secondary"
              >
                {buttonText}
              </SfButton>
            </div>
            <div className="absolute inset-0 z-[-1] overflow-hidden bg-primary-900">
              <img src={backgroundImage} alt={title} className="w-full h-full object-cover opacity-75" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
// #endregion source

DisplayWithImageOverlay.getLayout = ShowcasePageLayout;
