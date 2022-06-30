<template>
  <div class="relative max-w-[320px] combobox combobox-list">
    <div
      class="inline-flex w-full border-gray-300 border rounded-md hover:border-primary-400 focus-within:border-2 focus-within:border-primary-500 focus-within:p-0 active:border-2 p-[1px] active:p-0"
      :class="{'border-negative-600 border-2': invalid, 'bg-gray-100/50 cursor-not-allowed border-gray-200/50 hover:border-gray-200/50': disabled}"
    >
      <input
        id="combobox-input"
        v-model="comboboxValue"
        v-focus
        :disabled="disabled"
        :required="required"
        class="flex-1 py-2 pl-4 text-gray-900 rounded-md disabled:text-gray-900/40 peer font-body outline-violet disabled:cursor-not-allowed"
        type="text"
        role="combobox"
        :placeholder="placeholder"
        aria-autocomplete="list"
        :aria-expanded="`${isListOpened}`"
        aria-controls="listbox"
        @click="isListOpened = !isListOpened"
        @focus="isListOpened = true"
        @change="$emit('selected', comboboxValue)"
        @input="$emit('selected', comboboxValue)"
      >
      <label
        for="combobox-input"
        class="text-sm -translate-y-5 font-medium pl-0 text-gray-500 absolute top-0 peer-required:after:content-['*']"
        :class="{'text-gray-900/40': disabled}"
      >
        {{ label }}
      </label>
      <button
        v-if="isRemoveButtonVisible"
        v-focus
        :aria-label="`Remove ${comboboxValue}`"
        :disabled="disabled"
        class="mr-2 rounded-md group outline-violet disabled:cursor-not-allowed disabled:bg-gray-100/50"
        @click="removeSelectedOption"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="fill-gray-500 group-disabled:fill-gray-500/50"
        >
          <path
            d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM16.295 14.885C16.6844 15.2744 16.6844 15.9056 16.295 16.295C15.9056 16.6844 15.2744 16.6844 14.885 16.295L12 13.41L9.115 16.295C8.72564 16.6844 8.09436 16.6844 7.705 16.295C7.31564 15.9056 7.31564 15.2744 7.705 14.885L10.59 12L7.705 9.115C7.31564 8.72564 7.31564 8.09436 7.705 7.705C8.09436 7.31564 8.72564 7.31564 9.115 7.705L12 10.59L14.885 7.705C15.2744 7.31564 15.9056 7.31564 16.295 7.705C16.6844 8.09436 16.6844 8.72564 16.295 9.115L13.41 12L16.295 14.885Z"
          />
          <path
            d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM16.295 14.885C16.6844 15.2744 16.6844 15.9056 16.295 16.295C15.9056 16.6844 15.2744 16.6844 14.885 16.295L12 13.41L9.115 16.295C8.72564 16.6844 8.09436 16.6844 7.705 16.295C7.31564 15.9056 7.31564 15.2744 7.705 14.885L10.59 12L7.705 9.115C7.31564 8.72564 7.31564 8.09436 7.705 7.705C8.09436 7.31564 8.72564 7.31564 9.115 7.705L12 10.59L14.885 7.705C15.2744 7.31564 15.9056 7.31564 16.295 7.705C16.6844 8.09436 16.6844 8.72564 16.295 9.115L13.41 12L16.295 14.885Z"
          />
        </svg>
      </button>
      <button
        v-focus
        :disabled="disabled"
        aria-label="Open list"
        :aria-expanded="`${isListOpened}`"
        aria-controls="listbox"
        class="pr-3 rounded-md group disabled:cursor-not-allowed outline-violet disabled:bg-gray-100/50"
        @click="isListOpened = !isListOpened"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          class="transition-transform duration-500 ease-in-out fill-gray-500 group-disabled:fill-gray-500/50"
          :class="{'rotate-180': !isListOpened}"
        >
          <path
            d="M7.82034 15.0014C7.43065 15.3903 6.79962 15.3899 6.41034 15.0006C6.02077 14.6111 6.02077 13.9794 6.41034 13.5899L10.9979 9.00237C11.3884 8.61184 12.0215 8.61184 12.4121 9.00237L16.9996 13.5899C17.3891 13.9794 17.3891 14.6111 16.9996 15.0006C16.6103 15.3899 15.9793 15.3903 15.5896 15.0014L11.705 11.1253L7.82034 15.0014Z"
          />
          <path
            d="M7.82034 15.0014C7.43065 15.3903 6.79962 15.3899 6.41034 15.0006C6.02077 14.6111 6.02077 13.9794 6.41034 13.5899L10.9979 9.00237C11.3884 8.61184 12.0215 8.61184 12.4121 9.00237L16.9996 13.5899C17.3891 13.9794 17.3891 14.6111 16.9996 15.0006C16.6103 15.3899 15.9793 15.3903 15.5896 15.0014L11.705 11.1253L7.82034 15.0014Z"
          />
        </svg>
      </button>
    </div>
    <ul
      id="listbox"
      ref="comboboxList"
      role="listbox"
      aria-label="List of colors"
      class="absolute w-full mt-1 overflow-y-auto bg-white rounded-md shadow-md font-body top-100 max-h-60"
      :class="{'hidden': !isListOpened}"
    >
      <slot>
        <li
          v-for="(option, i) in filteredOptions"
          :key="`${option}-${i}`"
          role="option"
        >
          <button
            v-focus
            class="w-full px-3 py-2 mx-1 my-1 text-left rounded-md outline-violet"
            @click="selectOption(option)"
          >
            {{ option }}
          </button>
        </li>
        <li v-if="options.length > 0 && !filteredOptions.length > 0">
          <div
            class="w-full px-4 py-3 text-left font-body"
          >
            <span>No data to display</span>
            <span class="block mt-1 text-sm text-gray-500">Additional information</span>
          </div>
        </li>
        <li v-if="!options.length > 0">
          <div
            class="flex justify-center py-6"
          >
            <SpinnerLg />
          </div>
        </li>
      </slot>
    </ul>
    <span
      v-if="invalid"
      class="block text-sm font-medium text-negative-600 font-body"
    > {{ errorText }}
