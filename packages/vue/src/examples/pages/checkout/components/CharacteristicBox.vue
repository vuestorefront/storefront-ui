<template>
  <div class="sf-highlighted-box order-summary">
    <SfCharacteristic
      title="Safety"
      description="It carefully packaged with a personal touch"
      sizeIcon="sm"
      style="margin-bottom: 1.25rem;"
    />
    <SfCharacteristic
      title="Easy shipping"
      description="You’ll receive dispatch confirmation and an arrival date"
      sizeIcon="sm"
      style="margin-bottom: 1.25rem;"
    />
    <SfCharacteristic
      title="Changed your mind?"
      description="Rest assured, we offer free returns within 30 days"
      sizeIcon="sm"
    />
  </div>
</template>
<script>
import { SfCharacteristic } from "../../../../../index.js";
export default {
  name: "CharacteristicBox",
  components: {
    SfCharacteristic
  }
};
</script>
<style lang="scss" scoped>
@import "../../../../css/variables";

.sf-highlighted-box {
  background-color: #f1f2f3;
  padding: $spacer-extra-big ($spacer-extra-big * 2) $spacer-extra-big
    ($spacer-big * 3);
}
</style>
