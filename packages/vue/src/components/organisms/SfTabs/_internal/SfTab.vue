<template>
  <div class="sf-tabs__tab">
    <!--@slot Title. Here you should pass a title tab (for internal component) -->
    <slot name="title" v-bind="{ tabClick, isActive, title }">
      <SfButton
        :aria-pressed="isActive.toString()"
        class="sf-button--pure sf-tabs__title"
        :class="{ 'is-active': isActive }"
        @click="tabClick"
      >
        {{ title }}
        <SfChevron
          class="sf-tabs__chevron"
          :class="{ 'sf-chevron--right': !isActive }"
        />
      </SfButton>
    </slot>
    <div class="sf-tabs__content">
      <div v-if="isActive" class="sf-tabs__content__tab">
        <SfScrollable
          v-if="tabMaxContentHeight"
          :max-content-height="tabMaxContentHeight"
          :show-text="tabShowText"
          :hide-text="tabHideText"
        >
          <!--@slot Default. Here you should pass your tab content (for internal component) -->
          <slot />
        </SfScrollable>
        <slot v-else />
      </div>
    </div>
  </div>
</template>
<script>
import { isClient } from "../../../../utilities/helpers";
import SfChevron from "../../../atoms/SfChevron/SfChevron.vue";
import SfButton from "../../../atoms/SfButton/SfButton.vue";
import SfScrollable from "../../../molecules/SfScrollable/SfScrollable.vue";
export default {
  name: "SfTab",
  components: {
    SfChevron,
    SfScrollable,
    SfButton,
  },
  inject: ["tabConfig"],
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
  computed: {
    tabMaxContentHeight() {
      return this.tabConfig.tabMaxContentHeight;
    },
    tabShowText() {
      return this.tabConfig.tabShowText;
    },
    tabHideText() {
      return this.tabConfig.tabHideText;
    },
  },
  methods: {
    tabClick() {
      if (!isClient) return;
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
