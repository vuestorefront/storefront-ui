/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-has-content */
import { ShowcasePageLayout } from '../../showcases';

// #region source
import { useEffect, useRef, useState } from 'react';
import { useIntersection } from 'react-use';
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
import classNames from 'classnames';

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

export default function GalleryVertical() {
  const draggableRef = useRef<HTMLDivElement>(null);
  const lastThumbRef = useRef<HTMLButtonElement>(null);
  const firstThumbRef = useRef<HTMLButtonElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const [offsetPosition, setOffsetPosition] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const itemsLength = thumbImages.length;

  const imgPosition = activeIndex + offsetPosition;
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
        className="after:block after:pt-[100%] flex-1 relative overflow-hidden w-full cursor-grab active:cursor-grabbing touch-pan-y max-h-[600px]"
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
            <div className="relative snap-always basis-full shrink-0 grow" key={`${alt}-${index}`}>
              <img className="object-contain" alt={alt} src={image} draggable="false" />
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
                'absolute !rounded-full z-10 top-4 rotate-90',
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
                'absolute !rounded-full z-10 bottom-4 rotate-90',
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
              key={`${alt}-${index}-thumbnail`}
              className={`md:w-[78px] md:h-auto relative shrink-0 pb-1 border-b-4 snap-center cursor-pointer transition-colors flex-grow md:flex-grow-0  ${
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

// #endregion source

GalleryVertical.getLayout = ShowcasePageLayout;
