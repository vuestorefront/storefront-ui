<template>
  <section
    class="sf-call-to-action"
    :style="
      'background-image: url(' +
        image +
        '); background-color: ' +
        background +
        ';'
    "
  >
    <div class="sf-call-to-action__text-container">
      <!--@slot Use this slot to replace title-->
      <slot name="title" v-bind="{ title }">
        <h2 v-if="title" class="sf-call-to-action__title">
          {{ title }}
        </h2>
      </slot>
      <!--@slot Use this slot to replace description-->
      <slot name="description" v-bind="{ description }">
        <p v-if="description" class="sf-call-to-action__description">
          {{ description }}
        </p>
      </slot>
    </div>
    <!--@slot Use this slot to replace bottom button-->
    <slot name="button" v-bind="{ buttonText }">
      <SfButton v-if="buttonText" class="sf-call-to-action__button">
        {{ buttonText }}
      </SfButton>
    </slot>
  </section>
</template>
<script>
import SfButton from "../../atoms/SfButton/SfButton.vue";
export default {
  name: "SfCallToAction",
  components: {
    SfButton
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    buttonText: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    background: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfCallToAction.scss";
</style>
