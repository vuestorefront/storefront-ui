/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-has-content */
import { ShowcasePageLayout } from '../../showcases';

// #region source
import { useEffect, useRef, useState } from 'react';
import { SfScrollable, SfButton, SfIconChevronLeft, SfIconChevronRight } from '@storefront-ui/react';
import { clamp } from '@storefront-ui/shared';
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
import gallery1_thumb from '@assets/gallery_1_thumb.png';
import gallery2_thumb from '@assets/gallery_2_thumb.png';
import gallery3_thumb from '@assets/gallery_3_thumb.png';
import gallery4_thumb from '@assets/gallery_4_thumb.png';
import gallery5_thumb from '@assets/gallery_5_thumb.png';
import gallery6_thumb from '@assets/gallery_6_thumb.png';
import gallery7_thumb from '@assets/gallery_7_thumb.png';
import gallery8_thumb from '@assets/gallery_8_thumb.png';
import gallery9_thumb from '@assets/gallery_9_thumb.png';
import gallery10_thumb from '@assets/gallery_10_thumb.png';

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

const thumbImages = [
  { image: gallery1_thumb.src, alt: 'backpack' },
  { image: gallery2_thumb.src, alt: 'backpack' },
  { image: gallery3_thumb.src, alt: 'backpack' },
  { image: gallery4_thumb.src, alt: 'backpack' },
  { image: gallery5_thumb.src, alt: 'backpack' },
  { image: gallery6_thumb.src, alt: 'backpack' },
  { image: gallery7_thumb.src, alt: 'backpack' },
  { image: gallery8_thumb.src, alt: 'backpack' },
  { image: gallery9_thumb.src, alt: 'backpack' },
  { image: gallery10_thumb.src, alt: 'backpack' },
];

export default function GalleryWithBullets() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsLength = thumbImages.length;
  return (
    <div className="relative flex flex-col h-full gap-1 scroll-smooth">
      <SfScrollable
        className="after:block after:pt-[100%] flex-1 relative overflow-hidden w-full cursor-grab active:cursor-grabbing touch-pan-y max-h-[600px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        activeIndex={activeIndex}
        previousDisabled={activeIndex === 0}
        nextDisabled={activeIndex === itemsLength - 1}
        drag
        onPrev={() => {
          setActiveIndex(() => activeIndex - 1);
        }}
        onNext={() => {
          setActiveIndex(() => activeIndex + 1);
        }}
        slotPreviousButton={
          <SfButton
            className="hidden group-hover:flex absolute !rounded-full z-10 left-4"
            variant="secondary"
            size="sm"
            square
            slotPrefix={<SfIconChevronLeft />}
          />
        }
        slotNextButton={
          <SfButton
            className="hidden group-hover:flex absolute !rounded-full z-10 right-4"
            variant="secondary"
            size="sm"
            square
            slotPrefix={<SfIconChevronRight />}
            onClick={({ preventDefault }) => {
              preventDefault();
              setActiveIndex(() => activeIndex + 1);
            }}
          />
        }
      >
        {/* <div
          className="absolute top-0 left-0 flex w-full h-full transition-transform snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] will-change-transform"
          style={{
            transform: `translate3d(${imgPosition * -100}%,0,0)`,
          }}
        > */}
        {images.map(({ image, alt }, index) => (
          <div className="relative snap-center snap-always basis-full shrink-0 grow" key={`${alt}-${index}`}>
            <img className="object-contain" alt={alt} src={image} draggable="false" />
          </div>
        ))}
        {/* </div> */}
      </SfScrollable>
      <div className="flex-shrink-0 overflow-hidden basis-auto">
        <div className="flex-row w-full snap-both snap-mandatory flex gap-0.5 mt overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {thumbImages.map(({ alt }, index) => (
            <div
              aria-label={alt}
              key={`${index}-bullet`}
              className={`w-[78px] relative pb-1 border-b-4 snap-start cursor-pointer transition-colors  ${
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
