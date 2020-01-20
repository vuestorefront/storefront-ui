<template>
  <div
    :aria-expanded="open ? 'true' : 'false'"
    :aria-owns="'lbox_' + _uid"
    aria-autocomplete="none"
    role="combobox"
    tabindex="0"
    :class="{
      'sf-select--is-active': isActive,
      'sf-select--is-selected': isSelected,
      'sf-select--is-required': required
    }"
    class="sf-select"
    @click="toggle($event)"
    @blur="closeHandler"
    @keyup.space="openHandler"
    @keyup.up="move(-1)"
    @keyup.down="move(1)"
    @keyup.enter="enter($event)"
  >
    <div style="position: relative">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="sf-select__selected sf-select-option" v-html="html"></div>
      <slot name="label">
        <div v-if="label" class="sf-select__label">
          {{ label }}
        </div>
      </slot>
      <SfOverlay :visible="open" class="sf-select__overlay" />
      <transition name="sf-select">
        <div v-show="open" class="sf-select__dropdown">
          <!--  sf-select__option -->
          <ul :style="{ maxHeight }" class="sf-select__options">
            <slot />
          </ul>
          <SfButton
            ref="cancel"
            class="sf-select__cancel sf-button--full-width"
            @click="closeHandler"
          >
            Cancel
          </SfButton>
        </div>
      </transition>
    </div>
    <div v-if="valid !== undefined" class="sf-select__error-message">
      <transition name="fade">
        <span v-if="valid === false">
          <slot name="errorMessage">{{ errorMessage }}</slot>
        </span>
      </transition>
    </div>
  </div>
</template>
<script>
import SfSelectOption from "./_internal/SfSelectOption.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
import SfOverlay from "../../atoms/SfOverlay/SfOverlay.vue";
import Vue from "vue";
Vue.component("SfSelectOption", SfSelectOption);
export default {
  name: "SfSelect",
  components: {
    SfButton,
    SfOverlay
  },
  model: {
    prop: "selected",
    event: "change"
  },
  props: {
    /**
     * Select field label
     */
    label: {
      type: String,
      default: ""
    },
    /**
     * Selected item value
     */
    selected: {
      type: [String, Object],
      default: ""
    },
    /**
     * Dropdown list size
     */
    size: {
      type: Number,
      default: 5
    },
    /**
     * Required attribute
     */
    required: {
      type: Boolean,
      default: false
    },
    /**
     * Validate value of form input
     */
    valid: {
      type: Boolean,
      default: undefined
    },
    /**
     * Error message value of form select. It will be appeared if `valid` is `true`.
     */
    errorMessage: {
      type: String,
      default: "This field is not correct."
    }
  },
  data() {
    return {
      open: false,
      options: [],
      indexes: {},
      optionHeight: 0
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
        this.$emit("change", this.options[index].value);
      }
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
    }
  },
  watch: {
    open: {
      immediate: true,
      handler: function(visible) {
        if (visible) {
          this.$nextTick(() => {
            this.optionHeight = this.$slots.default[0].elm.offsetHeight;
          });
        }
      }
    }
  },
  created: function() {},
  mounted: function() {
    const options = [];
    const indexes = {};
    let i = 0;
    if (!this.$slots.default) return;
    this.$on("update", this.update);
    this.$slots.default.forEach(slot => {
      if (!slot.tag) return;
      options.push({
        ...slot.componentOptions.propsData,
        html: slot.elm.innerHTML
      });
      indexes[JSON.stringify(slot.componentOptions.propsData.value)] = i;
      i++;
    });
    this.options = options;
    this.indexes = indexes;
  },
  beforeDestroy: function() {
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
    },
    enter() {
      this.toggle();
    },
    toggle(event) {
      if (this.$refs.cancel && event.target.contains(this.$refs.cancel.$el)) {
        return;
      }
      this.open = !this.open;
    },
    openHandler() {
      this.open = true;
    },
    closeHandler() {
      this.open = false;
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfSelect.scss";
</style>
