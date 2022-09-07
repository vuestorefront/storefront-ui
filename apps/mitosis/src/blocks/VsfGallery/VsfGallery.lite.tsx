import { useStore, For, Show, useState, onMount, onUnMount, useRef } from '@builder.io/mitosis';
import { classStringFromArray, clamp, lerp } from '../../functions/domUtils';

export interface GalleryImageType {
  src: string;
  thumbnail?: string;
}

export interface VsfGalleryProps {
  images: Array<GalleryImageType | string>;
  control?: 'thumbs' | 'bullets';
  thumbsLeft?: boolean;
  contain?: boolean;
  counter?: boolean;
  slotImage?: any;
}

const DEFAULT_VALUES = {
  images: [] as Array<GalleryImageType | string>,
};

export default function VsfGallery(props: VsfGalleryProps) {
  const draggableRef = useRef<HTMLDivElement>(null);
  const state = useStore({
    get useImagesProp() {
      return Array.isArray(props.images) ? props.images : DEFAULT_VALUES.images;
    },
    get hasBulletControl() {
      return props.control === 'bullets';
    },
    get allImages(): string[] {
      return state.useImagesProp.map((img) => {
        if (typeof img === 'string') return img;
        return img.src;
      });
    },
    get allThumbnails(): string[] {
      return state.useImagesProp.map((img) => {
        if (typeof img === 'string') return img;
        return img.thumbnail || img.src;
      });
    },

    offsetPosition: 0,
    activeIndex: 0,
    get imgPosition(): number {
      return state.activeIndex + state.offsetPosition;
    },
    moveHandler(startPosition: number, ev: PointerEvent) {
      if (!draggableRef) return;
      const rect = draggableRef.getBoundingClientRect();
      state.offsetPosition = lerp(state.offsetPosition, (startPosition - ev.offsetX) / rect.width, 0.04);
    },
    pointerHandler(e: PointerEvent) {
      if (!draggableRef) return;
      draggableRef.setPointerCapture(e.pointerId);
      const pointerEventMethod = (event: PointerEvent) => state.moveHandler(e.offsetX, event);
      draggableRef.addEventListener('pointermove', pointerEventMethod);

      draggableRef.addEventListener(
        'pointerup',
        () => {
          draggableRef.removeEventListener('pointermove', pointerEventMethod);
          // calculate prev/next index depending on current move position
          const stopVal = state.offsetPosition > 0 ? Math.ceil(state.imgPosition) : Math.floor(state.imgPosition);
          // clamp value
          state.activeIndex = clamp(stopVal, 0, state.allImages.length - 1);
          // reset move offset value
          state.offsetPosition = 0;
        },
        { once: true },
      );
    },
  });

  onMount(() => {
    draggableRef?.addEventListener('pointerdown', state.pointerHandler);
  });
  onUnMount(() => {
    draggableRef?.removeEventListener('pointermove', state.pointerHandler);
  });

  return (
    <>
      <div
        class={classStringFromArray([
          'gallery h-full flex relative scroll-smooth',
          props.thumbsLeft ? 'gallery--thumbs-left' : 'gallery--thumbs-bottom',
          !state.hasBulletControl ? 'gap-4' : '',
        ])}
      >
        <div class="gallery__images relative overflow-hidden w-full cursor-grab touch-none" ref={draggableRef}>
          {props.slotImage}
          <Show when={props.counter}>
            <div class="absolute right-2 top-2 z-10 text-xs text-gray-600 font-normal px-2 py-1 pointer-events-none">{`${
              state.activeIndex + 1
            } of ${state.allImages.length}`}</div>
          </Show>
          <div
            class="gallery__images__wrapper flex _overflow-x-auto snap-x snap-mandatory h-full max-h-[700px] scrollbar-hidden transition-transform"
            style={{ transform: `translateX(-${state.imgPosition * 100}%)` }}
          >
            <For each={state.allImages}>
              {(image, index) => (
                <div
                  class={classStringFromArray([
                    'gallery__image snap-center snap-always basis-full shrink-0 grow',
                    state.activeIndex === index ? 'is-active_' : '',
                    props.contain ? 'object-contain' : 'object-cover',
                  ])}
                >
                  <img
                    draggable={false}
                    src={image}
                    alt=""
                    class="gallery__image__img w-full h-full"
                    css={{ objectFit: 'inherit' }}
                  />
                </div>
              )}
            </For>
          </div>
        </div>
        <div class="gallery__controls overflow-hidden flex-shrink-0 basis-auto">
          <Show
            when={state.hasBulletControl}
            else={
              <div class="gallery__thumbnails scroll-pl-4 snap-both snap-mandatory flex gap-2 overflow-auto scrollbar-hidden">
                <For each={state.allThumbnails}>
                  {(thumbnail, index) => (
                    <button
                      class={classStringFromArray([
                        'gallery__thumbnail shrink-0 pb-1 border-b-4 snap-start cursor-pointer',
                        state.activeIndex === index ? 'border-primary-500' : 'border-transparent',
                      ])}
                      onClick={() => (state.activeIndex = index)}
                    >
                      <img src={thumbnail} alt="" class="block object-contain " />
                    </button>
                  )}
                </For>
              </div>
            }
          >
            <div class="gallery__bullets h-6 py-1 items-start flex gap-0.5">
              <For each={state.allThumbnails}>
                {(_, index) => (
                  <button
                    class={classStringFromArray([
                      'flex-grow h-1 cursor-pointer',
                      state.activeIndex === index ? 'bg-primary-500' : 'bg-gray-200',
                    ])}
                    onClick={() => (state.activeIndex = index)}
                  ></button>
                )}
              </For>
            </div>
          </Show>
        </div>
      </div>
    </>
  );
}
