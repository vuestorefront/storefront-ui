<template>
  <transition name="fade">
    <div
      v-if="true"
      class="sf-mega-menu"
      :class="{ 'has-children': hasChildren }"
      v-bind="$attrs"
    >
      <div class="sf-mega-menu__container">
        <SfList>
          <SfListItem v-for="(title, key) in Object.keys(columns)" :key="key">
            <button @click="setActive(title)">{{ title }}</button>
          </SfListItem>
        </SfList>
        <SfList>
          <SfListItem v-for="(title, key) in Object.keys(columns)" :key="key">
            <button @click="setActive(title)">{{ title }}</button>
          </SfListItem>
        </SfList>
        <slot />
      </div>
    </div>
  </transition>
</template>
<script>
import Vue from "vue";
import SfMegaMenuColumn from "./_internal/SfMegaMenuColumn.vue";
Vue.component("SfMegaMenuColumn", SfMegaMenuColumn);
import SfList from "../SfList/SfList.vue";
export default {
  name: "SfMegaMenu",
  components: {
    SfList,
  },
  inheritAttrs: false,
  data() {
    return {
      columns: {},
      open: "SHOES",
    };
  },
  computed: {
    hasChildren() {
      return true;
    },
  },
  methods: {
    setActive(title) {
      this.open = title;
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfMegaMenu.scss";
</style>
