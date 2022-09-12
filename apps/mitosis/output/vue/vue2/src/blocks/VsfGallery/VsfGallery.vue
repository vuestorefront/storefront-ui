<template>
  <div
    :class="
      _classStringToObject(
        classStringFromArray([
          'gallery h-full flex relative scroll-smooth',
          thumbsLeft ? 'gallery--thumbs-left' : 'gallery--thumbs-bottom',
          !hasBulletControl ? 'gap-4' : '',
        ])
      )
    "
  >
    <div
      class="gallery__images relative overflow-hidden w-full cursor-grab active:cursor-grabbing touch-none"
      ref="draggableRef"
    >
      <slot name="image" />

      <div
        class="absolute right-2 top-2 z-10 text-xs text-gray-600 font-normal px-2 py-1 pointer-events-none"
        v-if="counter"
      >
        {{ `${activeIndex + 1} of ${allImages.length}` }}
      </div>

      <div
        class="gallery__images__wrapper flex _overflow-x-auto snap-x snap-mandatory h-full max-h-[700px] scrollbar-hidden transition-transform will-change-transform"
        :style="{
          transform: `translate3d(-${imgPosition * 100}%,0,0)`,
        }"
      >
        <div
          class="gallery__image snap-center snap-always basis-full shrink-0 grow"
          v-for="(image, index) in allImages"
          :key="index"
        >
          <img
            alt=""
            :draggable="false"
            :src="image"
            :class="
              _classStringToObject(
                classStringFromArray([
                  'gallery__image__img w-full h-full',
                  contain ? 'object-contain' : 'object-cover',
                ])
              )
            "
          />
        </div>
      </div>
    </div>
    <div class="gallery__controls overflow-hidden flex-shrink-0 basis-auto">
      <div
        class="gallery__bullets h-6 py-1 items-start flex gap-0.5"
        v-if="hasBulletControl"
      >
        <button
          v-for="(_, index) in allThumbnails"
          :class="
            _classStringToObject(
              classStringFromArray([
                'flex-grow h-1 cursor-pointer transition-colors',
                activeIndex === index ? 'bg-primary-500' : 'bg-gray-200',
              ])
            )
          "
          @click="activeIndex = index"
          :key="index"
        ></button>
      </div>
      <div
        class="gallery__thumbnails scroll-pl-4 snap-both snap-mandatory flex gap-2 overflow-auto scrollbar-hidden"
        v-else
      >
        <button
          v-for="(thumbnail, index) in allThumbnails"
          :class="
            _classStringToObject(
              classStringFromArray([
                'gallery__thumbnail shrink-0 pb-1 border-b-4 snap-start cursor-pointer transition-colors',
                activeIndex === index
                  ? 'border-primary-500'
                  : 'border-transparent',
              ])
            )
          "
          @click="activeIndex = index"
          :key="index"
        >
          <img alt="" class="block object-contain" :src="thumbnail" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>




  import { classStringFromArray, clamp, lerp } from '../../functions/domUtils';
  const DEFAULT_VALUES = {
images: ([] as Array<GalleryImageType | string>)
};




      export default {
      name: 'vsf-gallery',

      props: ['images','control','thumbsLeft','slotImage','counter','contain'],

      data: () => ({ offsetPosition: 0, activeIndex: 0, isDragging: false,classStringFromArray}),





      mounted() {
              this.$refs.draggableRef?.addEventListener('pointerdown', this.pointerHandler)
            },

      watch: {
          onUpdateHook0() {
                if (!this.isDragging) {
// calculate prev/next index depending on current move position
const stopVal = this.offsetPosition > 0 ? Math.ceil(this.imgPosition) : Math.floor(this.imgPosition); // clamp value

this.activeIndex = clamp(stopVal, 0, this.allImages.length - 1); // reset move offset value

this.offsetPosition = 0;
}
                }

        },
      unmounted() {
              this.$refs.draggableRef?.removeEventListener('pointerdown', this.pointerHandler)
            },


        computed: {  useImagesProp() {
return Array.isArray(this.images) ? this.images : DEFAULT_VALUES.images;
},  hasBulletControl() {
return this.control === 'bullets';
},  allImages() {
return this.useImagesProp.map(img => {
  if (typeof img === 'string') return img;
  return img.src;
});
},  allThumbnails() {
return this.useImagesProp.map(img => {
  if (typeof img === 'string') return img;
  return img.thumbnail || img.src;
});
},  imgPosition() {
return this.activeIndex + this.offsetPosition;
},  onUpdateHook0() {
return {
  0: this.isDragging
};
},},


        methods: {  pointerHandler(e) {
if (!this.$refs.draggableRef) return;
this.$refs.draggableRef.setPointerCapture(e.pointerId);
this.isDragging = true;
const rect = this.$refs.draggableRef.getBoundingClientRect();

const pointerEventMethod = event => {
  /* IF-vue */

  /* @ts-ignore */
  this.offsetPosition = lerp(this.offsetPosition, (e.offsetX - event.offsetX) / rect.width, 0.02);
  /* ENDIF-vue */

  /* IF-react */

  this.offsetPosition = prev => lerp(prev, (e.offsetX - event.offsetX) / rect.width, 0.02);
  /* ENDIF-react */

};

this.$refs.draggableRef.addEventListener('pointermove', pointerEventMethod);
this.$refs.draggableRef.addEventListener('pointerup', () => {
  this.isDragging = false;
  this.$refs.draggableRef.removeEventListener('pointermove', pointerEventMethod);
}, {
  once: true
});
},_classStringToObject(str) {
      const obj = {};
      if (typeof str !== 'string') { return obj }
      const classNames = str.trim().split(/\s+/);
      for (const name of classNames) {
        obj[name] = true;
      }
      return obj;
    }  },

    }
</script>
