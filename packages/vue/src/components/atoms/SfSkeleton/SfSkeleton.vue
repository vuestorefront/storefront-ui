<template>
  <div class="sf-skeleton" :class="classFromProps">
    <slot />
  </div>
</template>
<script>
export default {
  name: "SfSkeleton",
  props: {
    type: {
      type: String,
      default: "paragraph",
      validator: (value) => ["paragraph", "image", "button", "input", "avatar"],
    },
  },
  computed: {
    classFromProps() {
      return `sf-skeleton--${this.type}`;
    },
  },
};
</script>
<style lang="scss" src="./SfSkeleton.scss"></style>
