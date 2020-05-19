<template>
  <div class="sf-mega-menu-column">
    <h3 class="sf-mega-menu-column__title">{{ title }}</h3>
    <slot />
  </div>
</template>
<script>
export default {
  name: "SfMegaMenuColumn",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
