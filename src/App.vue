<template>
  <div id="app">
    <SfButton></SfButton>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SfButton from "./components/atoms/SfButton/SfButton.vue";

export default Vue.extend({
  name: "app",
  components: {
    SfButton
  }
});
</script>

<style lang="scss">
@import "./css/variables.scss";
@import "./css/globals.scss";
</style>
