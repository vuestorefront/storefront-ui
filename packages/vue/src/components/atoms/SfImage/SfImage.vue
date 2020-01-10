<template>
  <div
    class="sf-image"
    @mouseover="hoverHandler(true)"
    @mouseleave="hoverHandler(false)"
    @click="$emit('click')"
  >
    <transition :name="transition">
      <div v-if="hasOverlay && loaded" class="sf-image__overlay">
        <!--@slot slot for overlay content, if is empty the overlay is off -->
        <slot />
      </div>
    </transition>
    <template v-if="lazy">
      <img
        v-if="typeof src === 'string'"
        ref="imgLazy"
        :alt="alt"
        :data-src="src"
        class="sf-image__img"
      />
      <template v-else-if="src && src.normal">
        <picture
          v-if="src.small"
          ref="imgLazy"
          class="sf-image__img"
          :data-iesrc="src.normal.url"
          :data-alt="src.normal.alt"
        >
          <source
            :srcset="src.small.url"
            :media="`(max-width: ${pictureBreakpoint - 0.02}px)`"
          />
          <source
            :srcset="src.normal.url"
            :media="`(min-width: ${pictureBreakpoint}px)`"
          />
        </picture>
        <img
          v-else
          ref="imgLazy"
          :alt="src.normal.alt"
          :data-src="src.normal.url"
          class="sf-image__img"
        />
      </template>
      <img v-else :src="placeholder" alt="No image" class="sf-image__img" />
    </template>
    <template v-else>
      <img
        v-if="typeof src === 'string'"
        :alt="alt"
        :src="src"
        class="sf-image__img"
      />
      <picture v-else-if="src && src.normal" class="sf-image__img">
        <source
          v-if="src.small"
          :srcset="src.small.url"
          :media="`(max-width: ${pictureBreakpoint - 0.02}px)`"
        />
        <source
          :srcset="src.normal.url"
          :media="`(min-width: ${pictureBreakpoint}px)`"
        />
        <img
          :src="src.normal.url"
          :alt="src.normal.alt"
          class="sf-image__img"
        />
      </picture>
      <img v-else :src="placeholder" alt="No image" class="sf-image__img" />
    </template>
  </div>
</template>
<script>
import lozad from "lozad";
export default {
  name: "SfImage",
  props: {
    /**
     * Image url or pictures object (`{ small: { url, alt }, normal: { url, alt } }`)
     */
    src: {
      type: [String, Object],
      default: () => {}
    },
    /**
     * Alt attribute value
     */
    alt: {
      type: String,
      default: ""
    },
    /**
     * Overlay transition type
     */
    transition: {
      type: String,
      default: "fade"
    },
    /**
     * Lazyload
     */
    lazy: {
      type: Boolean,
      default: true
    },
    /**
     * Src image placeholder
     */
    placeholder: {
      type: String,
      default: ""
    },
    /**
     * Screen width breakpoint for picture tag media query
     */
    pictureBreakpoint: {
      type: Number,
      default: 576
    }
  },
  data() {
    return {
      loaded: false,
      overlay: false
    };
  },
  computed: {
    hasOverlay() {
      return this.$slots.hasOwnProperty("default") && this.overlay;
    }
  },
  watch: {
    lazy: function(newValue, oldValue) {
      // init lozad if lazy loading was previously disabled
      if (!oldValue && newValue) {
        this.initLozad();
      }
      // if lazy loading was previously enabled, remove lozad classes and
      // remove spurious img tag added by lozad if src is a multi-size object
      if (oldValue && !newValue) {
        this.$refs.imgLazy.removeAttribute("data-loaded");
        if (this.$refs.imgLazy.tagName === "PICTURE") {
          this.$refs.imgLazy.querySelector("img").remove();
        }
      }
    }
  },
  mounted() {
    if (this.lazy !== false) {
      this.initLozad();
    } else {
      this.loaded = true;
    }
  },
  methods: {
    hoverHandler(state) {
      this.overlay = state;
    },
    initLozad: function() {
      const vm = this;
      this.$nextTick(() => {
        const observer = lozad(vm.$refs.imgLazy, {
          loaded: function() {
            vm.loaded = true;
          }
        });
        observer.observe();
      });
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfImage.scss";
</style>
