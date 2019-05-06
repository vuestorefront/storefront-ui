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
import "@/utilities/transitions/transitions.scss";

// TODO: Make it groupable
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: this.open
    };
  },
  watch: {
    open: function(val) {
      this.isOpen = val;
    }
  }
};
</script>

<style>
.sf-accordion__label:hover {
  cursor: pointer;
}
</style>
