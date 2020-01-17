<template>
  <div class="sf-arrow">
    <button
      class="sf-arrow__button"
      type="button"
      :aria-label="ariaLabel"
      v-on="$listeners"
    >
      <!--@slot Use this slot to replace arrow icon-->
      <slot>
        <svg
          class="sf-arrow__icon"
          viewBox="0 0 24 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          aria-hidden="true"
        >
          <path d="M24 7L2 7L2 5L24 5L24 7Z" />
          <path
            d="M6.61667 1.20934e-07L8 1.25423L2.76478 6L8 10.7458L6.61667 12L-5.24538e-07 5.99998L6.61667 1.20934e-07Z"
          />
        </svg>
      </slot>
    </button>
  </div>
</template>
<script>
export default {
  name: "SfArrow",
  props: {
    ariaLabel: {
      type: String,
      default: "Arrow"
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfArrow.scss";
</style>
