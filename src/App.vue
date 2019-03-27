<template>
  <div id="app">
    <!-- <h1>It's a heading</h1>
    <custom-button class="sf-button--secondary">Text</custom-button>
    <sf-button>Text</sf-button> -->
    <sf-mega-menu>
      Hello World, Mega Menu!
    </sf-mega-menu>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import CustomButton from "./CustomButton.vue";
// import SfButton from "./components/atoms/SfButton/SfButton.vue";
// import SfBanner from "./components/molecules/SfBanner/SfBanner.vue";
import SfMegaMenu from "./components/organisms/SfMegaMenu/SfMegaMenu.vue";

export default Vue.extend({
  name: "app",
  components: {
    SfMegaMenu
    // SfButton,
    // CustomButton
  }
});
</script>

<style lang="scss">
@import "./css/variables.scss";
@import "./css/globals.scss";
</style>
