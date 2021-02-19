<template>
  <section class="sf-call-to-action" :style="style">
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
      <SfButton
        v-if="buttonText"
        :link="link"
        class="sf-call-to-action__button"
        data-testid="cta-button"
      >
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
    SfButton,
  },
  props: {
    /**
     * CallToAction title.
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * Text that will be displayed inside the button.
     */
    buttonText: {
      type: String,
      default: "",
    },
    /**
     *  CallToAction link. If it's filled in, changes button tag on a tag.
     */
    link: {
      type: String,
      default: "",
    },
    /**
     * CallToAction description.
     */
    description: {
      type: String,
      default: "",
    },
    /**
     * Background color.
     */
    background: {
      type: String,
      default: "",
    },
    /**
     * Background image.
     */
    image: {
      type: [String, Object],
      default: "",
    },
  },
  computed: {
    style() {
      const image = this.image;
      const background = this.background;
      return {
        "--_call-to-action-background-image": image.mobile
          ? `url(${image.mobile})`
          : `url(${image})`,
        "--_call-to-action-background-desktop-image":
          image.desktop && `url(${image.desktop})`,
        "--_call-to-action-background-color": background,
      };
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfCallToAction.scss";
</style>
