<template>
  <div class="sf-gallery">
    <div class="sf-gallery__stage">
      <div ref="glide" class="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li
              v-for="(picture, index) in images"
              :key="'slide-' + index"
              class="glide__slide"
              @mouseover="startZoom(picture)"
              @mousemove="moveZoom($event, index)"
              @mouseout="removeZoom(index)"
            >
              <SfImage
                ref="sfGalleryBigImage"
                class="sf-gallery__big-image"
                :class="{ 'sf-gallery__big-image--has-zoom': enableZoom }"
                :src="picture.desktop.url"
                :alt="picture.alt"
                :width="imageWidth"
                :height="imageHeight"
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
          :style="{ width: `${imageWidth}px`, height: `${imageHeight}px` }"
        >
          <SfImage
            ref="imgZoom"
            :src="pictureSelected"
            :width="imageWidth"
            :height="imageHeight"
            :lazy="false"
          />
        </div>
      </transition>
    </div>
    <div class="sf-gallery__thumbs">
      <slot name="thumbs" v-bind="{ images, active: activeIndex, go }">
        <div
          v-for="(image, index) in images"
          :key="'img-' + index"
          class="sf-gallery__item"
          :class="{ 'sf-gallery__item--selected': index === activeIndex }"
          @click="go(index)"
        >
          <SfImage
            class="sf-gallery__thumb"
            :src="image.mobile.url"
            :width="imageWidth"
            :height="imageHeight"
            alt=""
          />
        </div>
      </slot>
    </div>
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
     * Images width, without unit
     */
    imageWidth: {
      type: [Number, String],
      default: 400
    },
    /**
     * Images height, without unit
     */
    imageHeight: {
      type: [Number, String],
      default: 400
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
      activeIndex: this.current - 1,
      style: ""
    };
  },
  computed: {
    mapPictures() {
      // map images to handle picture tags with SfImage
      return this.images.map(({ desktop, big }) => ({
        mobile: desktop,
        desktop: big
      }));
    }
  },
  mounted() {
    this.$nextTick(() => {
      // handle slider with swipe and transitions with Glide.js
      // https://glidejs.com/docs/
      if (this.images.length < 1) return;
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
      if (!this.glide) return;
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
        const { zoom, big, desktop } = picture;
        this.pictureSelected = (zoom || big || desktop).url;
      }
    },
    moveZoom($event, index) {
      if (this.enableZoom) {
        this.eventHover = $event;
        if (this.outsideZoom) {
          this.positionStatic = this.positionObject(index);
          this.$refs.imgZoom.$refs.image.style.transformOrigin = `${$event.clientX -
            this.positionStatic.x}px ${$event.clientY -
            this.positionStatic.y}px`;
        } else {
          this.positionStatic = this.positionObject(index);
          this.$refs.sfGalleryBigImage[index].$refs.image.style.top = "0";
          this.$refs.sfGalleryBigImage[index].$refs.image.style.transform =
            "scale(2)";
          this.$refs.sfGalleryBigImage[
            index
          ].$refs.image.style.transformOrigin = `${$event.clientX -
            this.positionStatic.x}px ${$event.clientY -
            this.positionStatic.y}px`;
        }
      }
    },
    removeZoom(index) {
      if (this.enableZoom) {
        this.pictureSelected = "";
        this.$refs.sfGalleryBigImage[index].$refs.image.style.transform =
          "translate3d(0, -50%, 0)";
        this.$refs.sfGalleryBigImage[index].$refs.image.style.top = "50%";
      }
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfGallery.scss";
</style>
