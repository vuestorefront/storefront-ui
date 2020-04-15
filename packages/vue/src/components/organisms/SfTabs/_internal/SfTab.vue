<template>
  <Fragment class="sf-tabs__tab">
    <!--@slot Title. Here you should pass a title tab-->
    <slot name="title" v-bind="{ tabClick, isActive, title }">
      <div
        role="button"
        :aria-pressed="isActive.toString()"
        class="sf-tabs__title"
        :class="{ 'sf-tabs__title--active': isActive }"
        @click="tabClick"
      >
        {{ title }}
        <SfChevron
          class="sf-tabs__chevron"
          :class="{ 'sf-chevron--right': !isActive }"
        />
      </div>
    </slot>
    <div class="sf-tabs__content">
      <div v-if="isActive" class="sf-tabs__content__tab">
        <!--@slot Default. Here you should pass your tab content -->
        <slot />
      </div>
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
    SfChevron,
  },
  props: {
    /**
     * Tab title.
     */
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isActive: false,
      desktopMin: 1024,
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
    },
  },
};
</script>
