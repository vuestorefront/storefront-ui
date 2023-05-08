/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-has-content */
import { ShowcasePageLayout } from '../../showcases';

// #region source
import { useState } from 'react';
import { SfScrollable, SfButton, SfIconChevronLeft, SfIconChevronRight } from '@storefront-ui/react';
import * as Images from './images';
import classNames from 'classnames';

const images = [
  { imageSrc: Images.gallery1Src, alt: 'backpack1' },
  { imageSrc: Images.gallery2Src, alt: 'backpack2' },
  { imageSrc: Images.gallery3Src, alt: 'backpack3' },
  { imageSrc: Images.gallery4Src, alt: 'backpack4' },
  { imageSrc: Images.gallery5Src, alt: 'backpack5' },
  { imageSrc: Images.gallery6Src, alt: 'backpack6' },
  { imageSrc: Images.gallery7Src, alt: 'backpack7' },
  { imageSrc: Images.gallery8Src, alt: 'backpack8' },
  { imageSrc: Images.gallery9Src, alt: 'backpack9' },
  { imageSrc: Images.gallery10Src, alt: 'backpack10' },
];

export default function GalleryWithBullets() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative max-h-[600px] flex flex-col h-full gap-1">
      <SfScrollable
        className="w-full h-full snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        wrapperClassName="group/scrollable h-full"
        activeIndex={activeIndex}
        isActiveIndexCentered
        previousDisabled={activeIndex === 0}
        nextDisabled={activeIndex === images.length - 1}
        buttonsPlacement="block"
        onPrev={() => {
          setActiveIndex(() => activeIndex - 1);
        }}
        onNext={() => {
          setActiveIndex(() => activeIndex + 1);
        }}
        slotPreviousButton={
          <SfButton
            className="hidden group-hover/scrollable:block absolute !rounded-full !p-3 z-10 top-1/2 left-4 bg-white"
            variant="secondary"
            size="lg"
            slotPrefix={<SfIconChevronLeft />}
          />
        }
        slotNextButton={
          <SfButton
            className="hidden group-hover/scrollable:block absolute !rounded-full !p-3 z-10 top-1/2 right-4 bg-white"
            variant="secondary"
            size="lg"
            slotPrefix={<SfIconChevronRight />}
          />
        }
      >
        {images.map(({ imageSrc, alt }, index) => (
          <div
            className="relative flex justify-center basis-full snap-center snap-always shrink-0 grow"
            key={`${alt}-${index}`}
          >
            <img
              aria-label={alt}
              aria-hidden={activeIndex !== index}
              className="object-contain w-auto h-full"
              alt={alt}
              src={imageSrc}
              draggable="false"
            />
          </div>
        ))}
      </SfScrollable>
      <div className="flex-shrink-0 basis-auto">
        <div className="flex-row w-full flex gap-0.5 mt [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {images.map(({ alt }, index) => (
            <button
              key={`${index}-bullet`}
              aria-label={alt}
              aria-current={activeIndex === index}
              type="button"
              className={classNames(
                'w-full relative mt-1 border-b-4 transition-colors focus-visible:outline focus-visible:outline-offset-0',
                { 'border-primary-700': activeIndex === index, 'border-gray-200': activeIndex !== index },
              )}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
// #endregion source

GalleryWithBullets.getLayout = ShowcasePageLayout;
