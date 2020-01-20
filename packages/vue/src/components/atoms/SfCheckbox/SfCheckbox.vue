<template>
  <div
    class="sf-checkbox"
    :class="{ 'is-active': isChecked, 'is-disabled': disabled }"
  >
    <input
      :id="name"
      type="checkbox"
      :name="name"
      :value="value"
      :checked="isChecked"
      :disabled="disabled"
      class="sf-checkbox__input"
      @change="inputHandler"
    />
    <label :for="name" class="sf-checkbox__container">
      <!-- @slot Custom check mark markup -->
      <slot name="checkmark" v-bind="{ isChecked, disabled }">
        <div class="sf-checkbox__checkmark" :class="{ 'is-active': isChecked }">
          <SfIcon v-if="isChecked" icon="check" size="11px" color="white" />
        </div>
      </slot>
      <!-- @slot Custom label markup -->
      <slot name="label" v-bind="{ label, isChecked, disabled }">
        <div v-if="label" class="sf-checkbox__label">{{ label }}</div>
      </slot>
    </label>
  </div>
</template>
<script>
import SfIcon from "../SfIcon/SfIcon.vue";
export default {
  name: "SfCheckbox",
  components: {
    SfIcon
  },
  model: {
    prop: "selected",
    event: "change"
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    selected: {
      type: [Array, Boolean],
      default: () => []
    }
  },
  computed: {
    isChecked() {
      if (typeof this.selected === "boolean") {
        return this.selected;
      } else {
        return this.selected.includes(this.value);
      }
    }
  },
  methods: {
    inputHandler() {
      if (typeof this.selected === "boolean") {
        this.$emit("change", !this.selected);
      } else {
        let selected = [...this.selected];
        if (selected.includes(this.value)) {
          selected = selected.filter(value => value !== this.value);
        } else {
          selected.push(this.value);
        }
        this.$emit("change", selected);
      }
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfCheckbox.scss";
</style>
