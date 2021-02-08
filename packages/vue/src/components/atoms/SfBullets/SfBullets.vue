<template>
  <ol class="sf-bullets">
    <template v-for="(_, index) of inactiveLeft">
      <!--@slot custom icon for inactive bullet -->
      <slot name="inactive" class="sf-bullet" v-bind="{ index, go }">
        <li :key="index">
          <SfButton
            :aria-label="'Go to slide ' + (index + 1)"
            class="sf-button--pure sf-bullet"
            :data-testid="index + 1"
            @click="go(index)"
          ></SfButton>
        </li>
      </slot>
    </template>
    <!--@slot custom icon for active bullet -->
    <slot name="active">
      <li>
        <SfButton
          aria-label="Current slide"
          class="sf-button--pure sf-bullet is-active"
        ></SfButton>
      </li>
    </slot>
    <template v-for="(_, index) of inactiveRight">
      <!--@slot custom icon for inactive bullet -->
      <slot
        name="inactive"
        class="sf-bullet"
        v-bind="{ index: inactiveLeft + 1 + index, go }"
      >
        <li :key="inactiveLeft + 1 + index">
          <SfButton
            :aria-label="'Go to slide ' + (inactiveLeft + 2 + index)"
            class="sf-button--pure sf-bullet"
            :data-testid="inactiveLeft + 1 + index"
            @click="go(inactiveLeft + 1 + index)"
          ></SfButton>
        </li>
      </slot>
    </template>
  </ol>
</template>
<script>
import SfButton from "../SfButton/SfButton.vue";
export default {
  name: "SfBullets",
  components: {
    SfButton,
  },
  props: {
    /**
     * Number of bullets in total (active + inactive)
     */
    total: {
      type: Number,
      default: 0,
    },
    /**
     * Index of the currently active bullet (0-indexed)
     */
    current: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    inactiveRight() {
      return this.total - 1 - this.current;
    },
    inactiveLeft() {
      return this.total - this.inactiveRight - 1;
    },
  },
  methods: {
    go(index) {
      this.$emit("click", index);
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfBullets.scss";
</style>
