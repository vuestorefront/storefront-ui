<template>
  <div id="app">
    <sf-banner
      title="Lorem ipsum"
      subtitle="Lorem ipsum,"
      button-text="Lorem ipsum"
    >
      <template v-slot:subtitle="{ subtitle }">
        Example replaced content {{ b }} {{ subtitle }}
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
  data() {
    return {
      b: "a"
    };
  },
  components: {
    SfBanner,
    SfHeader
  }
});
</script>

<style lang="scss">
@import "./css/styles.scss";
</style>
