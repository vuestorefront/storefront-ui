<template>
  <div
    v-click-outside="checkPersistence"
    :aria-expanded="open.toString()"
    :aria-owns="'lbox_' + _uid"
    :aria-label="label"
    role="listbox"
    :class="{
      'sf-select--is-active': isActive,
      'sf-select--is-selected': isSelected,
      'sf-select--is-required': required,
      'sf-select--is-disabled': disabled,
      'sf-select--is-invalid': !valid,
    }"
    class="sf-select"
    @click="toggle($event)"
    @keyup.esc="closeHandler"
    @keyup.space="openHandler"
    @keyup.up="move(-1)"
    @keyup.down="move(1)"
    @keyup.enter="enter($event)"
    v-on="$listeners"
  >
    <div style="position: relative;">
      <div
        ref="sfSelect"
        v-focus
        tabindex="0"
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
      <SfOverlay
        ref="overlay"
        :visible="open"
        class="sf-select__overlay mobile-only"
      />
      <transition name="sf-select">
        <div v-show="open" class="sf-select__dropdown">
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
    <div class="sf-input__message">
      <transition name="sf-fade">
        <!-- @slot Custom message of form input -->
        <slot
          v-if="!disabled"
          :name="computedMessageSlotName"
          v-bind="{ computedMessage }"
        >
          <div :class="computedMessageClass">{{ computedMessage }}</div></slot
        >
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
     * Validate value of form select
     */
    valid: {
      type: Boolean,
      default: true,
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
    /**
     * Hint/Required message value of form select.
     */
    hintMessage: {
      type: String,
      default: "Required.",
    },
    /**
     * Success message value of form select.
     */
    successMessage: {
      type: String,
      default: "",
    },
    /**
     * If true clicking outside will not dismiss the select
     */
    persistent: {
      type: Boolean,
      default: false,
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
    computedMessageSlotName() {
      if (this.errorMessage && !this.valid) {
        return "show-error-message";
      } else if (this.successMessage && this.valid) {
        return "show-success-message";
      } else if (this.hintMessage) {
        return this.required ? "show-hint-message" : "";
      } else {
        return "";
      }
    },
    computedMessage() {
      if (this.errorMessage && !this.valid) {
        return this.errorMessage;
      } else if (this.successMessage && this.valid) {
        return this.successMessage;
      } else if (this.hintMessage) {
        return this.required ? this.hintMessage : "";
      } else {
        return "";
      }
    },
    computedMessageClass() {
      if (this.errorMessage && !this.valid) {
        return "sf-input__message--error";
      } else if (this.successMessage && this.valid) {
        return "sf-input__message--success";
      } else if (this.hintMessage) {
        return this.required ? "sf-input__message--hint" : "";
      } else {
        return "";
      }
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
    if (!this.$slots.default) return;
    this.$on("update", this.update);
    this.$slots.default.forEach((slot, index) => {
      if (!slot.tag) return;
      options.push({
        ...slot.componentOptions.propsData,
        html: slot.elm.innerHTML,
      });
      indexes[JSON.stringify(slot.componentOptions.propsData.value)] = index;
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
      this.$refs.sfSelect.blur();
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
        (this.$refs.overlay &&
          event &&
          this.persistent &&
          event.target.contains(this.$refs.overlay.$el)) ||
        this.disabled
      )
        return;
      this.open = !this.open;
    },
    checkPersistence() {
      if (!this.persistent) {
        this.closeHandler();
      }
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
