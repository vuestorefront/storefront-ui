<template>
  <div class="sf-gallery">
    <div class="sf-gallery__thumbs">
      <slot name="thumbs" v-bind="{ images, active: activeIndex, go }">
        <div
          v-for="(image, index) in images"
          :key="'img-' + index"
          class="sf-gallery__item"
          :class="{ 'sf-gallery__item--selected': index === activeIndex }"
          @click="go(index)"
        >
          <img
            class="sf-gallery__thumb"
            :src="image.small.url"
            :alt="image.small.alt"
          />
        </div>
      </slot>
    </div>
    <div class="sf-gallery__stage">
      <div ref="glide" class="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li
              v-for="(picture, index) in mapPictures"
              :key="'slide-' + index"
              class="glide__slide"
              @mouseover="startZoom(picture)"
              @mousemove="moveZoom($event, index)"
              @mouseout="removeZoom()"
            >
              <SfImage
                ref="sfGalleryBigImage"
                class="sf-gallery__big-image"
                :class="{ 'sf-gallery__big-image--has-zoom': enableZoom }"
                :src="picture.normal.url"
                @click="$emit('click:stage', { picture, index })"
              />
            </li>
          </ul>
        </div>
      </div>
      <transition name="fade">
        <div
          v-if="outsideZoom && pictureSelected"
          ref="outSide"
          class="sf-gallery__zoom"
        >
          <img ref="imgZoom" :src="pictureSelected" />
        </div>
      </transition>
    </div>
    <div ref="nothingDiv"></div>
  </div>
</template>
<script>
import Glide from "@glidejs/glide";
import SfImage from "../../atoms/SfImage/SfImage.vue";
export default {
  name: "SfGallery",
  components: {
    SfImage
  },
  props: {
    /**
     * Images list
     */
    images: {
      type: Array,
      default: () => []
    },
    /**
     * Initial image number (starting from 1)
     */
    current: {
      type: Number,
      default: 1
    },
    /**
     * Glide slider options (https://glidejs.com/docs/options/)
     */
    sliderOptions: {
      type: Object,
      default() {
        return {
          type: "slider",
          autoplay: false,
          rewind: false,
          gap: 0
        };
      }
    },
    /**
     * Image zoom inside or overlap the stage
     */
    outsideZoom: {
      type: Boolean,
      default: false
    },
    /**
     * Toogle for image zoom or overlap the stage
     */
    enableZoom: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      positionStatic: {},
      eventHover: {},
      pictureSelected: "",
      glide: null,
      activeIndex: this.current - 1
    };
  },
  computed: {
    mapPictures() {
      // map images to handle picture tags with SfImage
      return this.images.map(({ normal, big }) => ({
        small: normal,
        normal: big
      }));
    }
  },
  mounted() {
    this.$nextTick(() => {
      // handle slider with swipe and transitions with Glide.js
      // https://glidejs.com/docs/
      const glide = new Glide(this.$refs.glide, this.sliderOptions);
      glide.on("run", () => {
        this.go(glide.index);
      });
      glide.mount();
      this.glide = glide;
    });
  },
  beforeDestroy() {
    if (this.glide) {
      this.glide.destroy();
    }
  },
  methods: {
    positionObject(index) {
      if (this.$refs.sfGalleryBigImage) {
        if (this.outsideZoom) {
          return this.$refs.glide.getBoundingClientRect();
        } else {
          return this.$refs.sfGalleryBigImage[
            index
          ].$el.getBoundingClientRect();
        }
      }
      return "";
    },
    go(index) {
      this.activeIndex = index;
      /**
       * Event for current image change (`v-model`)
       * @type {Event}
       */
      this.$emit("click", index + 1);
      if (this.glide) {
        this.glide.go(`=${index}`);
      }
    },
    startZoom(picture) {
      if (this.enableZoom) {
        const { zoom, big, normal } = picture;
        this.pictureSelected = (zoom || big || normal).url;
      }
    },
    moveZoom($event, index) {
      if (this.enableZoom) {
        this.eventHover = $event;
        if (this.outsideZoom) {
          this.positionStatic = this.positionObject(index);
          this.$refs.imgZoom.style.transformOrigin = `${$event.clientX -
            this.positionStatic.x}px ${$event.clientY -
            this.positionStatic.y}px`;
        } else {
          this.positionStatic = this.positionObject(index);
          this.$refs.sfGalleryBigImage[index].$refs.imgLazy.style.transform =
            "scale(2)";
          this.$refs.sfGalleryBigImage[
            index
          ].$refs.imgLazy.style.transformOrigin = `${$event.clientX -
            this.positionStatic.x}px ${$event.clientY -
            this.positionStatic.y}px`;
        }
      }
    },
    removeZoom() {
      if (this.enableZoom) {
        this.pictureSelected = "";
        this.$refs.sfGalleryBigImage.forEach(el => {
          el.$refs.imgLazy.style.transform = "scale(1)";
        });
      }
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfGallery.scss";
</style>
