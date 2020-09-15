<template>
  <SfButton
    class="sf-address sf-button--pure"
    :class="selected ? 'is-selected' : ''"
    @click="toggleSelected"
  >
    <slot />
    <SfCheckbox v-model="selected" class="sf-address__checkbox" />
  </SfButton>
</template>
<script>
import SfCheckbox from "../SfCheckbox/SfCheckbox.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
export default {
  name: "SfAddress",
  components: {
    SfCheckbox,
    SfButton,
  },
  data() {
    return {
      selected: false,
    };
  },
  methods: {
    toggleSelected() {
      this.selected = !this.selected;
      this.$emit("change", this.selected);
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfAddress.scss";
</style>
