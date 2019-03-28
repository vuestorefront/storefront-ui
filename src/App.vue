<template>
  <div id="app">
    <SfAlert class="sf-alert--warning"></SfAlert>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SfAlert from "./components/atoms/SfAlert/SfAlert.vue";

export default Vue.extend({
  name: "app",
  components: {
    SfAlert
  }
});
</script>

<style lang="scss">
@import "./css/variables.scss";
@import "./css/globals.scss";
</style>
