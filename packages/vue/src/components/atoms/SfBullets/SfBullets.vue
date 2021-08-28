<template>
  <ol class="sf-bullets" v-bind="$attrs">
    <template v-for="(_, index) of $options.inactiveLeft(total, current)">
      <!--@slot custom icon for inactive bullet -->
      <slot name="inactive" class="sf-bullet" v-bind="{ index, $options }">
        <li :key="index">
          <component
            :is="components.SfButton"
            class="sf-button--pure sf-bullet"
            type="button"
            :aria-label="'Go to slide ' + (index + 1)"
            :data-testid="index + 1"
            @click="$attrs.listeners.click && $attrs.listeners.click(index)"
          ></component>
        </li>
      </slot>
    </template>
    <!--@slot custom icon for active bullet -->
    <slot name="active">
      <li>
        <component
          :is="components.SfButton"
          v-bind="$attrs"
          aria-label="Current slide"
          class="sf-button--pure sf-bullet is-active"
        ></component>
      </li>
    </slot>
    <template v-for="(_, index) of $options.inactiveRight(total, current)">
      <!--@slot custom icon for inactive bullet -->
      <slot
        name="inactive"
        class="sf-bullet"
        v-bind="{
          index: $options.inactiveLeft(total, current) + 1 + index,
          $options,
        }"
      >
        <li :key="$options.inactiveLeft(total, current) + 1 + index">
          <component
            :is="components.SfButton"
            :aria-label="
              'Go to slide ' +
              ($options.inactiveLeft(total, current) + 2 + index)
            "
            class="sf-button--pure sf-bullet"
            :data-testid="$options.inactiveLeft(total, current) + 1 + index"
            @click="
              listeners.click &&
                listeners.click(
                  $options.inactiveLeft(total, current) + 1 + index
                )
            "
          ></component>
        </li>
      </slot>
    </template>
  </ol>
</template>
<script>
import SfButton from "../SfButton/SfButton.vue";
export default {
  name: "SfBullets",
  inject: {
    components: {
      default: { SfButton },
    },
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
  inactiveRight(total, current) {
    return total - 1 - current;
  },
  inactiveLeft(total, current) {
    return total - (total - 1 - current) - 1;
  },
  go(listeners, index) {
    listeners.click && listeners.click(index);
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfBullets.scss";
</style>
