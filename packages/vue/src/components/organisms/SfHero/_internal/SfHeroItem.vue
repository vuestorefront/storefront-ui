<template>
  <li
    class="glide__slide sf-hero-item"
    :style="
      'background-image: url(' +
        image +
        '); background-color: ' +
        background +
        ';'
    "
  >
    <div class="sf-hero-item__container">
      <!--@slot hero item subtitle. Slot content will replace default <h2> tag-->
      <slot name="subtitle">
        <div v-if="subtitle" class="sf-hero-item__subtitle">{{ subtitle }}</div>
      </slot>
      <!--@slot hero item title. Slot content will replace default <h1> tag-->
      <slot name="title">
        <h1 v-if="title" class="sf-hero-item__title">{{ title }}</h1>
      </slot>
      <!--@slot Call to action section. Slot content will replace default SfButton component-->
      <slot name="call-to-action">
        <div v-if="buttonText" class="sf-hero-item__button">
          <SfButton>
            {{ buttonText }}
          </SfButton>
        </div>
      </slot>
    </div>
  </li>
</template>
<script>
import SfButton from "../../../atoms/SfButton/SfButton.vue";
export default {
  name: "SfHeroItem",
  components: {
    SfButton
  },
  props: {
    /** Hero item title */
    title: {
      type: String,
      default: ""
    },
    /** Hero item subtitle (at the top) */
    subtitle: {
      type: String,
      default: ""
    },
    /** text that will be displayed inside the button. You can replace the button  with "call-to-action" slot */
    buttonText: {
      type: String,
      default: ""
    },
    /** Background color */
    background: {
      type: String,
      default: ""
    },
    /** Background image path */
    image: {
      type: String,
      default: ""
    }
  }
};
</script>
