<template>
  <div id="app">
    <SfAlert message="warning"></SfAlert>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SfBanner from "./components/molecules/SfBanner/SfBanner.vue";
import SfAlert from "./components/atoms/SfAlert/SfAlert.vue";

export default Vue.extend({
  name: "app",
  components: {
    SfAlert
  }
});
</script>

<style lang="scss">
@import "./css/all.scss";
</style>
