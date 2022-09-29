import * as React from "react";
import { useState, useRef, useEffect } from "react";

export interface GalleryImageType {
  src: string;
  thumbnail?: string;
}
export interface VsfGalleryProps {
  images: Array<GalleryImageType | string>;
  control?: "thumbs" | "bullets";
  thumbsLeft?: boolean;
  contain?: boolean;
  counter?: boolean;
  slotImage?: any;
}

import { classStringFromArray, clamp, lerp } from "../../functions/domUtils";
const DEFAULT_VALUES = {
  images: [] as Array<GalleryImageType | string>,
};

export default function VsfGallery(props: VsfGalleryProps) {
  const draggableRef = useRef<HTMLDivElement>(null);
  function useImagesProp() {
    return Array.isArray(props.images) ? props.images : DEFAULT_VALUES.images;
  }

  function hasBulletControl() {
    return props.control === "bullets";
  }

  function allImages() {
    return useImagesProp().map((img) => {
      if (typeof img === "string") return img;
      return img.src;
    });
  }

  function allThumbnails() {
    return useImagesProp().map((img) => {
      if (typeof img === "string") return img;
      return img.thumbnail || img.src;
    });
  }

  const [offsetPosition, setOffsetPosition] = useState(() => 0);

  const [activeIndex, setActiveIndex] = useState(() => 0);

  function imgPosition() {
    return activeIndex + offsetPosition;
  }

  const [isDragging, setIsDragging] = useState(() => false);

  function pointerHandler(e) {
    if (!draggableRef.current) return;
    draggableRef.current.setPointerCapture(e.pointerId);
    setIsDragging(true);
    const rect = draggableRef.current.getBoundingClientRect();

    const pointerEventMethod = (event) => {
      setOffsetPosition((prev) =>
        lerp(prev, (e.offsetX - event.offsetX) / rect.width, 0.02)
      );
    };

    draggableRef.current.addEventListener("pointermove", pointerEventMethod);
    draggableRef.current.addEventListener(
      "pointerup",
      () => {
        setIsDragging(false);
        draggableRef.current.removeEventListener(
          "pointermove",
          pointerEventMethod
        );
      },
      {
        once: true,
      }
    );
  }

  useEffect(() => {
    draggableRef.current?.addEventListener("pointerdown", pointerHandler);
  }, []);

  useEffect(() => {
    if (!isDragging) {
      // calculate prev/next index depending on current move position
      const stopVal =
        offsetPosition > 0
          ? Math.ceil(imgPosition())
          : Math.floor(imgPosition()); // clamp value

      setActiveIndex(clamp(stopVal, 0, allImages().length - 1)); // reset move offset value

      setOffsetPosition(0);
    }
  }, [isDragging]);

  useEffect(() => {
    return () => {
      draggableRef.current?.removeEventListener("pointerdown", pointerHandler);
    };
  }, []);

  return (
    <>
      <div
        className={classStringFromArray([
          "gallery h-full flex relative scroll-smooth",
          props.thumbsLeft ? "gallery--thumbs-left" : "gallery--thumbs-bottom",
          !hasBulletControl() ? "gap-4" : "",
        ])}
      >
        <div
          className="gallery__images relative overflow-hidden w-full cursor-grab active:cursor-grabbing touch-none"
          ref={draggableRef}
        >
          {props.slotImage}

          {props.counter ? (
            <>
              <div className="absolute right-2 top-2 z-10 text-xs text-gray-600 font-normal px-2 py-1 pointer-events-none">{`${
                activeIndex + 1
              } of ${allImages().length}`}</div>
            </>
          ) : null}

          <div
            className="gallery__images__wrapper flex _overflow-x-auto snap-x snap-mandatory h-full max-h-[700px] scrollbar-hidden transition-transform will-change-transform"
            style={{
              transform: `translate3d(-${imgPosition() * 100}%,0,0)`,
            }}
          >
            {allImages()?.map((image, index) => (
              <div
                className="gallery__image snap-center snap-always basis-full shrink-0 grow"
                key={index}
              >
                <img
                  alt=""
                  draggable={false}
                  src={image}
                  className={classStringFromArray([
                    "gallery__image__img w-full h-full",
                    props.contain ? "object-contain" : "object-cover",
                  ])}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="gallery__controls overflow-hidden flex-shrink-0 basis-auto">
          {hasBulletControl() ? (
            <>
              <div className="gallery__bullets h-6 py-1 items-start flex gap-0.5">
                {allThumbnails()?.map((_, index) => (
                  <button
                    key={index}
                    className={classStringFromArray([
                      "flex-grow h-1 cursor-pointer transition-colors",
                      activeIndex === index ? "bg-primary-500" : "bg-gray-200",
                    ])}
                    onClick={(event) => setActiveIndex(index)}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="gallery__thumbnails scroll-pl-4 snap-both snap-mandatory flex gap-2 overflow-auto scrollbar-hidden">
              {allThumbnails()?.map((thumbnail, index) => (
                <button
                  key={index}
                  className={classStringFromArray([
                    "gallery__thumbnail shrink-0 pb-1 border-b-4 snap-start cursor-pointer transition-colors",
                    activeIndex === index
                      ? "border-primary-500"
                      : "border-transparent",
                  ])}
                  onClick={(event) => setActiveIndex(index)}
                >
                  <img
                    alt=""
                    className="block object-contain "
                    src={thumbnail}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
