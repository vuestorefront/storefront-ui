<template>
  <transition name="fade">
    <div
      v-show="visible"
      class="sf-mega-menu"
      :class="{ 'is-active': isActive }"
    >
      <SfBar
        :title="isActive || title"
        :back="!!isActive"
        class="sf-mega-menu__bar"
        @click:back="isActive = ''"
      />
      <div class="sf-mega-menu__content">
        <div class="sf-mega-menu__menu">
          <!-- @slot Slot for menu column -->
          <slot />
        </div>
        <div v-if="$slots.aside" class="sf-mega-menu__aside">
          <!-- @slot @deprecated will be removed in 1.0.0 -->
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
import {
  mapMobileObserver,
  unMapMobileObserver,
} from "../../../utilities/mobile-observer";
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
  watch: {
    isMobile: {
      handler() {
        this.isActive = "";
      },
      immediate: true,
    },
  },
  methods: {
    change(payload) {
      if (!this.isMobile) return;
      this.active = payload;
      this.$emit("change", payload);
    },
  },
  computed: {
    ...mapMobileObserver(),
  },
  beforeDestroy() {
    unMapMobileObserver();
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfMegaMenu.scss";
</style>
