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
import * as Images from './images';

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

const thumbImages = [
  { imageSrc: Images.gallery1ThumbSrc, alt: 'backpack1' },
  { imageSrc: Images.gallery2ThumbSrc, alt: 'backpack2' },
  { imageSrc: Images.gallery3ThumbSrc, alt: 'backpack3' },
  { imageSrc: Images.gallery4ThumbSrc, alt: 'backpack4' },
  { imageSrc: Images.gallery5ThumbSrc, alt: 'backpack5' },
  { imageSrc: Images.gallery6ThumbSrc, alt: 'backpack6' },
  { imageSrc: Images.gallery7ThumbSrc, alt: 'backpack7' },
  { imageSrc: Images.gallery8ThumbSrc, alt: 'backpack8' },
  { imageSrc: Images.gallery9ThumbSrc, alt: 'backpack9' },
  { imageSrc: Images.gallery10ThumbSrc, alt: 'backpack10' },
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
    <div className="relative max-h-[600px] flex h-full">
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
            slotPrefix={<SfIconChevronLeft />}
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
            slotPrefix={<SfIconChevronRight />}
          />
        }
      >
        {thumbImages.map(({ imageSrc, alt }, index, thumbsArray) => (
          <button
            // eslint-disable-next-line no-nested-ternary
            ref={index === thumbsArray.length - 1 ? lastThumbRef : index === 0 ? firstThumbRef : null}
            type="button"
            aria-label={alt}
            aria-current={activeIndex === index}
            key={`${alt}-${index}-thumbnail`}
            className={classNames(
              'md:w-[78px] md:h-auto relative shrink-0 pb-1 mx-4 border-b-4 snap-center cursor-pointer focus-visible:outline focus-visible:outline-offset transition-colors flex-grow md:flex-grow-0',
              {
                'border-primary-700': activeIndex === index,
                'border-transparent': activeIndex !== index,
              },
            )}
            onMouseOver={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
          >
            <img alt={alt} className="object-contain border border-neutral-200" width="78" height="78" src={imageSrc} />
          </button>
        ))}
      </SfScrollable>
      <SfScrollable
        className="w-full h-full snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        activeIndex={activeIndex}
        wrapperClassName="h-full"
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
              className="object-cover w-auto h-full"
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
