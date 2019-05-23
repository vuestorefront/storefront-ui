<template>
  <div v-if="isActive">
    <slot />
  </div>
</template>
<script>
export const TAB_COMPONENT_NAME = "SfTab";

export default {
  name: TAB_COMPONENT_NAME,
  inject: ["sharedState"],
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: [Number, String],
      required: false
    }
  },
  computed: {
    isActive() {
      return this.valueComputed === this.sharedState.activeTab;
    },
    valueComputed() {
      return this.value || this._uid;
    }
  }
};
</script>
