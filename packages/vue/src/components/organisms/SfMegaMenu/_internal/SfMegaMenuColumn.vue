<template>
  <div v-if="isActive" class="sf-mega-menu-column">
    <!-- @slot Custom title markup -->
    <slot name="title" v-bind="{ title }">
      <h3 class="sf-mega-menu-column__title">{{ title }}</h3>
    </slot>
    <!-- @slot Column markup -->
    <slot />
  </div>
</template>
<script>
export default {
  name: "SfMegaMenuColumn",
  inject: ["megaMenu"],
  props: {
    /**
     * Column title
     */
    title: {
      type: String,
      default: ""
    }
  },
  computed: {
    isActive() {
      return this.megaMenu.active.includes(this.title);
    }
  },
  mounted() {
    this.megaMenu.updateItems(this.title);
  }
};
</script>