</span>
    <span
      class="block text-xs text-gray-500 font-body"
      :class="{'opacity-50': disabled}"
    > {{ helpText }}
</span>
    <span
      v-if="required"
      class="block mt-4 text-sm text-gray-500 font-body"
    >*Required</span>
  </div>
</template>
<script>
import { ref, computed } from '@nuxtjs/composition-api';
import { onClickOutside } from '@vueuse/core';
import { focus } from '../../utils/focus-directive.js';
import SpinnerLg from '../Spinner/SpinnerLg.vue';

export default {
  directives: {
    focus
  },
  components: {
    SpinnerLg
  },
  props: {
label: {
      type: String,
      default: ''
    },
    helpText: {
      type: String,
      default: ''
    },
    errorText: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    invalid: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  setup(props, {emit}) {
    const isListOpened = ref(false);
    const comboboxValue = ref('');
    const comboboxList = ref(null);
    const filteredOptions = computed(() => props.options.filter(el => el.toLowerCase().includes(comboboxValue.value.toLowerCase())));
    const isRemoveButtonVisible = computed(() => !filteredOptions.value.indexOf(comboboxValue.value));

    const removeSelectedOption = () => {
      comboboxValue.value = '';
      emit('selected', comboboxValue.value);
    };
    const selectOption = (option) => {
      comboboxValue.value = option;
      isListOpened.value = false;
      emit('selected', comboboxValue.value);
    };

    onClickOutside(comboboxList, () => isListOpened.value = false);

    return {
      isListOpened,
      comboboxValue,
      comboboxList,
      filteredOptions,
      isRemoveButtonVisible,
      removeSelectedOption,
      selectOption
    };
  }
};
</script>
