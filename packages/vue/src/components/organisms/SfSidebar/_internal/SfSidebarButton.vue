<template>
  <label for="toggler">
    <slot>
      <SfButton class="sf-sidebar__button"> Open </SfButton>
    </slot>
  </label>
</template>
<script>
import SfButton from "../../../atoms/SfButton/SfButton";
export default {
  name: "SfSidebarButton",
  components: {
    SfButton,
  },
};
</script>
