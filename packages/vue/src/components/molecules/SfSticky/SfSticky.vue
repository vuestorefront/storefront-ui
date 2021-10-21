<template>
  <div
    class="sf-sticky"
    :class="{
      'sf-sticky--sticky': isSticky,
      'sf-sticky--bound': isBound,
    }"
  >
    <!-- @slotPlace here all content that sticky property applies to.-->
    <slot />
  </div>
</template>
<script>
export default {
  name: "SfSticky",
  data() {
    return {
      top: 0,
      height: 0,
      width: 0,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      parentTop: 0,
      parentHeight: 0,
      scrollY: 0,
      isSticky: false,
      isBound: false,
    };
  },
  computed: {
    isIE() {
      if (typeof window === "undefined") return;
      const ua = window.navigator.userAgent;
      return ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/ ") > -1;
    },
    maxWidth() {
      return this.width - (this.padding.right + this.padding.left);
    },
    scrollBegin() {
      return this.parentTop + this.top;
    },
    scrollEnd() {
      return (
        this.parentHeight + this.parentTop - this.height - this.padding.bottom
      );
    },
  },
  watch: {
    scrollY() {
      this.toggleSticky();
      this.toggleBound();
    },
    parentTop() {
      this.$el.style.bottom = "";
      this.$el.parentElement.style.paddingTop = "";
      this.isSticky = false;
      this.isBound = false;
      this.computedPadding();
      this.parentHeight = this.$el.parentElement.offsetHeight;
    },
    width(value) {
      this.$el.style.maxWidth = `${value}px`;
    },
    isSticky(state) {
      if (state) {
        if (this.$el.nextSibling) {
          this.$el.parentElement.style.paddingTop = `${
            this.height + this.padding.top
          }px`;
        }
      } else {
        if (this.$el.nextSibling && this.scrollY <= this.parentTop + this.top) {
          this.$el.parentElement.style.paddingTop = "";
        }
      }
    },
    isBound(state) {
      if (state) {
        this.$el.style.bottom = `${this.padding.bottom}px`; //if parent have padding
      } else {
        this.$el.style.bottom = "";
      }
    },
  },
  mounted: function () {
    if (!this.isIE) return;
    this.$el.parentElement.style.position = "relative";
    this.padding = this.computedPadding();
    this.parentTop = this.$el.parentElement.offsetTop;
    this.top = this.$el.offsetTop;
    this.parentHeight = this.$el.parentElement.offsetHeight;
    this.height = this.$el.offsetHeight;
    this.width = this.$el.parentElement.offsetWidth;
    window.addEventListener("scroll", this.scrollHandler, { passive: true });
    window.addEventListener("resize", this.resizeHandler, { passive: true });
  },
  beforeDestroy: function () {
    window.removeEventListener("scroll", this.scrollHandler);
    window.removeEventListener("resize", this.resizeHandler);
  },
  methods: {
    scrollHandler() {
      this.scrollY = Math.ceil(window.pageYOffset);
    },
    resizeHandler() {
      this.width = this.$el.parentElement.offsetWidth;
      this.parentTop = this.$el.parentElement.offsetTop;
    },
    toggleSticky() {
      if (
        this.scrollY >= this.parentTop + this.top &&
        this.scrollY < this.scrollEnd
      ) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
    toggleBound() {
      if (this.scrollY >= this.scrollEnd && this.scrollBegin < this.scrollEnd) {
        this.isBound = true;
      } else {
        this.isBound = false;
      }
    },
    computedPadding() {
      const computed = window.getComputedStyle(this.$el.parentElement);
      return {
        top: parseInt(computed["padding-top"], 10),
        right: parseInt(computed["padding-right"], 10),
        bottom: parseInt(computed["padding-bottom"], 10),
        left: parseInt(computed["padding-left"], 10),
      };
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfSticky.scss";
</style>
