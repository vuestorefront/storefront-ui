<template>
  <div>
    <span class="sf-accordion__label" @click="isOpen = !isOpen">
      <slot name="label" />
    </span>
    <transition name="fade">
      <template v-if="isOpen">
        <slot name="content" />
      </template>
    </transition>
  </div>
</template>

<script>
// TODO: Make it groupable
export default {
  props: {
    group: {
      type: String,
      default: ""
    },
    initiallyOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  mounted() {
    if (this.initiallyOpen) this.isOpen = true;
  }
};
</script>

<style>
@import "~@/utilities/transitions/transitions.scss";

.sf-accordion__label:hover {
  cursor: pointer;
}
</style>
