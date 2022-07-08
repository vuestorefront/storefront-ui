<template>
  <div class="flex flex-col onFocus">
    <div
      class="flex h-10 peer w-80"
    >
      <div class="relative">
        <input
          v-focus
          :value="inputValue"
          type="search"
          :disabled="disabled"
          class="w-full h-10 pl-4 text-gray-900 border border-gray-200 disabled:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 peer rounded-l-md hover:border-primary-500 active:border-2 active:border-r-0 remove-default-styling outline-violet"
          placeholder="search text"
          @input="handleSearching"
        >
        <span
          class="absolute hidden fill-gray-500 top-2 right-2"
          :class="{'!flex': !!inputValue}"
          @click="handleCancel"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM16.295 14.885C16.6844 15.2744 16.6844 15.9056 16.295 16.295C15.9056 16.6844 15.2744 16.6844 14.885 16.295L12 13.41L9.115 16.295C8.72564 16.6844 8.09436 16.6844 7.705 16.295C7.31564 15.9056 7.31564 15.2744 7.705 14.885L10.59 12L7.705 9.115C7.31564 8.72564 7.31564 8.09436 7.705 7.705C8.09436 7.31564 8.72564 7.31564 9.115 7.705L12 10.59L14.885 7.705C15.2744 7.31564 15.9056 7.31564 16.295 7.705C16.6844 8.09436 16.6844 8.72564 16.295 9.115L13.41 12L16.295 14.885Z" />
            <path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM16.295 14.885C16.6844 15.2744 16.6844 15.9056 16.295 16.295C15.9056 16.6844 15.2744 16.6844 14.885 16.295L12 13.41L9.115 16.295C8.72564 16.6844 8.09436 16.6844 7.705 16.295C7.31564 15.9056 7.31564 15.2744 7.705 14.885L10.59 12L7.705 9.115C7.31564 8.72564 7.31564 8.09436 7.705 7.705C8.09436 7.31564 8.72564 7.31564 9.115 7.705L12 10.59L14.885 7.705C15.2744 7.31564 15.9056 7.31564 16.295 7.705C16.6844 8.09436 16.6844 8.72564 16.295 9.115L13.41 12L16.295 14.885Z" />
          </svg>
        </span>
      </div>
      <slot>
        <ButtonBase
          class="rounded-l-none !shadow-none hover:!shadow-none w-25"
          :disabled="disabled"
          :class="{ '!bg-gray-200': disabled }"
          @click="$emit('click', inputValue)"
        >
          Search
        </ButtonBase>
      </slot>
    </div>
    <SheetBase
      class="relative hidden mt-1 min-h-[100px]"
    >
      <SpinnerLg
        v-if="!loaded"
        class="m-auto"
      />
      <template v-else-if="loaded">
        <ul id="listbox" class="w-80" tabindex="0" role="listbox">
          <li
            v-for="term in found"
            :key="term.result"
            class="px-4 py-2 text-base text-normal hover:bg-primary-100 active:bg-gray-100"
            role="option"
          >
            <button
              v-focus
              class="flex items-center outline-violet"
              @click="autocompleteHandler(term)"
            >
              <slot
                :name="term.result.trim().replace(/( )+/g, '-')"
                v-bind="{ term }"
              >
                <svg
                  class="w-6 h-6 mr-2 fill-gray-500"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" />
                </svg>
              </slot>
              <span class="flex flex-col items-start">
                <span>{{ term.result }}</span>
                <span class="text-sm text-gray-500">{{ term.description }}</span>
              </span>
            </button>
          </li>
        </ul>
      </template>
      <div
        v-else-if="value === undefined"
        class="flex items-start px-4 py-2 text-base text-normal hover:bg-primary-100 active:bg-gray-100 outline-violet"
      >
        <slot name="default-search" />
      </div>
    </SheetBase>
  </div>
</template>

<script>
import { ref, toRef, computed } from '@nuxtjs/composition-api';
import ButtonBase from '../Button/Primary/ButtonPrimary.vue';
import SheetBase from '../Sheet/SheetBase.vue';
import SpinnerLg from '../Spinner/SpinnerLg.vue';
import { focus } from '../../utils/focus-directive.js';

export default {
  name: 'SearchBaseWithAutocomplete',
  directives: {
    focus
  },
  components: {
    ButtonBase,
    SheetBase,
    SpinnerLg
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    searchResults: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const inputValue = ref(props.value);
    const found = ref([]);
    const searchTerms = toRef(props, 'searchResults');
    const loaded = computed(() => !!searchTerms.value);

    const handleSearching = (e) => {
      emit('input', e);
      inputValue.value = e.target.value;
      const text = e.target.value;
      if (text === '') {
        found.value = [];
        return;
      }
      const reg = new RegExp(text);
      found.value = searchTerms.value.filter(function(term) {
        if (term.result.match(reg)) {
          return term;
        }
      });
    };
    const handleCancel = () => {
      emit('click:cancel');
      inputValue.value = '';
      found.value = [];
    };
    const autocompleteHandler = (term) => {
      emit('input', term.result);
      inputValue.value = term.result;
      found.value = [];
    };
    return {
      inputValue,
      found,
      handleSearching,
      handleCancel,
      autocompleteHandler,
      loaded
    };
  }
};
</script>
