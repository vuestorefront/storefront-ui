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
  </div>
</template>

<script lang="ts">
import Vue from "vue";
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
