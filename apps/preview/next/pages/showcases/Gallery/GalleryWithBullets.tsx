/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-has-content */
import { ShowcasePageLayout } from '../../showcases';

// #region source
import { type KeyboardEvent, useState } from 'react';
import { SfScrollable, SfButton, SfIconChevronLeft, SfIconChevronRight } from '@storefront-ui/react';
import gallery1 from '@assets/gallery_1.png';
import gallery2 from '@assets/gallery_2.png';
import gallery3 from '@assets/gallery_3.png';
import gallery4 from '@assets/gallery_4.png';
import gallery5 from '@assets/gallery_5.png';
import gallery6 from '@assets/gallery_6.png';
import gallery7 from '@assets/gallery_7.png';
import gallery8 from '@assets/gallery_8.png';
import gallery9 from '@assets/gallery_9.png';
import gallery10 from '@assets/gallery_10.png';

const images = [
  { image: gallery1.src, alt: 'backpack' },
  { image: gallery2.src, alt: 'backpack' },
  { image: gallery3.src, alt: 'backpack' },
  { image: gallery4.src, alt: 'backpack' },
  { image: gallery5.src, alt: 'backpack' },
  { image: gallery6.src, alt: 'backpack' },
  { image: gallery7.src, alt: 'backpack' },
  { image: gallery8.src, alt: 'backpack' },
  { image: gallery9.src, alt: 'backpack' },
  { image: gallery10.src, alt: 'backpack' },
];

export default function GalleryWithBullets() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsLength = images.length;
  const keyDownHandler = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === 'Tab') setActiveIndex(index + 1);
    if (e.key === 'Tab' && e.shiftKey) setActiveIndex(index - 1);
  };
  return (
    <div className="relative flex flex-col gap-1 scroll-smooth">
      <SfScrollable
        className="w-full max-h-[700px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        wrapperClassName="group/scrollable"
        activeIndex={activeIndex}
        isActiveIndexCentered
        previousDisabled={activeIndex === 0}
        nextDisabled={activeIndex === itemsLength - 1}
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
        {images.map(({ image, alt }, index) => (
          <div
            className="relative flex justify-center basis-full snap-center snap-always shrink-0 grow"
            key={`${alt}-${index}`}
          >
            <img
              aria-label={alt}
              aria-hidden={activeIndex !== index}
              className="object-contain w-auto h-full"
              alt={alt}
              src={image}
              draggable="false"
            />
          </div>
        ))}
      </SfScrollable>
      <div className="flex-shrink-0 overflow-hidden basis-auto">
        <div className="flex-row w-full flex gap-0.5 mt overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {images.map(({ alt }, index) => (
            <button
              key={`${index}-bullet`}
              aria-label={alt}
              aria-current={activeIndex === index}
              type="button"
              className={`w-[78px] relative mt-1 border-b-4 transition-colors focus-visible:outline focus-visible:outline-offset-0 pointer-events-none ${
                activeIndex === index ? 'border-primary-700' : 'border-gray-200'
              }`}
              onKeyDown={(e) => keyDownHandler(e, index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// #endregion source

GalleryWithBullets.getLayout = ShowcasePageLayout;
