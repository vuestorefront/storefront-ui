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
import {
  mapMobileObserver,
  unMapMobileObserver,
} from "../../../../utilities/mobile-observer";

export default {
  name: "SfHeaderNavigation",
  components: {
    SfSidebar,
  },
  computed: {
    ...mapMobileObserver(),
    isVisibleOnMobile() {
      return this.isMobile;
    },
  },
};
</script>
