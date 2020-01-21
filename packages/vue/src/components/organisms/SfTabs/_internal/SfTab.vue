<template>
  <Fragment class="sf-tabs__tab">
    <div
      class="sf-tabs__title"
      :class="{ 'sf-tabs__title--active': isActive }"
      @click="tabClick"
    >
      {{ title }}
      <div class="sf-tabs__chevron">
        <SfChevron :class="{ 'sf-chevron--top': isActive }" />
      </div>
    </div>
    <div class="sf-tabs__content">
      <!--@slot Default. Here you should pass your tab content-->
      <slot></slot>
    </div>
  </Fragment>
</template>
<script>
import { Fragment } from "vue-fragment";
import SfChevron from "../../../atoms/SfChevron/SfChevron.vue";
export default {
  name: "SfTab",
  components: {
    Fragment,
    SfChevron
  },
  props: {
    /**
     * Tab title.
     */
    title: {
      type: String,
      default: "MenuItem"
    }
  },
  data() {
    return {
      isActive: false,
      desktopMin: 1024
    };
  },
  methods: {
    tabClick() {
      if (typeof window === "undefined" || typeof document === "undefined")
        return;
      const width = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth
      );
      if (this.isActive && width > this.desktopMin) return;
      this.$parent.$emit("toggle", this._uid);
    }
  }
};
</script>
<style>
.slide-left-enter-active {
  -webkit-animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.slide-left-leave-active {
  -webkit-animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
    reverse;
  animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both reverse;
}
@keyframes slide-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
