<template>
  <div class="sf-search-bar">
    <input
      class="sf-search-bar__input"
      type="search"
      :value="value"
      v-bind="$attrs"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      @keyup.enter="$emit('enter', $event.target.value)"
      @keyup.esc="$emit('input', '')"
      @blur="$emit('blur')"
    />
    <!-- @slot -->
    <SfButton
      class="sf-search-bar__button sf-button--pure"
      @click="$emit('click', value)"
    >
      <slot name="icon">
        <span v-if="icon" class="sf-search-bar__icon">
          <SfIcon :color="icon.color" :size="icon.size" icon="search" />
        </span>
      </slot>
    </SfButton>
  </div>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
export default {
  name: "SfSearchBar",
  components: { SfIcon, SfButton },
  inheritAttrs: false,
  props: {
    /**
     * Text for placeholder
     */
    placeholder: {
      type: String,
      default: "",
    },
    /**
     * Value that will be displayed in search bar
     */
    value: {
      type: [Number, String],
      default: null,
    },
    /**
     * Object to define icon look. Should have values for color and size
     */
    icon: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfSearchBar.scss";
</style>
