<template>
  <div class="sf-rating">
    <!--@slot custom icon for finalScore. Provide single icon that will be automatically repeated -->
    <slot v-for="index in Math.ceil(finalScore)" name="icon-positive">
      <SfIcon
        :key="`p${index}`"
        size="0.875rem"
        class="sf-rating__icon"
        :icon="icon"
        :coverage="
          index === Math.ceil(finalScore) && finalScore % 1 > 0
            ? finalScore % 1
            : 1
        "
      />
    </slot>
    <slot
      v-for="index in parseInt(finalMax, 10) - Math.ceil(finalScore)"
      name="icon-negative"
    >
      <SfIcon
        :key="`n${index}`"
        size="0.875rem"
        class="sf-rating__icon sf-rating__icon--negative"
        :icon="icon"
      />
    </slot>
  </div>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import icons from "@storefront-ui/shared/icons/icons";
const SF_ICONS = Object.keys(icons);
export default {
  name: "SfRating",
  components: {
    SfIcon,
  },
  props: {
    /**
     * Maximum score
     */
    max: {
      type: Number,
      default: 5,
    },
    /**
     * Score (obviously must be less than maximum)
     */
    score: {
      type: Number,
      default: 1,
    },
    icon: {
      type: String,
      default: "star",
    },
  },
  computed: {
    finalScore() {
      if (!this.score) {
        return 0;
      } else if (this.score < 0) {
        return 0;
      } else if (this.score > this.max && this.max > 0) {
        return this.max;
      } else if (this.max <= 0) {
        return 0;
      } else {
        return this.score;
      }
    },
    finalMax() {
      return !this.max || this.max <= 0 ? 1 : this.max;
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfRating.scss";
</style>
