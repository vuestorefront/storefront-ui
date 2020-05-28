<template>
  <div id="app">
    <Playground />
  </div>
</template>
<script>
// If you don;t have this file run `yarn` cmd to create it
import Playground from "./Playground.vue";
export default {
  name: "App",
  components: {
    Playground,
  },
};
</script>
<style lang="scss">
@import "./css/all.scss";
</style>
