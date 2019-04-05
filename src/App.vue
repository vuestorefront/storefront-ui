<template>
  <div id="app">
    <SfButton>a</SfButton>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SfButton from "./components/atoms/SfButton/SfButton.vue";
import SfBanner from "./components/molecules/SfBanner/SfBanner.vue";
import SfAlert from "./components/atoms/SfAlert/SfAlert.vue";

export default Vue.extend({
  name: "app",
  components: {
    SfButton
  }
});
</script>

<style lang="scss">
@import "./css/all.scss";
</style>
