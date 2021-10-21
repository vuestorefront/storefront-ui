<template functional>
  <div
    :class="[data.class, data.staticClass, 'sf-rating']"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <!--@slot custom icon for finalScore. Provide single icon that will be automatically repeated -->
    <slot
      v-for="index in Math.ceil($options.finalScore(props.score, props.max))"
      name="icon-positive"
    >
      <component
        :is="injections.components.SfIcon"
        :key="`p${index}`"
        size="0.875rem"
        class="sf-rating__icon"
        :icon="props.icon"
        :coverage="
          index === Math.ceil($options.finalScore(props.score, props.max)) &&
          $options.finalScore(props.score, props.max) % 1 > 0
            ? $options.finalScore(props.score, props.max) % 1
            : 1
        "
      />
    </slot>
    <slot
      v-for="index in parseInt($options.finalMax(props.max), 10) -
      Math.ceil($options.finalScore(props.score, props.max))"
      name="icon-negative"
    >
      <component
        :is="injections.components.SfIcon"
        :key="`n${index}`"
        class="sf-rating__icon sf-rating__icon--negative"
        :icon="props.icon"
      />
    </slot>
  </div>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
export default {
  name: "SfRating",
  inject: {
    components: {
      default: { SfIcon },
    },
  },
  props: {
    max: {
      type: Number,
      default: 5,
    },
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
