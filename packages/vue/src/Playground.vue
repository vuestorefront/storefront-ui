<template>
  <div id="playground">
    <SfImage
      src="https://docs.storefrontui.io/assets/storybook/SfImage/product-216x326.jpg"
      alt="rfefw"
    >
      ntgrioeoi
    </SfImage>
    <SfInput label="First name" name="name" v-model="fname" type="text" valid />
    <hr />
    {{ fname }}
    <sf-loader :loading="true">
      <!-- <template #loader>Loading...</template> -->
    </sf-loader>
  </div>
</template>

<script>
// Use this component to play with other components
import { configureCompat } from "vue";
import SfImage from "../src/components/atoms/SfImage/SfImage.vue";
import SfInput from "../src/components/atoms/SfInput/SfInput.vue";
import SfLoader from "../src/components/atoms/SfLoader/SfLoader.vue";

export default {
  compatConfig: {
    // COMPONENT_ASYNC: false, // features can also be toggled at component level
    // COMPONENT_V_MODEL: false,
  },
  components: {
    SfImage,
    SfInput,
    SfLoader,
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
