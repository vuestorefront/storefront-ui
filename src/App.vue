<template>
  <div id="app">
    <vsf-header />
    <vsf-button />
    <vsf-banner />
    <vsf-bottom-navigation />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import VsfButton from './components/Button/Button.vue'
import VsfBanner from './components/Banner/Banner.vue'
import VsfBottomNavigation from './components/BottomNavigation/BottomNavigation.vue'
import VsfHeader from './components/Header/Header.vue'

export default Vue.extend({
  name: "app",
  components: {
    VsfButton,
    VsfBanner,
    VsfBottomNavigation,
    VsfHeader
  }
});
</script>

<style lang="scss">
@import '~./css/globals';
@import './css/helpers/visibility';
</style>
