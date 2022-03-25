<template>
  <transition
    :name="$parent.transition"
    appear
    @after-enter="hide"
    @after-leave="leave"
  >
    <output
      v-if="isVisible"
      role="status"
      class="sf-toast__item"
      :class="[`color-${type}`, `sf-toast__item--${$parent.position}`]"
    >
      <slot v-bind="{ message }">
        {{ message }}
      </slot>
    </output>
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
  data() {
    return {
      isVisible: true,
    };
  },
  beforeDestroy() {
    this.$el.remove();
  },
  methods: {
    hide() {
      setTimeout(() => {
        this.isVisible = false;
      }, this.$parent.duration);
    },
    leave() {
      this.$destroy();
    },
  },
};
</script>
