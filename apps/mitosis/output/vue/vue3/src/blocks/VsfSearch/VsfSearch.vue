<template>
  <div class="relative">
    <form
      role="search"
      :aria-disabled="disabled ? 'true' : 'false'"
      :class="
        _classStringToObject(
          classStringFromArray(['flex', disabled ? 'cursor-not-allowed' : ''])
        )
      "
      @submit="onSubmit?.($event)"
    >
      <div
        :class="
          _classStringToObject(
            classStringFromArray([
              'group',
              'relative flex-1 flex items-center pl-4 py-2 pr-2',
              'ring-1 ring-gray-200 ring-inset',
              'rounded-l-md',
              'only:rounded-r-md text-gray-500',
              disabled
                ? 'bg-gray-100/50 ring-opacity-50 text-opacity-20'
                : 'bg-white hover:ring-primary-500 focus-within:caret-primary-500 active:caret-primary-500 active:ring-primary-500 active:ring-2 focus-within:ring-primary-500 focus-within:ring-2',
            ])
          )
        "
      >
        <template v-if="$slots.prefix">
          <span class="mr-2 inline-flex"><slot name="prefix" /></span>
        </template>

        <input
          role="searchbox"
          type="search"
          :name="useNameProp"
          :placeholder="placeholder"
          :disabled="disabled"
          :value="useValueProp"
          @input="onInputHandler($event)"
          :required="required"
          :autocomplete="autocomplete"
          :class="
            _classStringToObject(
              classStringFromArray([
                'peer outline-none bg-transparent text-gray-900 appearance-none placeholder:text-gray-500 font-body text-base block w-full ',
                'disabled:placeholder:text-opacity-50 disabled:text-opacity-50 disabled:cursor-not-allowed',
              ])
            )
          "
        />
        <span class="peer-placeholder-shown:hidden inline-block ml-2">
          <button
            type="reset"
            class="disabled:cursor-not-allowed flex items-center justify-center rounded-full"
            @click="clear($event)"
            :disabled="disabled"
          >
            <vsf-icon-cancel></vsf-icon-cancel>
          </button>
        </span>

        <template v-if="$slots.suffix">
          <span class="ml-2 inline-flex"><slot name="suffix" /></span>
        </template>
      </div>

      <template v-if="$slots.submit || submitText">
        <vsf-button
          type="submit"
          class="rounded-r-md"
          :disabled="disabled"
          :tile="true"
          :icon="!submitText"
        >
          <slot name="submit" />
          {{ submitText }}
        </vsf-button>
      </template>
    </form>
    <div class="w-full relative"><slot name="results" /></div>
  </div>
</template>

<script lang="ts">
export interface VsfSearchProps {
  placeholder?: string;
  disabled?: boolean;
  slotPrefix: any;
  slotSuffix: any;
  slotSubmit: any;
  slotResults: any;
  onInput?: (...args: any[]) => void;
  onSubmit?: (...args: any[]) => void;
  onClear?: (...args: any[]) => void;
  modelValue?: string;
  value?: string;
  submitText?: string;
  name?: string;
  required?: boolean;
  autocomplete?: string;
}

import { classStringFromArray } from "../../functions/domUtils";
import VsfIconCancel from "../VsfIcons/VsfIconCancel.vue";
import VsfButton from "../VsfButton/VsfButton.vue";
const DEFAULT_VALUES: Partial<Required<VsfSearchProps>> = {
  name: "search",
};

export default {
  name: "vsf-search",
  components: { "vsf-icon-cancel": VsfIconCancel, "vsf-button": VsfButton },
  props: [
    "name",
    "modelValue",
    "disabled",
    "onSubmit",
    "slotPrefix",
    "placeholder",
    "required",
    "autocomplete",
    "slotSuffix",
    "slotSubmit",
    "submitText",
    "slotResults",
  ],

  data: () => ({ classStringFromArray }),

  computed: {
    useNameProp() {
      return this.name || DEFAULT_VALUES.name;
    },
    useValueProp() {
      return this.modelValue;
    },
  },

  methods: {
    clear(event) {
      event?.preventDefault();
      this.$emit("update:modelValue", "");
      this.$emit("clear", event);
    },
    onInputHandler(event) {
      event.stopPropagation();
      this.$emit("update:modelValue", event.target.value);
    },
    _classStringToObject(str) {
      const obj = {};
      if (typeof str !== "string") {
        return obj;
      }
      const classNames = str.trim().split(/\s+/);
      for (const name of classNames) {
        obj[name] = true;
      }
      return obj;
    },
  },
};
</script>
