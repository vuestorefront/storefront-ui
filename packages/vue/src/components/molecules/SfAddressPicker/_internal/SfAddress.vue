<template>
  <SfRadio
    v-model="$parent.selected"
    class="sf-address"
    :value="name"
    name="addressPicker"
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
import SfRadio from "../../SfRadio/SfRadio.vue";
import SfIcon from "../../../atoms/SfIcon/SfIcon.vue";

export default {
  name: "SfAddressPicker",
  components: {
    SfRadio,
    SfIcon,
  },
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selected: "",
    };
  },
  methods: {
    toggle() {
      if (this.$parent.selected === this.name) {
        return;
      } else {
        this.$parent.selected = this.name;
      }
    },
  },
};
</script>
