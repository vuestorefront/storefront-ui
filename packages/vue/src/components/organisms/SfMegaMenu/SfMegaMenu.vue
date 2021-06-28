<template>
  <transition :name="transitionName">
    <div>
      <!-- <div
        v-show="visible && !multilevel"
        class="sf-mega-menu"
        :class="[{ 'is-active': active }, { 'is-absolute': isAbsolute }]"
      >
        <SfBar
          :title="active || title"
          :back="true"
          class="sf-mega-menu__bar"
          @click:back="back()"
        />
        <div class="sf-mega-menu__content">
          <div class="sf-mega-menu__menu"> -->
      <!-- @slot Slot for menu column -->
      <!-- <slot />
          </div>
          <div v-if="$slots.aside" class="sf-mega-menu__aside"> -->
      <!-- @slot @deprecated will be removed in 1.0.0 -->
      <!-- <SfMenuItem
              :label="asideTitle"
              class="sf-mega-menu__aside-header desktop-only"
            />
            <slot name="aside" />
          </div>
        </div>
      </div> -->
      <div v-if="multilevel" class="sf-mega-menu">
        <slot name="multilevel" v-bind="{ title }" />
      </div>
    </div>
  </transition>
</template>
<script>
import Vue from "vue";
// Vue.component("SfMegaMenuColumn", SfMegaMenuColumn);
Vue.component("SfMultilevelMegaMenu", SfMultilevelMegaMenu);
// import SfMegaMenuColumn from "./_internal/SfMegaMenuColumn";
import SfMultilevelMegaMenu from "./_internal/SfMultilevelMegaMenu";
// import SfBar from "../../molecules/SfBar/SfBar";
// import SfMenuItem from "../../molecules/SfMenuItem/SfMenuItem";
import {
  mapMobileObserver,
  unMapMobileObserver,
} from "../../../utilities/mobile-observer";

export default {
  name: "SfMegaMenu",
  components: {
    // SfBar,
    // SfMenuItem,
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
    multilevel: {
      type: Boolean,
      default: false,
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
  },
  computed: {
    ...mapMobileObserver(),
  },
  watch: {
    isMobile: {
      handler() {
        this.active = "";
      },
      immediate: true,
    },
  },
  beforeDestroy() {
    unMapMobileObserver();
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
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfMegaMenu.scss";
</style>
