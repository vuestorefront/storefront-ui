<template>
  <div class="sf-accordion__item">
    <span class="sf-accordion__label" @click="isOpen = !isOpen">
      <slot name="label" />
    </span>
    <transition name="fade">
      <span v-if="isOpen">
        <slot name="content" />
      </span>
    </transition>
  </div>
</template>

<script>
import "../../../../utilities/transitions/transitions.scss";

// TODO: Enable real accordion behavior with only one item open. get rid of open property
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
