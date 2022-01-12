<template>
  <div class="sf-scrollable" :class="{ 'is-open': !isHidden }">
    <Simplebar ref="content" class="sf-scrollable__content" :style="style">
      <slot />
    </Simplebar>
    <slot name="view-all" v-bind="{ hasScroll, showText, hideText }">
      <SfButton
        v-show="hasScroll"
        class="sf-button--text sf-scrollable__view-all"
        @click="isHidden = !isHidden"
      >
        <span v-if="isHidden">{{ showText }}</span>
        <span v-else>{{ hideText }}</span>
      </SfButton>
    </slot>
  </div>
</template>
<script>
import Simplebar from "simplebar-vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
export default {
  name: "SfScrollable",
  components: {
    SfButton,
    Simplebar,
  },
  props: {
    maxContentHeight: {
      type: String,
      default: "",
    },
    showText: {
      type: String,
      default: "Show",
    },
    hideText: {
      type: String,
      default: "Hide",
    },
  },
  data() {
    return {
      isHidden: true,
      hasScroll: false,
      contentEl: undefined,
    };
  },
  computed: {
    style() {
      return {
        "--_scrollable-max-height": this.maxContentHeight.trim()
          ? this.maxContentHeight
          : undefined,
      };
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.contentEl = this.$refs.content.$el.querySelector(
        ".simplebar-content"
      );
      if (typeof MutationObserver === "undefined" || !this.contentEl) return;
      const observer = new MutationObserver(this.sizeCalc);
      this.sizeCalc();
      observer.observe(this.contentEl, { childList: true });
    });
  },
  methods: {
    sizeCalc() {
      const containerHeight = this.$refs.content.$el.offsetHeight;
      const contentHeight = this.contentEl.offsetHeight;
      this.hasScroll = contentHeight > containerHeight;
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfScrollable.scss";
</style>
