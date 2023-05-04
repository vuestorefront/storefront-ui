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
  type SfScrollableOnDraggedChangeData,
} from '@storefront-ui/react';
import classNames from 'classnames';
import * as Images from './images';

const images = [
  { imageSrc: Images.gallery1Src, alt: 'backpack' },
  { imageSrc: Images.gallery2Src, alt: 'backpack' },
  { imageSrc: Images.gallery3Src, alt: 'backpack' },
  { imageSrc: Images.gallery4Src, alt: 'backpack' },
  { imageSrc: Images.gallery5Src, alt: 'backpack' },
  { imageSrc: Images.gallery6Src, alt: 'backpack' },
  { imageSrc: Images.gallery7Src, alt: 'backpack' },
  { imageSrc: Images.gallery8Src, alt: 'backpack' },
  { imageSrc: Images.gallery9Src, alt: 'backpack' },
  { imageSrc: Images.gallery10Src, alt: 'backpack' },
];

const thumbImages = [
  { imageSrc: Images.gallery1ThumbSrc, alt: 'backpack' },
  { imageSrc: Images.gallery2ThumbSrc, alt: 'backpack' },
  { imageSrc: Images.gallery3ThumbSrc, alt: 'backpack' },
  { imageSrc: Images.gallery4ThumbSrc, alt: 'backpack' },
  { imageSrc: Images.gallery5ThumbSrc, alt: 'backpack' },
  { imageSrc: Images.gallery6ThumbSrc, alt: 'backpack' },
  { imageSrc: Images.gallery7ThumbSrc, alt: 'backpack' },
  { imageSrc: Images.gallery8ThumbSrc, alt: 'backpack' },
  { imageSrc: Images.gallery9ThumbSrc, alt: 'backpack' },
  { imageSrc: Images.gallery10ThumbSrc, alt: 'backpack' },
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

<<<<<<< HEAD
  function pointerHandler(e: React.PointerEvent<HTMLDivElement>) {
    e.preventDefault();
    if (!draggableRef.current) {
      return;
    }
    draggableRef.current.setPointerCapture(e.pointerId);
    const pointerDownOffset = e.nativeEvent.offsetX;
    setIsDragging(true);
    const rect = draggableRef.current.getBoundingClientRect();
    const pointerEventMethod = (event: PointerEvent) => {
      setOffsetPosition((pointerDownOffset - event.offsetX) / rect.width / 5);
    };
    draggableRef.current.addEventListener('pointermove', pointerEventMethod, { passive: false });
    draggableRef.current.addEventListener('pointerup', () => {
      setIsDragging(false);
      draggableRef.current?.removeEventListener('pointermove', pointerEventMethod);
    });
  }

  useEffect(() => {
    if (!isDragging) {
      const stopVal = offsetPosition > 0 ? Math.ceil(imgPosition) : Math.floor(imgPosition);
      setActiveIndex(clamp(stopVal, 0, images.length - 1));
      setOffsetPosition(0);
    }
  }, [isDragging, offsetPosition, imgPosition]);

  return (
    <div className="relative max-h-[700px] flex flex-col h-full md:flex-row scroll-smooth md:gap-4">
      <div
        className="after:block after:pt-[100%] flex-1 relative overflow-hidden w-full cursor-grab active:cursor-grabbing touch-pan-y"
        ref={draggableRef}
        onPointerDown={pointerHandler}
      >
        <div
          className="absolute top-0 left-0 flex w-full h-full transition-transform snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] will-change-transform"
          style={{
            transform: `translate3d(${imgPosition * -100}%,0,0)`,
          }}
        >
          {images.map(({ image, alt }, index) => (
            <div className="relative flex justify-center snap-always basis-full shrink-0 grow" key={`${alt}-${index}`}>
              <img
                aria-label={alt}
                aria-hidden={activeIndex !== index}
                className="object-cover w-auto h-full"
                alt={alt}
                src={image}
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-shrink-0 overflow-hidden md:-order-1 basis-auto">
        <SfScrollable
          ref={thumbsRef}
          className="items-center w-full snap-y snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          direction="vertical"
          activeIndex={activeIndex}
          previousDisabled={activeIndex === 0}
          nextDisabled={activeIndex === itemsLength - 1}
          isActiveIndexCentered={false}
          drag
          slotPreviousButton={
            <SfButton
              className={classNames(
                'absolute !rounded-full z-10 top-4 rotate-90 bg-white',
                firstThumbVisible?.isIntersecting ? 'hidden' : null,
              )}
              variant="secondary"
              size="sm"
              square
              slotPrefix={<SfIconChevronLeft />}
            />
          }
          slotNextButton={
            <SfButton
              className={classNames(
                'absolute !rounded-full z-10 bottom-4 rotate-90 bg-white',
                lastThumbVisible?.isIntersecting ? 'hidden' : null,
              )}
              variant="secondary"
              size="sm"
              square
              slotPrefix={<SfIconChevronRight />}
            />
          }
        >
          {thumbImages.map(({ image, alt }, index, thumbsArray) => (
            <button
              // eslint-disable-next-line no-nested-ternary
              ref={index === thumbsArray.length - 1 ? lastThumbRef : index === 0 ? firstThumbRef : null}
              type="button"
              aria-label={alt}
              aria-current={activeIndex === index}
              key={`${alt}-${index}-thumbnail`}
              className={`md:w-[78px] md:h-auto relative shrink-0 pb-1 mx-4 border-b-4 snap-center cursor-pointer focus-visible:outline focus-visible:outline-offset transition-colors flex-grow md:flex-grow-0  ${
                activeIndex === index ? 'border-primary-700' : 'border-transparent'
              }`}
              onMouseOver={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
            >
              <img alt={alt} className="object-contain border border-neutral-200" width="78" height="78" src={image} />
            </button>
          ))}
        </SfScrollable>
      </div>
    </div>
  );
}

=======
  const onDragged = (event: SfScrollableOnDraggedChangeData) => {
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
        previousDisabled={activeIndex === 0}
        nextDisabled={activeIndex === images.length - 1}
        slotPreviousButton={
          <SfButton
            className={classNames(
              'absolute !rounded-full z-10 top-4 rotate-90 bg-white',
              firstThumbVisible?.isIntersecting ? 'hidden' : null,
            )}
            variant="secondary"
            size="sm"
            square
            slotPrefix={<SfIconChevronLeft />}
          />
        }
        slotNextButton={
          <SfButton
            className={classNames(
              'absolute !rounded-full z-10 bottom-4 rotate-90 bg-white',
              lastThumbVisible?.isIntersecting ? 'hidden' : null,
            )}
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
            className={`md:w-[78px] md:h-auto relative shrink-0 pb-1 mx-4 border-b-4 snap-center cursor-pointer focus-visible:outline focus-visible:outline-offset transition-colors flex-grow md:flex-grow-0  ${
              activeIndex === index ? 'border-primary-700' : 'border-transparent'
            }`}
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
        onDraggedChange={onDragged}
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
>>>>>>> 555c85f26a9897c05715609148be10598651cd89
// #endregion source

GalleryVertical.getLayout = ShowcasePageLayout;
