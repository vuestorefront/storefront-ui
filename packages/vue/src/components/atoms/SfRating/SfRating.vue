<template>
  <div class="sf-rating">
    <!--@slot custom icon for finalScore. Provide single icon that will be automatically repeated -->
    <slot v-for="index in parseInt(finalScore, 10)" name="icon-positive">
      <SfIcon
        :key="`p${index}`"
        size="14px"
        class="sf-rating__icon-positive"
        icon="star"
      />
    </slot>
    <!--@slot custom icon for negative (left) finalScore. Provide single icon that will be automatically repeated -->
    <slot
      v-for="index in parseInt(finalMax, 10) - parseInt(finalScore, 10)"
      name="icon-negative"
    >
      <SfIcon
        :key="`n${index}`"
        size="14px"
        class="sf-rating__icon-negative"
        icon="star"
      />
    </slot>
  </div>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
export default {
  name: "SfRating",
  components: {
    SfIcon
  },
  props: {
    /**
     * Maximum score
     */
    max: {
      type: Number,
      default: 5
    },
    /**
     * Score (obviously must be less than maximum)
     */
    score: {
      type: Number,
      default: 1
    }
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
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfRating.scss";
</style>
