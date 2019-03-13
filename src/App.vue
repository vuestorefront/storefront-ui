<template>
  <div id="app">
    <h1>It's a heading</h1>
    <custom-button class="sf-button--secondary">Text</custom-button>
    <sf-button class="sf-button--secondary">Text</sf-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CustomButton from "./CustomButton.vue";
import SfButton from "./components/SfButton/SfButton.vue";

export default Vue.extend({
  name: "app",
  components: {
    SfButton,
    CustomButton
  }
});
</script>

<style lang="scss"></style>
