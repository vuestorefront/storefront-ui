<template>
  <div
    class="sf-image"
    :class="{ 'sf-image--has-size': size && source }"
    :style="size"
    v-on="$listeners"
  >
    <!-- <template v-if="typeof source === 'string'">
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
      <picture :data-iesrc="srcIE" :data-alt="alt"> -->
    <template v-if="isPicture">
      <picture>
        <!-- <source
          v-for="(srcItem, i) in source"
          :key="i"
          :srcset="srcItem.src"
          :media="srcItem.media"
          :type="srcItem.type"
        /> -->
        <source
          v-for="(urlDesktop, i) in source.desktop.url"
          :key="i"
          :srcset="urlDesktop"
          :media="`(min-width: ${pictureBreakpoint}px)`"
        />
        <source 
          v-for="(urlMobile, j) in source.mobile.url"
          :key="j"
          :srcset="urlMobile"
          :media="`(max-width: ${pictureBreakpoint}px)`"
        />
        <!-- <img
          v-if="show"
          ref="image"
          :src="source"
          :alt="alt"
          :media="`(max-width: ${pictureBreakpoint - 1}px)`"
        /> -->
        <img
          v-show="source.desktop.url[0]"
          :src="source.desktop.url[0]"
          v-bind="$attrs"
          :width="width"
          :height="height"
        />
        <!-- <noscript><img ref="image" src="source" alt="" /></noscript> -->
      </picture>
    </template>
    <template v-else>
      <img
        v-show="source"
        :src="source"
        v-bind="$attrs"
        :width="width"
        :height="height"
      />
    </template>
    <noscript v-if="lazy" inline-template>
      <img :src="noscript" v-bind="$attrs" :width="width" :height="height" />
    </noscript>
    <div v-if="hasOverlay" class="sf-image__overlay">
      <slot />
    </div>
  </div>
</template>
<script>
import lozad from "lozad";
export default {
  name: "SfImage",
  inheritAttrs: false,
  props: {
    src: {
      //   type: [String, Array, Object],
      //   default: "",
      // },
      // alt: {
      //   type: String,
      type: [String, Object],
      default: "",
    },
    lazy: {
      type: Boolean,
      default: true,
    },
    width: {
      type: [String, Number],
      default: null,
    },
    height: {
      type: [String, Number],
      default: null,
    },
    pictureBreakpoint: {
      type: Number,
      default: 1024,
    },
    rootMargin: {
      type: String,
      default: "0px 0px 0px 0px",
    },
    threshold: {
      type: [String, Number],
      default: 0,
    },
  },
  data() {
    return {
      isLoaded: false,
    };
  },
  computed: {
    isPicture() {
      return typeof this.src === "object";
    },
    src() {
      typeof this.src.desktop.url === "String" ? this.src.desktop.url = this.src.desktop.url.split() : null
      typeof this.src.mobile.url === "String" ? this.src.mobile.url = this.src.mobile.url.split() : null
      return {
        mobile: {
          url: this.src.desktop.url,
        },
        desktop: {
          url: this.src.mobile.url,
        },
      }
    },
    source() {
      // let src = this.src || "";
      // let srcIE;

      // if (typeof this.src === "object" && !Array.isArray(this.src)) {
      //   if (!src.desktop || !src.mobile) {
      //     const object = src.desktop || src.mobile;
      //     src = object.url;
      //     console.log("object without one element");
      //   } else {
      //     src = [
      //       {
      //         src: this.src.mobile.url,
      //         media: "(max-width: {{pictureBreakpoint}}px)",
      //       },
      //       {
      //         src: this.src.desktop.url,
      //         media: "(min-width: {{pictureBreakpoint}}px)",
      //       },
      //     ];
      //     console.log("full object");
      //   }
      // } else if (Array.isArray(this.src)) {
      //   srcIE = this.src.filter((srcItem, index) => (index = 0));
      //   src = this.src.filter((srcItem, index) => index > 0);
      //   console.log("array");
      // }
      // console.log(src);
      // return src;      
      const allow =
        (this.isLoaded && this.lazy) || (!this.isLoaded && !this.lazy);
      const disallow = this.isPicture
        ? { desktop: { url: null }, mobile: { url: null } }
        : null;
      return allow ? this.src : disallow;
    },
    noscript() {
      return this.isPicture ? this.src.desktop.url[0] : this.src;
    },
    size() {
      return (
        this.width &&
        this.height && {
          "--_image-width": this.width,
          "--_image-height": this.height,
        }
      );
    },
    hasOverlay() {
      return this.$slots.default;
    },
  },
  mounted() {
    if (!this.lazy) return;
    const vm = this;
    this.$nextTick(() => {
      const observer = lozad(vm.$el, {
        load() {
          vm.isLoaded = true;
        },
        rootMargin: vm.rootMargin,
        threshold: vm.threshold,
      });
      observer.observe();
    });
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfImage.scss";
</style>
