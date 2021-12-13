<template>
  <SfRadio v-model="selected" class="sf-address" :value="name" name="groupName">
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
  inject: ["getSelectedValue", "setSelectedValue"],
  computed: {
    selected: {
      get() {
        return this.getSelectedValue();
      },
      set(newValue) {
        this.setSelectedValue(newValue);
      },
    },
  },
};
</script>
