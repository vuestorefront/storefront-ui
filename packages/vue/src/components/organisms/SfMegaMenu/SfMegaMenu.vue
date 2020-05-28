<template>
  <transition name="fade">
    <div v-show="visible" class="sf-mega-menu" :class="{ 'is-active': active }">
      <SfBar
        :title="active || title"
        :back="!!active"
        class="sf-mega-menu__bar"
        @click:back="active = ''"
      />
      <div class="sf-mega-menu__content">
        <div class="sf-mega-menu__menu">
          <!-- @slot Slot for menu column -->
          <slot />
        </div>
        <div v-if="$slots.aside" class="sf-mega-menu__aside">
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
import SfBar from "../../molecules/SfBar/SfBar.vue";
import SfMenuItem from "../../molecules/SfMenuItem/SfMenuItem";
import {
  mapMobileObserver,
  unMapMobileObserver,
} from "../../../utilities/mobile-observer";
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
      if (!this.isMobile) return;
      this.active = payload;
      this.$emit("change", payload);
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfMegaMenu.scss";
</style>
