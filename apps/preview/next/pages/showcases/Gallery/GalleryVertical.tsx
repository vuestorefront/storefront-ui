/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-has-content */
import { ShowcasePageLayout } from '../../showcases';

// #region source
import { useRef, useState } from 'react';
import { useIntersection } from 'react-use';
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

export default function GalleryVertical() {
  const lastThumbRef = useRef<HTMLButtonElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const firstThumbRef = useRef<HTMLButtonElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const firstThumbVisible = useIntersection(firstThumbRef, {
    root: thumbsRef.current,
    rootMargin: '0px',
    threshold: 1,
  });

  const lastThumbVisible = useIntersection(lastThumbRef, {
    root: thumbsRef.current,
    rootMargin: '0px',
    threshold: 1,
  });

  const onDragged = (event: SfScrollableOnDragEndData) => {
    if (event.swipeRight && activeIndex > 0) {
      setActiveIndex((currentActiveIndex) => currentActiveIndex - 1);
    } else if (event.swipeLeft && activeIndex < images.length - 1) {
      setActiveIndex((currentActiveIndex) => currentActiveIndex + 1);
    }
  };

  return (
    <div className="relative flex w-full max-h-[600px] aspect-[4/3]">
      <SfScrollable
        ref={thumbsRef}
        className="items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        direction="vertical"
        activeIndex={activeIndex}
        prevDisabled={activeIndex === 0}
        nextDisabled={activeIndex === images.length - 1}
        slotPreviousButton={
          <SfButton
            className={classNames('absolute !rounded-full z-10 top-4 rotate-90 bg-white', {
              hidden: firstThumbVisible?.isIntersecting,
            })}
            variant="secondary"
            size="sm"
            square
            slotPrefix={<SfIconChevronLeft size="sm" />}
          />
        }
        slotNextButton={
          <SfButton
            className={classNames('absolute !rounded-full z-10 bottom-4 rotate-90 bg-white', {
              hidden: lastThumbVisible?.isIntersecting,
            })}
            variant="secondary"
            size="sm"
            square
            slotPrefix={<SfIconChevronRight size="sm" />}
          />
        }
      >
        {images.map(({ imageThumbSrc, alt }, index, thumbsArray) => (
          <button
            // eslint-disable-next-line no-nested-ternary
            ref={index === thumbsArray.length - 1 ? lastThumbRef : index === 0 ? firstThumbRef : null}
            type="button"
            aria-label={alt}
            aria-current={activeIndex === index}
            key={`${alt}-${index}-thumbnail`}
            className={classNames(
              'md:w-[78px] md:h-auto relative shrink-0 pb-1 mx-4 -mb-2 border-b-4 snap-center cursor-pointer focus-visible:outline focus-visible:outline-offset transition-colors flex-grow md:flex-grow-0',
              {
                'border-primary-700': activeIndex === index,
                'border-transparent': activeIndex !== index,
              },
            )}
            onMouseOver={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
          >
            <img alt={alt} className="border border-neutral-200" width="78" height="78" src={imageThumbSrc} />
          </button>
        ))}
      </SfScrollable>
      <SfScrollable
        className="w-full h-full snap-y snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        activeIndex={activeIndex}
        direction="vertical"
        wrapperClassName="h-full m-auto"
        buttonsPlacement="none"
        isActiveIndexCentered
        drag={{ containerWidth: true }}
        onDragEnd={onDragged}
      >
        {images.map(({ imageSrc, alt }, index) => (
          <div
            key={`${alt}-${index}`}
            className="flex justify-center h-full basis-full shrink-0 grow snap-center snap-always"
          >
            <img
              aria-label={alt}
              aria-hidden={activeIndex !== index}
              className="object-contain w-auto h-full"
              alt={alt}
              src={imageSrc}
            />
          </div>
        ))}
      </SfScrollable>
    </div>
  );
}
// #endregion source

GalleryVertical.getLayout = ShowcasePageLayout;
