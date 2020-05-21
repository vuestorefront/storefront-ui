<template>
  <transition name="fade">
    <div
      v-show="visible"
      class="sf-mega-menu"
      :class="{ 'is-active': isActive }"
    >
      <SfBar
        :title="title"
        :back="isActive"
        class="sf-mega-menu__bar"
        @click:back="isActive = ''"
      />
      <div class="sf-mega-menu__content">
        <div class="sf-mega-menu__menu">
          <!-- @slot Slot for menu column -->
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import Vue from "vue";
import SfMegaMenuColumn from "./_internal/SfMegaMenuColumn.vue";
Vue.component("SfMegaMenuColumn", SfMegaMenuColumn);
import SfBar from "../../molecules/SfBar/SfBar.vue";
export default {
  name: "SfMegaMenu",
  components: {
    SfBar,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    visible: {
      type: Boolean,
      default: false,
    },
    /**
     * @deprecated will be removed in 1.0.0
     */
    asideTitle: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isActive: "",
    };
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfMegaMenu.scss";
</style>
