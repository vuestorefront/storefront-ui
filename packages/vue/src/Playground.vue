<template>
  <div id="playground">
    <sf-arrow></sf-arrow>
    <br />
    <sf-button>Test</sf-button>
    <br />
    <sf-icon icon="home"></sf-icon>
  </div>
</template>

<script>
// Use this component to play with other components
import SfArrow from "../src/components/atoms/SfArrow/SfArrow.vue";
import SfButton from "../src/components/atoms/SfButton/SfButton.vue";
import SfIcon from "../src/components/atoms/SfIcon/SfIcon.vue";
export default {
  components: {
    SfArrow,
    SfButton,
    SfIcon,
  },
};
</script>
