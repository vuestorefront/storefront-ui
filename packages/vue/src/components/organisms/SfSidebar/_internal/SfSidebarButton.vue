<template>
  <div>
    <slot>
      <SfButton
        link="#sidebar"
        class="sf-sidebar__button"
        @click="() => this.$emit('click:open')"
      >
        Open
      </SfButton>
    </slot>
  </div>
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
