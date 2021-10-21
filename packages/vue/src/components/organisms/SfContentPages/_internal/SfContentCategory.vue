<template>
  <div class="sf-content-category">
    <slot />
  </div>
</template>
<script>
export default {
  name: "SfContentCategory",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    const item = {
      title: this.title,
      items: this.items,
    };
    this.$parent.items.push(item);
  },
  methods: {},
};
</script>
