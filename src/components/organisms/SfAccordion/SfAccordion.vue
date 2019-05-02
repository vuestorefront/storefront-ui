<template>
  <div>
    <span class="sf-accordion__label" @click="isOpen = !isOpen">
      <slot name="label" />
    </span>
    <template v-if="isOpen">
      <transition name="fade">
        <slot name="content" />
      </transition>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<style>
@import "~@/utilities/transitions/transitions.scss";

.sf-accordion__label:hover {
  cursor: pointer;
}
</style>
