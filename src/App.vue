<template>
  <div id="app">
    <SfAlert
      class="sf-alert--warning"
      message="wiadomość przez propsa i slote-scope"
    >
    </SfAlert>
    <SfAlert
      class="sf-alert--info"
      message="wiadomość przez propsa i slote-scope"
    >
    </SfAlert>
    <SfAlert
      class="sf-alert--alert"
      message="wiadomość przez propsa i slote-scope"
    >
    </SfAlert>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SfAlert from "./components/atoms/SfAlert/SfAlert.vue";

export default Vue.extend({
  name: "app",
  data() {
    return {
      b: "a"
    };
  },
  components: {
    SfAlert
  }
});
</script>

<style lang="scss">
@import "./css/variables.scss";
@import "./css/globals.scss";
</style>
