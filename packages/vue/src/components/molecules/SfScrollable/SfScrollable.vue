<template>
  <div class="sf-scrollable" :class="{ 'is-open': !isHidden }">
    <div ref="content" class="sf-scrollable__content" :style="style">
      <slot />
    </div>
    <slot name="view-all" v-bind="{ hasScroll, showText, hideText }">
      <SfButton
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
import SfButton from "../../atoms/SfButton/SfButton.vue";
export default {
  name: "SfScrollable",
  components: {
    SfButton,
  },
  props: {
    /*
     * Maximum height of visible content
     */
    maxContentHeight: {
      type: String,
      default: "",
    },
    /*
     * Text for button showing content
     */
    showText: {
      type: String,
      default: "Show",
    },
    /*
     * Text for button hiding content
     */
    hideText: {
      type: String,
      default: "Hide",
    },
  },
  data() {
    return {
      isHidden: true,
      hasScroll: false,
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
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfScrollable.scss";
</style>
