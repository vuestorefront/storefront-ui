<template>
  <div class="sf-loader" v-bind="$attrs">
    <transition name="sf-fade" mode="out-in">
      <!--@slot Slot for the actual content being loaded -->
      <slot v-if="!loading"></slot>
      <div v-else class="sf-loader__overlay">
        <!--@slot Use this slot to replace the loader -->
        <slot name="loader">
          <svg
            role="img"
            width="38"
            height="38"
            viewBox="0 0 38 38"
            xmlns="http://www.w3.org/2000/svg"
            class="sf-loader__spinner"
          >
            <title>Loading...</title>
            <g fill="none" fill-rule="evenodd">
              <g transform="translate(1 1)" stroke-width="2">
                <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                <path d="M36 18c0-9.94-8.06-18-18-18">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            </g>
          </svg>
        </slot>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "SfLoader",
  props: {
    /**
     * Shows the loader on top of the existing content
     */
    loading: {
      default: true,
      type: Boolean,
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfLoader.scss";
</style>
