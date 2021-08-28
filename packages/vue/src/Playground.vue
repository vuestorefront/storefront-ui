<template>
  <div id="playground">
    <SfCircleIcon />
    <sf-divider></sf-divider>
    <sf-color color="black"> gknesl</sf-color>
    <hr>
    <sf-heading :level="3" title="fkasek" description="gkgbrki"></sf-heading>
  </div>
</template>

<script>
// Use this component to play with other components
import { configureCompat } from "vue";
import SfCircleIcon from "../src/components/atoms/SfCircleIcon/SfCircleIcon.vue";
import SfColor from "../src/components/atoms/SfColor/SfColor.vue";
import SfDivider from "../src/components/atoms/SfDivider/SfDivider.vue";
import SfHeading from "../src/components/atoms/SfHeading/SfHeading.vue";

export default {
  compatConfig: {
    // MODE: 2, // opt-in to Vue 3 behavior for this component only
    COMPONENT_ASYNC: false, // features can also be toggled at component level
  },
  components: {
    SfCircleIcon,
    SfColor,
    SfDivider,
    SfHeading,
  },
  data: function () {
    return {
      publicId: "sheep",
      cloud: {
        cloudName: "demo",
      },
      alt: "example",
    };
  },
};
</script>
