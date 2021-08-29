<template>
  <div id="playground">
    <sf-price regular="300.00" special="$200.00"></sf-price>
    <SfOverlay :visible="true" />
    <hr />
    {{ fname }}
    <sf-loader :loading="true">
      <!-- <template #loader>Loading...</template> -->
    </sf-loader>
    <hr />
    <SfProperty name="Material" value="Cotton" />
  </div>
</template>

<script>
// Use this component to play with other components
import { configureCompat } from "vue";
import SfPrice from "../src/components/atoms/SfPrice/SfPrice.vue";
import SfOverlay from "../src/components/atoms/SfOverlay/SfOverlay.vue";
import SfLoader from "../src/components/atoms/SfLoader/SfLoader.vue";
import SfProperty from "../src/components/atoms/SfProperty/SfProperty.vue";

export default {
  compatConfig: {
    // COMPONENT_ASYNC: false, // features can also be toggled at component level
    // COMPONENT_V_MODEL: false,
  },
  components: {
    SfPrice,
    SfOverlay,
    SfLoader,
    SfProperty,
  },
  data: function () {
    return {
      publicId: "sheep",
      cloud: {
        cloudName: "demo",
      },
      alt: "example",
      fname: "Batman",
    };
  },
};
</script>
