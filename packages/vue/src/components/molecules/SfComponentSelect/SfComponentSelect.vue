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
    <div style="position: relative">
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
              class="
                sf-component-select__cancel
                sf-button--full-width
                smartphone-only
              "
              @click="closeHandler"
            >
              Cancel
            </SfButton>
          </slot>
        </div>
      </transition>
    </div>
    <div class="sf-component-select__error-message">
      <transition name="sf-fade">
        <!-- @slot Custom error message of form select -->
        <slot v-if="!valid" name="error-message" v-bind="{ errorMessage }">
          <span> {{ errorMessage }} </span>
        </slot>
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
    label: {
      type: String,
      default: "",
    },
    selected: {
      type: [String, Number, Object],
      default: "",
    },
    size: {
      type: Number,
      default: 5,
    },
    required: {
      type: Boolean,
      default: false,
    },
    valid: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: "This field is not correct.",
    },
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
      return `${this.optionHeight * (this.size + 0.5)}px`;
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
