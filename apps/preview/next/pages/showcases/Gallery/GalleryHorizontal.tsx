/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-has-content */
import { ShowcasePageLayout } from '../../showcases';

// #region source
import { useState } from 'react';
import {
  SfScrollable,
  SfButton,
  SfIconChevronLeft,
  SfIconChevronRight,
  type SfScrollableOnDragEndData,
} from '@storefront-ui/react';
import classNames from 'classnames';

const withBase = (filepath: string) => `http://localhost:3100/@assets/gallery/${filepath}`;

const images = [
  { imageSrc: withBase('gallery_1.png'), imageThumbSrc: withBase('gallery_1_thumb.png'), alt: 'backpack1' },
  { imageSrc: withBase('gallery_2.png'), imageThumbSrc: withBase('gallery_2_thumb.png'), alt: 'backpack2' },
  { imageSrc: withBase('gallery_3.png'), imageThumbSrc: withBase('gallery_3_thumb.png'), alt: 'backpack3' },
  { imageSrc: withBase('gallery_4.png'), imageThumbSrc: withBase('gallery_4_thumb.png'), alt: 'backpack4' },
  { imageSrc: withBase('gallery_5.png'), imageThumbSrc: withBase('gallery_5_thumb.png'), alt: 'backpack5' },
  { imageSrc: withBase('gallery_6.png'), imageThumbSrc: withBase('gallery_6_thumb.png'), alt: 'backpack6' },
  { imageSrc: withBase('gallery_7.png'), imageThumbSrc: withBase('gallery_7_thumb.png'), alt: 'backpack7' },
  { imageSrc: withBase('gallery_8.png'), imageThumbSrc: withBase('gallery_8_thumb.png'), alt: 'backpack8' },
  { imageSrc: withBase('gallery_9.png'), imageThumbSrc: withBase('gallery_9_thumb.png'), alt: 'backpack9' },
  { imageSrc: withBase('gallery_10.png'), imageThumbSrc: withBase('gallery_10_thumb.png'), alt: 'backpack10' },
  { imageSrc: withBase('gallery_11.png'), imageThumbSrc: withBase('gallery_11_thumb.png'), alt: 'backpack11' },
];

export default function GalleryHorizontal() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onDragged = (event: SfScrollableOnDragEndData) => {
    if (event.swipeRight && activeIndex > 0) {
      setActiveIndex((currentActiveIndex) => currentActiveIndex - 1);
    } else if (event.swipeLeft && activeIndex < images.length - 1) {
      setActiveIndex((currentActiveIndex) => currentActiveIndex + 1);
    }
  };

  return (
    <div className="relative flex flex-col w-full max-h-[600px] aspect-[4/3]">
      <SfScrollable
        className="w-full h-full snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        activeIndex={activeIndex}
        wrapperClassName="h-full min-h-0"
        buttonsPlacement="none"
        isActiveIndexCentered
        drag={{ containerWidth: true }}
        onDragEnd={onDragged}
      >
        {images.map(({ imageSrc, alt }, index) => (
          <div key={`${alt}-${index}`} className="flex justify-center h-full basis-full shrink-0 grow snap-center">
            <img
              aria-label={alt}
              aria-hidden={activeIndex !== index}
              className="w-auto h-full"
              alt={alt}
              src={imageSrc}
            />
          </div>
        ))}
      </SfScrollable>
      <SfScrollable
        className="items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        activeIndex={activeIndex}
        buttonsPlacement="floating"
        slotPreviousButton={
          <SfButton
            className="absolute disabled:hidden !rounded-full z-10 left-4 bg-white"
            variant="secondary"
            size="sm"
            square
            slotPrefix={<SfIconChevronLeft size="sm" />}
          />
        }
        slotNextButton={
          <SfButton
            className="absolute disabled:hidden !rounded-full z-10 right-4 bg-white"
            variant="secondary"
            size="sm"
            square
            slotPrefix={<SfIconChevronRight size="sm" />}
          />
        }
      >
        {images.map(({ imageThumbSrc, alt }, index) => (
          <button
            type="button"
            aria-label={alt}
            aria-current={activeIndex === index}
            key={`${alt}-${index}-thumbnail`}
            className={classNames(
              'md:w-14 md:h-auto relative shrink-0 pb-1 my-2 -mr-2 border-b-4 snap-start cursor-pointer focus-visible:outline focus-visible:outline-offset transition-colors flex-grow md:flex-grow-0',
              activeIndex === index ? 'border-primary-700' : 'border-transparent',
            )}
            onClick={() => setActiveIndex(index)}
          >
            <img
              alt={alt}
              className="object-contain border border-neutral-200"
              width="78"
              height="78"
              src={imageThumbSrc}
            />
          </button>
        ))}
      </SfScrollable>
    </div>
  );
}
// #endregion source

GalleryHorizontal.getLayout = ShowcasePageLayout;
