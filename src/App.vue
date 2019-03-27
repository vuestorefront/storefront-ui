<template>
  <div id="app">
    <h1>It's a heading</h1>
    <custom-button class="sf-button--secondary">Text</custom-button>
    <sf-button>Text</sf-button>
    <sf-bottom-navigation></sf-bottom-navigation>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CustomButton from "./CustomButton.vue";
import SfButton from "./components/atoms/SfButton/SfButton.vue";
import SfBanner from "./components/molecules/SfBanner/SfBanner.vue";
import SfBottomNavigation from "./components/organisms/SfBottomNavigation/SfBottomNavigation.vue";

export default Vue.extend({
  name: "app",
  components: {
    SfButton,
    CustomButton,
    SfBottomNavigation
  }
});
</script>

<style lang="scss">
@import "./css/variables.scss";
@import "./css/globals.scss";
</style>
