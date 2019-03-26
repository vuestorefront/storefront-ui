<template>
  <div id="app">
    <SfBanner>
      <template slot="title">
        ECO SANDALS
      </template>
      <template slot="subtitle">
        Summer shoes
      </template>
      <template slot="description">
        The collection features formal and casual comfort shoes with a Danish
        design focus. Made from premium leathers and comfort.
      </template>
      <template class="sf-banner__call-to-action" slot="call-to-action">
        shop now
      </template>
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
