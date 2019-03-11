<template>
  <div id="app">
    <sf-header />
    <sf-button />
    <sf-banner />
    <sf-bottom-navigation />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SfButton from "./components/Button/Button.vue";
import SfBanner from "./components/Banner/Banner.vue";
import SfBottomNavigation from "./components/BottomNavigation/BottomNavigation.vue";
import SfHeader from "./components/Header/Header.vue";

export default Vue.extend({
  name: "app",
  components: {
    SfButton,
    SfBanner,
    SfBottomNavigation,
    SfHeader
  }
});
</script>

<style lang="scss">
@import "~./css/globals";
@import "./css/helpers/visibility";
</style>
