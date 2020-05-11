<template>
  <Fragment class="sf-tabs__tab">
    <!--@slot Title. Here you should pass a title tab-->
    <slot name="title" v-bind="{ tabClick, isActive, title }">
      <SfButton
        :aria-pressed="isActive.toString()"
        class="sf-button--pure sf-tabs__title"
        :class="{ 'sf-tabs__title--active': isActive }"
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
        <!--@slot Default. Here you should pass your tab content -->
        <slot />
      </div>
    </div>
  </Fragment>
</template>
<script>
import { Fragment } from "vue-fragment";
import { isClient } from "../../../../utilities/helpers";
import SfChevron from "../../../atoms/SfChevron/SfChevron.vue";
import SfButton from "../../../atoms/SfButton/SfButton.vue";
export default {
  name: "SfTab",
  components: {
    Fragment,
    SfChevron,
    SfButton,
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
      if (!isClient()) return;
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
