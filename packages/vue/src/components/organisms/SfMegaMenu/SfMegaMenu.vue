<template>
  <transition :name="transitionName">
    <div
      v-show="visible"
      class="sf-mega-menu"
      :class="[{ 'is-active': active }, { 'is-absolute': isAbsolute }]"
    >
      <slot name="menubar">
        <SfBar
          :title="active || title"
          :back="true"
          class="sf-mega-menu__bar"
          @click:back="back"
          @click:close="close"
        />
      </slot>
      <div class="sf-mega-menu__content">
        <div class="sf-mega-menu__menu">
          <slot />
        </div>
        <div
          :class="{ 'display-none': !$slots.aside }"
          class="sf-mega-menu__aside"
        >
          <!-- @slot @deprecated will be removed in 1.0.0 -->
          <SfMenuItem
            :label="asideTitle"
            class="sf-mega-menu__aside-header desktop-only"
          />
          <slot name="aside" />
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
import SfMenuItem from "../../molecules/SfMenuItem/SfMenuItem";
export default {
  name: "SfMegaMenu",
  components: {
    SfBar,
    SfMenuItem,
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
    isAbsolute: {
      type: Boolean,
      default: false,
    },
    transitionName: {
      type: String,
      default: "sf-fade",
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
      active: "",
    };
  },
  provide() {
    const megaMenu = {};
    Object.defineProperty(megaMenu, "active", {
      get: () => this.active,
    });
    Object.defineProperty(megaMenu, "changeActive", {
      value: this.changeActive,
    });
    return { megaMenu };
  },
  methods: {
    changeActive(payload) {
      this.active = payload;
      this.$emit("change", payload);
    },
    back() {
      if (!this.active) {
        this.$emit("close");
      }
      this.active = "";
    },
    close() {
      if (!this.active) {
        this.$emit("close");
      }
      this.active = "";
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfMegaMenu.scss";
</style>
