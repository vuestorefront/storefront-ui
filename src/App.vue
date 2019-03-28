<template>
  <div id="app">
    <SfBanner
      title="Lorem ipsum"
      subtitle="Lorem ipsum"
      button-text="Lorem ipsum"
    >
      <template slot="call-to-action">
        Example
      </template>
    </SfBanner>
    <SfCircleButton></SfCircleButton>
    <SfButton></SfButton>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SfBanner from "./components/molecules/SfBanner/SfBanner.vue";
import SfCircleButton from "./components/atoms/SfCircleButton/SfCircleButton.vue";

export default Vue.extend({
  name: "app",
  components: {
    SfCircleButton,
    SfButton,
    SfBanner
  }
});
</script>

<style lang="scss">
@import "./css/variables.scss";
@import "./css/globals.scss";
</style>
