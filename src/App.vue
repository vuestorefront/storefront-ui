<template>
  <div id="app">
    <sf-banner
      title="Lorem ipsum"
      subtitle="Lorem ipsum"
      button-text="Lorem ipsum"
    >
      <template slot="call-to-action">
        Example replaced content
      </template>
    </sf-banner>
    <sf-header />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SfBanner from "./components/molecules/SfBanner/SfBanner.vue";
import SfHeader from "./components/organisms/SfHeader/SfHeader.vue";

export default Vue.extend({
  name: "app",
  components: {
    SfBanner,
    SfHeader
  }
});
</script>

<style lang="scss">
@import "./css/variables.scss";
@import "./css/globals.scss";
</style>
