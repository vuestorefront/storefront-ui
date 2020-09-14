<template>
  <div class="sf-rating">
    <!--@slot custom icon for finalScore. Provide single icon that will be automatically repeated -->
    <slot v-for="index in Math.ceil(finalScore)" name="icon-positive">
      <SfIcon
        :key="`p${index}`"
        class="sf-rating__icon"
        :icon="icon.icon"
        :size="icon.size"
        :color="icon.color"
        :view-box="icon.viewBox"
        :has-badge="icon.hasBadge"
        :badge-label="icon.badgeLabel"
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
        class="sf-rating__icon sf-rating__icon--negative"
        :icon="iconNegative.icon"
        :size="iconNegative.size"
        :color="iconNegative.color"
        :view-box="iconNegative.viewBox"
        :has-badge="iconNegative.hasBadge"
        :badge-label="iconNegative.badgeLabel"
        :coverage="iconNegative.coverage"
      />
    </slot>
  </div>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
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
      type: Object,
      default: () => {
        return {
          icon: "star",
          size: "0.875rem",
        };
      },
    },
    iconNegative: {
      type: Object,
      default: () => {
        return {
          icon: "star",
          size: "0.875rem",
        };
      },
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
