<template>
  <transition name="fade">
    <div v-if="visible" class="sf-mega-menu">
      <SfBar
        :title="title"
        :back="isActive"
        class="mobile-only"
        @click:back="change()"
      />
      <div
        class="sf-mega-menu__content"
        :class="{ 'sf-mega-menu__content--is-active': isActive }"
      >
        <div
          class="sf-mega-menu__aside"
          :class="{
            'sf-mega-menu__aside--without-content': !this.$slots.aside
          }"
        >
          <SfList class="sf-mega-menu__menu-mobile">
            <SfListItem v-for="item in items" :key="item">
              <!-- @slot Custom menu-item markup -->
              <slot name="menu-item" v-bind="{ change, item, active }">
                <div @click="change(item)">
                  <SfMenuItem :label="item" class="sf-mega-menu__menu-item" />
                </div>
              </slot>
            </SfListItem>
          </SfList>
          <div class="sf-mega-menu__aside-content">
            <slot name="aside" />
          </div>
        </div>
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
import SfList from "../SfList/SfList.vue";
import SfMenuItem from "../../molecules/SfMenuItem/SfMenuItem.vue";
import SfBar from "../../molecules/SfBar/SfBar.vue";
export default {
  name: "SfMegaMenu",
  components: {
    SfList,
    SfMenuItem,
    SfBar
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      active: [],
      items: [],
      isMobile: false,
      desktopMin: 1024
    };
  },
  computed: {
    isActive() {
      return this.active.length > 0;
    }
  },
  provide() {
    const megaMenu = {};
    Object.defineProperty(megaMenu, "active", {
      get: () => this.active
    });
    Object.defineProperty(megaMenu, "updateItems", {
      value: this.updateItems
    });
    return { megaMenu };
  },
  watch: {
    isMobile: {
      handler(mobile) {
        this.$nextTick(() => {
          this.active = mobile ? [] : [...this.items];
        });
      },
      immediate: true
    },
    visible: {
      handler(visible) {
        if (!visible) return;
        if (this.isMobile) return;
        this.$nextTick(() => {
          this.active = [...this.items];
        });
      },
      immediate: true
    }
  },
  mounted() {
    this.isMobile =
      Math.max(document.documentElement.clientWidth, window.innerWidth) <
      this.desktopMin;
    window
      .matchMedia(`(max-width: ${this.desktopMin}px)`)
      .addListener(this.isMobileHandler);
  },
  beforeDestroy() {
    window
      .matchMedia(`(max-width: ${this.desktopMin}px)`)
      .removeListener(this.isMobileHandler);
  },
  methods: {
    updateItems(title) {
      if (this.items.includes(title)) return;
      this.items.push(title);
    },
    change(payload) {
      this.active = payload ? [payload] : [];
      this.$emit("change", payload ? payload : "");
    },
    isMobileHandler(e) {
      this.isMobile = e.matches;
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfMegaMenu.scss";
</style>
