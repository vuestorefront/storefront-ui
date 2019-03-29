<template>
  <div id="app">
    <SfAlert type="warning" message="message"></SfAlert>
    <SfAlert
      icon="https://findicons.com/files/icons/1743/ecqlipse/128/attachment.png"
      type="info"
      message="message"
    >
    </SfAlert>
    <SfAlert :icon="false" type="alert" message="message"> </SfAlert>
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
