<template>
  <SfMenuItem
    :label="label"
    :icon="icon"
    :count="count"
    class="sf-mega-menu__menu-item"
  >
    <slot />
  </SfMenuItem>
</template>

<script>
import SfMenuItem from "../../../molecules/SfMenuItem/SfMenuItem.vue";
export default {
  name: "SfMegaMenuItem",
  components: { SfMenuItem },
  props: {
    label: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: "chevron_right"
    },
    count: {
      type: [String, Number],
      default: ""
    }
  }
};
</script>
