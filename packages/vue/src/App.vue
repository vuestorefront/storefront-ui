<template>
  <div id="app">
    <Playground />
  </div>
</template>
<script>
import { defineComponent } from "vue";
// If you don;t have this file run `yarn` cmd to create it
import Playground from "./Playground.vue";
export default defineComponent({
  // name: "App",
  components: {
    Playground,
  },
});
</script>
<style lang="scss">
@import "./css/all.scss";
</style>
