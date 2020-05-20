<template>
  <div
    v-if="$parent.open === title || !this.hasChildren"
    class="sf-mega-menu-column"
    :class="{ 'has-children': hasChildren }"
  >
    <slot name="title" v-bind="{ hasTitle: !hasChildren }">
      <h3 v-if="!hasChildren" class="sf-mega-menu-column__title">
        {{ title }}
      </h3>
    </slot>
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
  data() {
    return {
      columns: {},
    };
  },
  computed: {
    hasChildren() {
      return Object.keys(this.columns).length > 0;
    },
  },
  mounted() {
    const title = this.title;
    const columns = { ...this.$parent.columns, [this.title]: this.columns };
    this.$parent.columns = columns;
  },
};
</script>
