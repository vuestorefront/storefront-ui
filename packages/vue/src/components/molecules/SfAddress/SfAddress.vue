<template>
  <SfRadio
    v-model="selected"
    class="sf-address"
    :class="{
      'is-selected': selected,
    }"
    :value="selectedValue"
    :name="selectedValue"
    @input="selectValue"
  >
    <template #label>
      <slot />
    </template>
    <template #checkmark>
      <slot name="icon">
        <div class="sf-address__icon-container">
          <SfIcon icon="check" class="sf-address__icon" />
        </div>
      </slot>
    </template>
  </SfRadio>
</template>
<script>
import SfRadio from "../SfRadio/SfRadio.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";

export default {
  name: "SfAddress",
  components: {
    SfRadio,
    SfIcon,
  },
  props: {
    valueName: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selected: "",
      selectedValue: this.valueName,
    };
  },
  methods: {
    selectValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfAddress.scss";
</style>
