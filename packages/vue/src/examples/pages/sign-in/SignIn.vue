<template>
  <div id="sign-in">
    <SfModal :visible="true">
    </SfModal>
  </div>
</template>

<script>
import { SfModal, Sfnput, SfButton, SfCheckbox } from "../../../../index.js";
export default {
  name: "SignIn",
  components: { SfModal, Sfnput, SfButton, SfCheckbox }
};
</script>

<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";

@mixin for-desktop {
  @media screen and (min-width: $desktop-min) {
    @content;
  }
}
#sign-in {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1240px;
    margin: auto;
  }
}
</style>
