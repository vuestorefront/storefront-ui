<template>
  <ol class="sf-bullets">
    <template v-for="(_, index) of inactiveLeft">
      <!--@slot custom icon for inactive bullet -->
      <slot name="inactive" class="sf-bullet" v-bind="{ index, go }">
        <li :key="index">
          <button class="sf-bullet" @click="go(index)"></button>
        </li>
      </slot>
    </template>
    <!--@slot custom icon for active bullet -->
    <slot name="active">
      <li>
        <button class="sf-bullet sf-bullet--active"></button>
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
          <button
            class="sf-bullet"
            @click="go(inactiveLeft + 1 + index)"
          ></button>
        </li>
      </slot>
    </template>
  </ol>
</template>
<script>
export default {
  name: "SfBullets",
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
