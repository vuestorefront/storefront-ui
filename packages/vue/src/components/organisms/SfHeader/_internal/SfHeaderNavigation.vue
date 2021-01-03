<template>
  <div class="sf-header-navigation" v-on="$listeners">
    <div v-if="!isVisibleOnMobile" class="sf-header-navigation__menu">
      <slot />
    </div>
    <SfSidebar
      :visible="isVisibleOnMobile"
      :persistent="true"
      class="sf-header-navigation__sidebar"
      @close="$emit('close')"
    >
      <slot />
    </SfSidebar>
  </div>
</template>
<script>
import SfSidebar from "../../../organisms/SfSidebar/SfSidebar";
export default {
  name: "SfHeaderNavigation",
  components: {
    SfSidebar,
  },
  inject: ["mobileObserver"],
  computed: {
    isVisibleOnMobile() {
      return this.mobileObserver.isMobile;
    },
  },
};
</script>
