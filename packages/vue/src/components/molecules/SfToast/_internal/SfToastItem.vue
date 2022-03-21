<template>
  <transition :name="$parent.transition" appear>
    <slot v-bind="{ message }">
      <output
        role="status"
        class="sf-toast__item"
        :class="[`color-${type}`, `sf-toast__item--${$parent.position}`]"
      >
        {{ message }}
      </output>
    </slot>
  </transition>
</template>

<script>
export default {
  name: "SfToastItem",
  props: {
    message: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "secondary",
      validator: function (value) {
        return ["secondary", "info", "success", "warning", "danger"].includes(
          value
        );
      },
    },
  },
};
</script>
