<template functional>
  <ol
    :class="[data.class, data.staticClass, 'sf-bullets']"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
  >
    <template
      v-for="(_, index) of $options.inactiveLeft(props.total, props.current)"
    >
      <slot name="inactive" class="sf-bullet" v-bind="{ index, $options }">
        <li :key="index">
          <component
            :is="injections.components.SfButton"
            class="sf-button--pure sf-bullet"
            type="button"
            :aria-label="'Go to slide ' + (index + 1)"
            :data-testid="'bullet-' + (index + 1)"
            @click="listeners.click && listeners.click(index)"
          ></component>
        </li>
      </slot>
    </template>
    <slot name="active">
      <li>
        <component
          :is="injections.components.SfButton"
          v-bind="data.attrs"
          :aria-label="'Current slide'"
          class="sf-button--pure sf-bullet is-active"
        ></component>
      </li>
    </slot>
    <template
      v-for="(_, index) of $options.inactiveRight(props.total, props.current)"
    >
      <slot
        name="inactive"
        class="sf-bullet"
        v-bind="{
          index: $options.inactiveLeft(props.total, props.current) + 1 + index,
          $options,
        }"
      >
        <li
          :key="$options.inactiveLeft(props.total, props.current) + 1 + index"
        >
          <component
            :is="injections.components.SfButton"
            :aria-label="
              'Go to slide ' +
              ($options.inactiveLeft(props.total, props.current) + 2 + index)
            "
            class="sf-button--pure sf-bullet"
            :data-testid="
              'bullet-' +
              $options.inactiveLeft(props.total, props.current) +
              (2 + index)
            "
            @click="
              listeners.click &&
                listeners.click(
                  $options.inactiveLeft(props.total, props.current) + 1 + index
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
    total: {
      type: Number,
      default: 3,
    },
    current: {
      type: Number,
      default: 0,
    },
  },
  inactiveRight(total, current) {
    if (current >= total) {
      console.warn(
        "Wrong value for the 'current' prop. This prop cannot be greater than or equal the 'total' value prop"
      );
      return total - 1;
    } else {
      return total - 1 - current;
    }
  },
  inactiveLeft(total, current) {
    if (current >= total) {
      console.warn(
        "Wrong value for the 'current' prop. This prop cannot be greater than or equal the 'total' value prop"
      );
      return total - (total - 1) - 1;
    } else {
      return total - (total - 1 - current) - 1;
    }
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfBullets.scss";
</style>
