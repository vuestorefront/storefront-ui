<template>
  <div class="sf-rating">
    <!--@slot custom icon for finalScore. Provide single icon that will be automatically repeated -->
    <slot
      v-for="index in Math.ceil($options.finalScore(score, max))"
      name="icon-positive"
    >
      <component
        :is="components.SfIcon"
        :key="`p${index}`"
        size="0.875rem"
        class="sf-rating__icon"
        :icon="icon"
        :coverage="
          index === Math.ceil($options.finalScore(score, max)) &&
          $options.finalScore(score, max) % 1 > 0
            ? $options.finalScore(score, max) % 1
            : 1
        "
      />
    </slot>
    <slot
      v-for="index in parseInt($options.finalMax(max), 10) -
      Math.ceil($options.finalScore(score, max))"
      name="icon-negative"
    >
      <component
        :is="components.SfIcon"
        :key="`n${index}`"
        class="sf-rating__icon sf-rating__icon--negative"
        :icon="icon"
      />
    </slot>
  </div>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
export default {
  name: "SfRating",
  compatConfig: {
    MODE: 3, // opt-in to Vue 3 behavior for this component only
  },
  inject: {
    components: {
      default: { SfIcon },
    },
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
  finalScore(score, max) {
    if (!score) {
      return 0;
    } else if (score < 0) {
      return 0;
    } else if (score > max && max > 0) {
      return max;
    } else if (max <= 0) {
      return 0;
    } else {
      return score;
    }
  },
  finalMax(max) {
    return !max || max <= 0 ? 1 : max;
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfRating.scss";
</style>
