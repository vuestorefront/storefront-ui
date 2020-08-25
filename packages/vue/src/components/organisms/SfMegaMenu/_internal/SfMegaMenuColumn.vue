<template>
  <div :class="{ 'is-active': active === title }" class="sf-mega-menu-column">
    <slot name="title" v-bind="{ title, changeActive: megaMenu.changeActive }">
      <SfMenuItem
        :label="title"
        class="sf-mega-menu-column__header"
        @click="megaMenu.changeActive(title)"
      />
    </slot>
    <div class="sf-mega-menu-column__content">
      <slot />
    </div>
  </div>
</template>
<script>
import SfMenuItem from "../../../molecules/SfMenuItem/SfMenuItem.vue";
export default {
  name: "SfMegaMenuColumn",
  components: {
    SfMenuItem,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  inject: ["megaMenu"],
  computed: {
    active() {
      return this.megaMenu.active;
    },
  },
};
</script>
