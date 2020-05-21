<template>
  <div
    v-click-outside="closeHandler"
    :aria-expanded="open.toString()"
    :aria-owns="'lbox_' + _uid"
    aria-autocomplete="none"
    role="combobox"
    :class="{
      'sf-select--is-active': isActive,
      'sf-select--is-selected': isSelected,
      'sf-select--is-required': required,
      'sf-select--is-disabled': disabled,
    }"
    class="sf-select"
    @click="toggle($event)"
    @keyup.esc="closeHandler"
    @keyup.space="openHandler"
    @keyup.up="move(-1)"
    @keyup.down="move(1)"
    @keyup.enter="enter($event)"
  >
    <div style="position: relative;">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div
        id="sfSelect"
        v-focus
        tabindex="0"
        role="listbox"
        class="sf-select__selected sf-select-option"
        v-html="html"
      ></div>
      <slot name="label">
        <div v-if="label" class="sf-select__label">
          {{ label }}
        </div>
      </slot>
      <slot name="icon">
        <SfChevron class="sf-select__chevron" />
      </slot>
      <SfOverlay :visible="open" class="sf-select__overlay mobile-only" />
      <transition name="sf-select">
        <div v-show="open" role="list" class="sf-select__dropdown">
          <!--  sf-select__option -->
          <ul
            :aria-expanded="open.toString()"
            :style="{ maxHeight }"
            class="sf-select__options"
          >
            <slot />
          </ul>
          <slot name="cancel">
            <SfButton
              ref="cancel"
              class="sf-select__cancel sf-button--full-width mobile-only"
              @click="closeHandler"
            >
              Cancel
            </SfButton>
          </slot>
        </div>
      </transition>
    </div>
    <div v-if="valid !== undefined" class="sf-select__error-message">
      <transition name="sf-fade">
        <div v-if="!valid">
          <!-- @slot Custom error message of form select -->
          <slot name="error-message" v-bind="{ errorMessage }">
            {{ errorMessage }}
          </slot>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import SfSelectOption from "./_internal/SfSelectOption.vue";
import SfChevron from "../../atoms/SfChevron/SfChevron.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
import SfOverlay from "../../atoms/SfOverlay/SfOverlay.vue";
import { focus } from "../../../utilities/directives";
import { clickOutside } from "../../../utilities/directives";
import Vue from "vue";
Vue.component("SfSelectOption", SfSelectOption);
export default {
  name: "SfSelect",
  directives: { focus, clickOutside },
  components: {
    SfButton,
    SfChevron,
    SfOverlay,
  },
  model: {
    prop: "selected",
    event: "change",
  },
  props: {
    /**
     * Select field label
     */
    label: {
      type: String,
      default: "",
    },
    /**
     * Selected item value
     */
    selected: {
      type: [String, Number, Object],
      default: "",
    },
    /**
     * Dropdown list size
     */
    size: {
      type: Number,
      default: 5,
    },
    /**
     * Required attribute
     */
    required: {
      type: Boolean,
      default: false,
    },
    /**
     * Validate value of form input
     */
    valid: {
      type: Boolean,
      default: undefined,
    },
    /**
     * Disabled status of form select
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Error message value of form select. It will be appeared if `valid` is `true`.
     */
    errorMessage: {
      type: String,
      default: "This field is not correct.",
    },
  },
  data() {
    return {
      open: false,
      options: [],
      indexes: {},
      optionHeight: 0,
      focusedOption: "",
    };
  },
  computed: {
    index: {
      get() {
        const stringified = this.indexes[JSON.stringify(this.selected)];
        if (typeof stringified === "undefined") {
          return -1;
        }
        return stringified;
      },
      set(index) {
        this.focusedOption = this.options[index].value;
        this.$emit("change", this.options[index].value);
      },
    },
    html() {
      if (this.index < 0) return;
      return this.options[this.index].html;
    },
    maxHeight() {
      if (!this.size) return;
      return `${this.optionHeight * this.size}px`;
    },
    isActive() {
      return this.open;
    },
    isSelected() {
      return this.selected;
    },
  },
  watch: {
    open: {
      immediate: true,
      handler: function (visible) {
        if (visible) {
          this.$nextTick(() => {
            this.optionHeight = this.$slots.default[0].elm.offsetHeight;
          });
        }
      },
    },
  },
  created: function () {},
  mounted: function () {
    const options = [];
    const indexes = {};
    let i = 0;
    if (!this.$slots.default) return;
    this.$on("update", this.update);
    this.$slots.default.forEach((slot) => {
      if (!slot.tag) return;
      options.push({
        ...slot.componentOptions.propsData,
        html: slot.elm.innerHTML,
      });
      indexes[JSON.stringify(slot.componentOptions.propsData.value)] = i;
      i++;
    });
    this.options = options;
    this.indexes = indexes;
  },
  beforeDestroy: function () {
    this.$off("update", this.update);
  },
  methods: {
    update(index) {
      this.index = index;
    },
    move(payload) {
      const optionsLength = this.options.length;
      let index = this.index;
      index += payload;
      if (index < 0) index = 0;
      if (index >= optionsLength) index = optionsLength - 1;
      this.index = index;
      document.getElementById("sfSelect").blur();
      document.getElementById(this.focusedOption).focus();
    },
    enter() {
      this.toggle();
    },
    toggle(event) {
      if (
        (this.$refs.cancel &&
          event &&
          event.target.contains(this.$refs.cancel.$el)) ||
        this.disabled
      )
        return;
      this.open = !this.open;
    },
    openHandler() {
      this.open = true;
    },
    closeHandler() {
      this.open = false;
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfSelect.scss";
</style>
