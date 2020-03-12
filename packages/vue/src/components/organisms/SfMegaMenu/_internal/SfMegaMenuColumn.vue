<template>
  <div v-if="isActive" class="sf-mega-menu-column">
    <!-- @slot Custom title markup -->
    <SfMenuItem :title="title" />
    <!-- @slot Column markup -->
    <slot />
  </div>
</template>
<script>
import SfMenuItem from "../../../molecules/SfMenuItem/SfMenuItem.vue";

export default {
  name: "SfMegaMenuColumn",
  components: {
    SfMenuItem
  },
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
