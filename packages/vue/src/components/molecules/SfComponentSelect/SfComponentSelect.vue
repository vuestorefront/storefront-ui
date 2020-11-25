<template>
  <div
    v-click-outside="checkPersistence"
    :aria-expanded="open.toString()"
    :aria-owns="'lbox_' + _uid"
    :aria-label="label"
    role="listbox"
    :class="{
      'is-active': isActive,
      'is-selected': isSelected,
      'is-required': required,
      'is-disabled': disabled,
      'is-invalid': !valid,
    }"
    class="sf-component-select"
    @click="toggle($event)"
    @keyup.esc="closeHandler"
    @keyup.space="openHandler"
    @keyup.up="move(-1)"
    @keyup.down="move(1)"
    @keyup.enter="enter($event)"
  >
    <div style="position: relative;">
      <div
        ref="sfComponentSelect"
        v-focus
        tabindex="0"
        class="sf-component-select__selected sf-component-select-option"
        v-on="$listeners"
        v-html="html"
      ></div>
      <slot name="label">
        <div v-if="label" class="sf-component-select__label">
          {{ label }}
        </div>
      </slot>
      <slot name="icon">
        <SfChevron class="sf-component-select__chevron" />
      </slot>
      <SfOverlay
        ref="overlay"
        :visible="open"
        class="sf-component-select__overlay smartphone-only"
      />
      <transition name="sf-component-select">
        <div v-show="open" class="sf-component-select__dropdown">
          <!--  sf-component-select__option -->
          <ul
            :aria-expanded="open.toString()"
            :style="{ maxHeight }"
            class="sf-component-select__options"
          >
            <slot />
          </ul>
          <slot name="cancel">
            <SfButton
              ref="cancel"
              class="sf-component-select__cancel sf-button--full-width smartphone-only"
              @click="closeHandler"
            >
              Cancel
            </SfButton>
          </slot>
        </div>
      </transition>
    </div>
    <div class="sf-component-select__message">
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
import SfComponentSelectOption from "./_internal/SfComponentSelectOption.vue";
import SfChevron from "../../atoms/SfChevron/SfChevron.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
import SfOverlay from "../../atoms/SfOverlay/SfOverlay.vue";
import { focus } from "../../../utilities/directives";
import { clickOutside } from "../../../utilities/directives";
import Vue from "vue";
Vue.component("SfComponentSelectOption", SfComponentSelectOption);
export default {
  name: "SfComponentSelect",
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
     * Hint/Required message value of select.
     */
    hintMessage: {
      type: String,
      default: "Required.",
    },
    /**
     * Validate value of form select
     */
    valid: {
      type: Boolean,
      default: true,
    },
    /**
     * Error message value of form select. It will be appeared if `valid` is `true`.
     */
    errorMessage: {
      type: String,
      default: "This field is not correct.",
    },
    /**
     * Info/success message value of select.
     */
    infoMessage: {
      type: String,
      default: "",
    },
    /**
     * Disabled status of form select
     */
    disabled: {
      type: Boolean,
      default: false,
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
      if (!this.options.length) return;
      return `${this.optionHeight * this.options.length}px`;
    },
    isActive() {
      return this.open;
    },
    isSelected() {
      return this.selected;
    },
    computedMessageSlotName() {
      return this.messagesHandler(
        "show-error-message",
        "show-info-message",
        this.required ? "show-hint-message" : ""
      );
    },
    computedMessage() {
      return this.messagesHandler(
        this.errorMessage,
        this.infoMessage,
        this.required ? this.hintMessage : ""
      );
    },
    computedMessageClass() {
      return this.messagesHandler(
        "sf-input__message--error",
        "sf-input__message--info",
        this.required ? "sf-input__message--hint" : ""
      );
    },
  },
  watch: {
    open: {
      immediate: true,
      handler: function (visible) {
        if (visible) {
          this.$nextTick(() => {
            if (this.$slots.default) {
              this.optionHeight = this.$slots.default[0].elm.offsetHeight;
            }
          });
        }
      },
    },
  },
  mounted: function () {
    this.addOptionsAndIndexes();
  },
  updated() {
    if (
      this.$slots.default &&
      this.$slots.default.length > this.options.length
    ) {
      this.addOptionsAndIndexes();
    }
  },
  beforeDestroy: function () {
    this.$off("update", this.update);
  },
  methods: {
    update(index) {
      this.index = index;
    },
    addOptionsAndIndexes() {
      const options = [];
      const indexes = {};
      if (!this.$slots.default) return;
      this.$on("update", this.update);
      this.$slots.default.forEach(({ tag, componentOptions, elm }, index) => {
        if (!tag) return;
        options.push({
          ...componentOptions.propsData,
          html: elm.innerHTML,
        });
        indexes[JSON.stringify(componentOptions.propsData.value)] = index;
      });
      this.options = options;
      this.indexes = indexes;
    },
    move(payload) {
      const optionsLength = this.options.length;
      let index = this.index;
      index += payload;
      if (index < 0) index = 0;
      if (index >= optionsLength) index = optionsLength - 1;
      this.index = index;
      this.$refs.sfComponentSelect.blur();
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
    messagesHandler(error, info, hint) {
      if (this.errorMessage && !this.valid) {
        return error;
      } else if (this.infoMessage && this.valid) {
        return info;
      } else if (this.hintMessage) {
        return hint;
      } else {
        return "";
      }
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
@import "~@storefront-ui/shared/styles/components/molecules/SfComponentSelect.scss";
</style>
