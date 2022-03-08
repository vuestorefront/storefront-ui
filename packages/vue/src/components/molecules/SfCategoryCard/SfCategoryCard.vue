<template>
  <SfLink class="sf-category-card" :link="link" :style="style">
    <slot v-bind="{ label, count }">
      <div class="sf-category-card__details">
        <span
          :class="{ 'display-none': !label }"
          class="sf-category-card__label"
          >{{ label }}</span
        >
        <span
          :class="{ 'display-none': !count }"
          class="sf-category-card__count"
          >{{ count }}</span
        >
      </div>
    </slot>
  </SfLink>
</template>
<script>
import SfLink from "../../atoms/SfLink/SfLink.vue";

export default {
  name: "SfCategoryCard",
  components: {
    SfLink,
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    count: {
      type: [String, Number],
      default: "",
    },
    background: {
      type: [String, Object],
      default: "",
    },
    link: {
      type: [String, Object],
      default: "",
    },
  },
  computed: {
    style() {
      const background = this.background;
      if (typeof background === "string") {
        return {
          "--category-card-background": `url(${background})`,
        };
      } else {
        return {
          "--category-card-background": `url('${background.desktop}')`,
          "--category-card-background-mobile": `url('${background.mobile}')`,
        };
      }
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfCategoryCard.scss";
</style>
