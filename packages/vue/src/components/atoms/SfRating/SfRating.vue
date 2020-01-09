<template>
  <div class="sf-rating">
    <!--@slot custom icon for finalScore. Provide single icon that will be automatically repeated -->
    <slot v-for="index in parseInt(finalScore, 10)" name="icon-positive">
      <svg
        :key="`p${index}`"
        width="14"
        height="14"
        viewBox="0 0 11 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.5 0L6.73483 3.80041H10.7308L7.49799 6.14919L8.73282 9.94959L5.5 7.60081L2.26718 9.94959L3.50201 6.14919L0.269189 3.80041H4.26517L5.5 0Z"
          class="sf-rating__icon-positive"
        />
      </svg>
    </slot>
    <!--@slot custom icon for negative (left) finalScore. Provide single icon that will be automatically repeated -->
    <slot
      v-for="index in parseInt(finalMax, 10) - parseInt(finalScore, 10)"
      name="icon-negative"
    >
      <svg
        :key="`n${index}`"
        width="14"
        height="14"
        viewBox="0 0 11 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.5 0L6.73483 3.80041H10.7308L7.49799 6.14919L8.73282 9.94959L5.5 7.60081L2.26718 9.94959L3.50201 6.14919L0.269189 3.80041H4.26517L5.5 0Z"
          class="sf-rating__icon-negative"
        />
      </svg>
    </slot>
  </div>
</template>
<script>
export default {
  name: "SfRating",
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
