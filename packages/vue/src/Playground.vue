<template>
  <div id="playground">
    <sf-chevron class="sf-chevron--right"></sf-chevron>
    <br />
    <SfCimage :publicId="publicId" :cloud="cloud" :alt="alt" />
  </div>
</template>

<script>
// Use this component to play with other components
import { configureCompat } from "vue";
import SfChevron from "../src/components/atoms/SfChevron/SfChevron.vue";
import SfCimage from "../src/components/atoms/SfCimage/SfCimage.vue";
export default {
  compatConfig: {
    // MODE: 2, // opt-in to Vue 3 behavior for this component only
    COMPONENT_ASYNC: false, // features can also be toggled at component level
  },
  components: {
    SfChevron,
    SfCimage,
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
