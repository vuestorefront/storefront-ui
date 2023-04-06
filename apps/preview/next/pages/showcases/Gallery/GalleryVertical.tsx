/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-has-content */
import { ShowcasePageLayout } from '../../showcases';

// #region source
import { useEffect, useRef, useState } from 'react';
import { clamp } from '@storefront-ui/shared';
import smartwatch from '@assets/smartwatch.png';
import sneakers from '@assets/sneakers.png';

const images = [
  { image: smartwatch.src, alt: 'smartwatch' },
  { image: sneakers.src, alt: 'sneakers' },
  { image: smartwatch.src, alt: 'smartwatch' },
  { image: sneakers.src, alt: 'sneakers' },
  { image: smartwatch.src, alt: 'smartwatch' },
  { image: sneakers.src, alt: 'sneakers' },
  { image: smartwatch.src, alt: 'smartwatch' },
  { image: sneakers.src, alt: 'sneakers' },
  { image: smartwatch.src, alt: 'smartwatch' },
  { image: sneakers.src, alt: 'sneakers' },
];

export default function GalleryVertical() {
  const draggableRef = useRef<HTMLDivElement>(null);
  const [offsetPosition, setOffsetPosition] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const imgPosition = activeIndex + offsetPosition;

  function pointerHandler(e: React.PointerEvent<HTMLDivElement>) {
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
    draggableRef.current.addEventListener(
      'pointerup',
      () => {
        setIsDragging(false);
        draggableRef.current?.removeEventListener('pointermove', pointerEventMethod);
      },
      {
        once: true,
      },
    );
  }

  useEffect(() => {
    if (!isDragging) {
      const stopVal = offsetPosition > 0 ? Math.ceil(imgPosition) : Math.floor(imgPosition);
      setActiveIndex(clamp(stopVal, 0, images.length - 1));
      setOffsetPosition(0);
    }
  }, [isDragging, offsetPosition, imgPosition]);

  return (
    <div className="relative flex flex-col h-full md:flex-row scroll-smooth md:gap-4">
      <div
        className="after:block after:pt-[100%] flex-1 relative overflow-hidden w-full cursor-grab active:cursor-grabbing touch-pan-y max-h-[600px]"
        ref={draggableRef}
        onPointerDown={pointerHandler}
      >
        <div
          className="absolute top-0 left-0 flex w-full h-full transition-transform  snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] will-change-transform"
          style={{
            transform: `translate3d(${imgPosition * -100}%,0,0)`,
          }}
        >
          {images.map(({ image, alt }, index) => (
            <div className="relative snap-center snap-always basis-full shrink-0 grow" key={`${alt}-${index}`}>
              <img className="object-fit" alt={alt} src={image} width="100%" height="auto" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-shrink-0 overflow-hidden md:-order-1 basis-auto">
        <div className="flex-row w-full md:flex-col md:h-full md:px-0 md:scroll-pl-4 snap-both snap-mandatory flex gap-0.5 md:gap-2 overflow-auto scrollbar-hidden">
          {images.map(({ image, alt }, index) => (
            <button
              type="button"
              aria-label="thumbnail image"
              key={`${alt}-${index}-thumbnail`}
              className={`md:w-[78px] md:h-auto relative shrink-0 pb-1 border-b-4 snap-start cursor-pointer transition-colors flex-grow md:flex-grow-0  ${
                activeIndex === index ? 'border-primary-700' : 'border-gray-200 md:border-transparent'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <img alt={alt} className="object-contain" width="78" height="78" src={image} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// #endregion source

GalleryVertical.getLayout = ShowcasePageLayout;
