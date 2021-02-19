<template>
  <div class="sf-carousel">
    <div ref="controls" class="sf-carousel__controls">
      <!--@slot slot for icon moving to the previous item -->
      <slot name="prev" v-bind="{ go: () => go('prev') }">
        <SfArrow
          aria-label="previous"
          data-testid="carousel-prev-button"
          @click="go('prev')"
        />
      </slot>
      <!--@slot slot for icon moving to the next item -->
      <slot name="next" v-bind="{ go: () => go('next') }">
        <SfArrow
          aria-label="next"
          class="sf-arrow--right"
          data-testid="carousel-next-button"
          @click="go('next')"
        />
      </slot>
    </div>
    <div class="sf-carousel__wrapper">
      <div ref="glide" class="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides sf-carousel__slides">
            <!--@slot default slot for SfCarouselItem tags -->
            <slot />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import SfCarouselItem from "./_internal/SfCarouselItem.vue";
import SfArrow from "../../atoms/SfArrow/SfArrow.vue";
import Glide from "@glidejs/glide";
Vue.component("SfCarouselItem", SfCarouselItem);
export default {
  name: "SfCarousel",
  components: {
    SfArrow,
  },
  props: {
    /** Carousel options like glide.js (https://glidejs.com/docs/) */
    settings: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      glide: null,
      defaultSettings: {
        type: "carousel",
        rewind: true,
        perView: 4,
        slidePerPage: true,
        gap: 0,
        breakpoints: {
          1023: {
            perView: 2,
            peek: {
              before: 0,
              after: 50,
            },
          },
        },
      },
    };
  },
  computed: {
    mergedOptions() {
      let breakpoints = { ...this.defaultSettings.breakpoints };
      if (this.settings.breakpoints) {
        breakpoints = { ...breakpoints, ...this.settings.breakpoints };
      }
      return {
        ...this.defaultSettings,
        ...this.settings,
        breakpoints: breakpoints,
      };
    },
  },
  mounted: function () {
    this.$nextTick(() => {
      if (!this.$slots.default) return;
      const glide = new Glide(this.$refs.glide, this.mergedOptions);
      const size = this.$slots.default.filter((slot) => slot.tag).length;
      if (size <= glide.settings.perView) {
        glide.settings.perView = size;
        glide.settings.rewind = false;
        this.$refs.controls.style.display = "none";
      }
      glide.mount();
      glide.on("run.before", (move) => {
        const { slidePerPage, rewind, type } = this.mergedOptions;
        if (!slidePerPage) return;
        const { perView } = glide.settings;
        if (!perView > 1) return;
        const { direction } = move;
        let page, newIndex;
        switch (direction) {
          case ">":
          case "<":
            page = Math.ceil(glide.index / perView);
            newIndex =
              page * perView + (direction === ">" ? perView : -perView);
            if (newIndex >= size) {
              if (type === "slider" && !rewind) {
                newIndex = glide.index;
              } else {
                newIndex = 0;
              }
            } else if (newIndex < 0 || newIndex + perView > size) {
              if (type === "slider" && !rewind) {
                newIndex = glide.index;
              } else {
                newIndex = size - perView;
              }
            }
            move.direction = "=";
            move.steps = newIndex;
        }
      });
      this.glide = glide;
    });
  },
  methods: {
    go(direct) {
      if (!this.glide) return;
      switch (direct) {
        case "prev":
          this.glide.go("<");
          break;
        case "next":
          this.glide.go(">");
          break;
      }
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfCarousel.scss";
</style>
