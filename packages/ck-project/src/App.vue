<template>
  <div id="app">
    <CkNav />
    <CkHome />
    <CkBottomNav />
  </div>
</template>

<script>
import CkHome from "./components/CkHome.vue";
import CkNav from "./components/CkNav.vue";
import CkBottomNav from "./components/CkBottomNav.vue";

export default {
  name: "App",
  components: {
    CkHome,
    CkNav,
    CkBottomNav,
  },
};
</script>

<style lang="scss">
// @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;900&display=swap');
@import "@storefront-ui/vue/styles.scss";
@import "./assets/main.scss";

* {
  margin: 0;
  box-sizing: border-box;
  font-family: var(--font-family-primary);
}

#app {
  // --font-family-primary: 'Montserrat', sans-serif;
  // --font-family-secondary: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
