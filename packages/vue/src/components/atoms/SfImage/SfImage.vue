<template>
  <div
    class="sf-image"
    :class="{ 'sf-image--no-size': !wrapperStyle }"
    :style="wrapperStyle"
    v-on="$listeners"
    @mouseover="overlay = true"
    @mouseleave="overlay = false"
  >
    <template v-if="typeof source === 'string'">
      <img
        v-if="show"
        ref="image"
        :src="source"
        :alt="alt"
        :width="width"
        :height="height"
      />
    </template>
    <template v-else>
      <picture>
        <source
          :srcset="source.desktop.url"
          :media="`(min-width: ${pictureBreakpoint}px)`"
        />
        <source
          :srcset="source.mobile.url"
          :media="`(max-width: ${pictureBreakpoint}px)`"
        />
        <img
          v-if="show"
          ref="image"
          :src="source.desktop.url"
          :alt="alt"
          :width="width"
          :height="height"
        />
      </picture>
    </template>
    <transition name="fade">
      <div v-if="showOverlay" class="sf-image__overlay">
        <slot />
      </div>
    </transition>
  </div>
</template>
<script>
import lozad from "lozad";
export default {
  name: "SfImage",
  props: {
    src: {
      type: [String, Object],
      default: () => ({ mobile: { url: "" }, desktop: { url: "" } })
    },
    alt: {
      type: String,
      default: ""
    },
    width: {
      type: [String, Number],
      default: undefined
    },
    height: {
      type: [String, Number],
      default: undefined
    },
    lazy: {
      type: Boolean,
      default: true
    },
    pictureBreakpoint: {
      type: Number,
      default: 576
    }
  },
  data() {
    return {
      show: false,
      overlay: false
    };
  },
  computed: {
    source() {
      let src = this.src || "";
      if (typeof src === "object") {
        if (!src.desktop || !src.mobile) {
          const object = src.desktop || src.mobile || { url: "" };
          src = object.url;
        }
      }
      return src;
    },
    showOverlay() {
      return this.$slots.default && this.overlay;
    },
    wrapperStyle() {
      return (
        this.width &&
        this.height &&
        `--width: ${this.width}; --height: ${this.height}`
      );
    },
    imgStyle() {
      return (
        this.width &&
        this.height &&
        `position: absolute; transform: translate3d(0, -50%, 0)`
      );
    }
  },
  watch: {
    lazy: {
      handler(value) {
        this.show = !value;
      },
      immediate: true
    },
    src() {
      if (!this.lazy) return;
      this.$el.removeAttribute("data-loaded");
      this.show = false;
      this.lozad();
    }
  },
  mounted() {
    if (!this.lazy) {
      this.show = true;
      return;
    }
    this.lozad();
  },
  methods: {
    lozad() {
      const vm = this;
      this.$nextTick(() => {
        const observer = lozad(vm.$el, {
          load() {
            vm.show = true;
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
