<template>
  <div class="sf-characteristic">
    <!--@slot Icon. Slot content will replace SfIcon atom component-->
    <slot name="icon" v-bind="{ colorIcon, sizeIcon, icon }">
      <div class="sf-characteristic__icon">
        <SfIcon
          aria-hidden="true"
          :color="colorIcon"
          :size="sizeIcon"
          :icon="icon"
        />
      </div>
    </slot>
    <!--@slot Characteristic text. Slot content will replace default title and description text-->
    <slot name="text" v-bind="{ title, description }">
      <div class="sf-characteristic__text">
        <!--@slot Characteristic title. Slot content will replace default title text-->
        <slot name="title" v-bind="{ title }">
          <div class="sf-characteristic__title">{{ title }}</div>
        </slot>
        <!--@slot Characteristic description. Slot content will replace default description text-->
        <slot name="description" v-bind="{ description }">
          <div class="sf-characteristic__description">{{ description }}</div>
        </slot>
      </div>
    </slot>
  </div>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
export default {
  name: "SfCharacteristic",
  components: {
    SfIcon,
  },
  props: {
    colorIcon: {
      type: String,
      default: "",
    },
    sizeIcon: {
      type: String,
      default: "",
    },
    icon: {
      type: [String, Array],
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfCharacteristic.scss";
</style>
