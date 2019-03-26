<template>
  <div id="app">
    <SfBanner style="background-image: url('Banner1.png')">
      <div slot="title">ECO SANDALS</div>
      <div slot="subtitle">Summer shoes</div>
      <div slot="description">
        The collection features formal and casual comfort shoes with a Danish
        design focus. Made from premium leathers and comfort.
      </div>
      <template slot="call-to-action"
        >shop now</template
      >
    </SfBanner>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SfButton from "./components/atoms/SfButton/SfButton.vue";
import SfBanner from "./components/molecules/SfBanner/SfBanner.vue";

export default Vue.extend({
  name: "app",
  components: {
    SfBanner
  }
});
</script>

<style lang="scss">
@import "./css/variables.scss";
@import "./css/globals.scss";
</style>
