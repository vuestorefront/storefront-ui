<template>
  <div
    :class="{ 'is-active': $parent.isActive === title }"
    class="sf-mega-menu-column"
  >
    <slot name="title" v-bind="{ title }">
      <SfMenuItem
        :label="title"
        class="sf-mega-menu-column__header"
        @click="$parent.isActive = title"
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
};
</script>
