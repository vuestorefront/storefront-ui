<template>
  <Fragment class="sf-tabs__tab">
    <!--@slot Title. Here you should pass a title tab-->
    <slot name="title" v-bind="{ tabClick, isActive, title }">
      <button
        v-focus
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
      </button>
    </slot>
    <div class="sf-tabs__content">
      <div v-if="isActive" class="sf-tabs__content__tab">
        <SfScrollable v-if="maxContentHeight">
          <!--@slot Default. Here you should pass your tab content -->
          <slot />
        </SfScrollable>
        <div v-else>
          <slot />
        </div>
      </div>
    </div>
  </Fragment>
</template>
<script>
import { Fragment } from "vue-fragment";
import SfChevron from "../../../atoms/SfChevron/SfChevron.vue";
import SfScrollable from "../../../molecules/SfScrollable/SfScrollable.vue";
import { focus } from "../../../../utilities/directives/focus-directive.js";
export default {
  name: "SfTab",
  directives: {
    focus: focus,
  },
  components: {
    Fragment,
    SfChevron,
    SfScrollable,
  },
  inject: ["maxContentHeight"],
  props: {
    /**
     * Tab title.
     */
    title: {
      type: String,
      default: "",
    },
    maxContentHeight: {
      type: String,
      default() {
        return this.maxContentHeight;
      },
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
