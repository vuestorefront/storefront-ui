<template>
  <div class="sf-step">
    <slot v-if="active" :index="index"></slot>
  </div>
</template>
<script>
export default {
  name: "SfStep",
  inject: ["stepsData"],
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  computed: {
    internalName() {
      if (this.stepsData) {
        return this.stepsData.name;
      }
      return null;
    },
    index() {
      if (this.stepsData) {
        return this.stepsData.index;
      }
      return null;
    },
    active() {
      return this.internalName === this.name;
    },
  },
  created() {
    this.stepsData.updateSteps(this.name);
  },
};
</script>
