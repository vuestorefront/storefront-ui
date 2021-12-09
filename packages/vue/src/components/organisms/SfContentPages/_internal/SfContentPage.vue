<template>
  <div :class="{ 'display-none': !isActive }" class="sf-content-page">
    <slot />
  </div>
</template>
<script>
export default {
  name: "SfContentPage",
  props: {
    title: {
      type: String,
      default: "",
    },
    icon: {
      type: [String, Array],
      default: "",
    },
  },
  inject: ["provided"],
  computed: {
    isActive() {
      return this.provided.active.toLowerCase() === this.title.toLowerCase();
    },
  },
  mounted() {
    const item = {
      title: this.title,
      icon: this.icon,
    };
    this.$parent.items.push(item);
  },
};
</script>
