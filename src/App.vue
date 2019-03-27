<template>
  <div id="app">
    <div style="display: flex; ">
      <SfBanner class="sf-banner--right">
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
        <template slot="button">
          shop now
        </template>
      </SfBanner>
    </div>
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
