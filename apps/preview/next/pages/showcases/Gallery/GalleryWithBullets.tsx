/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-has-content */
import { ShowcasePageLayout } from '../../showcases';

// #region source
import { useState } from 'react';
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
  return (
    <div className="relative flex flex-col gap-1 scroll-smooth">
      <SfScrollable
        className="items-center w-full max-h-[700px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        activeIndex={activeIndex}
        isActiveIndexCentered
        previousDisabled={activeIndex === 0}
        nextDisabled={activeIndex === itemsLength - 1}
        onPrev={() => {
          setActiveIndex(() => activeIndex - 1);
        }}
        onNext={() => {
          setActiveIndex(() => activeIndex + 1);
        }}
        slotPreviousButton={
          <SfButton
            className="absolute !rounded-full !px-3 z-10 top-1/2 left-4"
            variant="secondary"
            size="lg"
            slotPrefix={<SfIconChevronLeft />}
          />
        }
        slotNextButton={
          <SfButton
            className="absolute !rounded-full !px-3 z-10 top-1/2 right-4"
            variant="secondary"
            size="lg"
            slotPrefix={<SfIconChevronRight />}
          />
        }
      >
        {images.map(({ image, alt }, index) => (
          <div className="relative snap-center snap-always shrink-0 " key={`${alt}-${index}`}>
            <img className="object-contain" alt={alt} src={image} draggable="false" />
          </div>
        ))}
      </SfScrollable>
      <div className="flex-shrink-0 overflow-hidden basis-auto">
        <div className="flex-row w-full flex gap-0.5 mt overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {images.map((item, index) => (
            <div
              key={`${index}-bullet`}
              className={`w-[78px] relative pb-1 border-b-4 cursor-pointer transition-colors  ${
                activeIndex === index ? 'border-primary-700' : 'border-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// #endregion source

GalleryWithBullets.getLayout = ShowcasePageLayout;
