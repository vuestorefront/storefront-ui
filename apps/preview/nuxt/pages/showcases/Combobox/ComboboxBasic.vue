<template>
  <div ref="referenceRef" class="relative">
    <label :class="['font-medium typography-label-sm', { 'text-disabled-900': isDisabled }]" :for="id"> Country </label>
    <SfInput
      :id="id"
      ref="inputRef"
      v-model="inputModel"
      role="combobox"
      aria-label="Choose country"
      placeholder="Choose country"
      :aria-controls="listId"
      aria-autocomplete="list"
      :aria-disabled="isDisabled"
      :aria-expanded="isOpen"
      :aria-activedescendant="currentFocus?.id"
      :invalid="isValid === false && !isOpen"
      :disabled="isDisabled"
      :class="[
        'cursor-pointer',
        {
          '!text-disabled-500': isDisabled,
        },
      ]"
      :wrapper-class="{
        '!bg-disabled-100 !ring-disabled-300 !hover:ring-disabled-300 !ring-1': isDisabled,
      }"
      @blur="handleBlur"
      @focus="isValid = undefined"
      @click="toggle()"
      @keydown="handleInputKeyDown"
      ><template #suffix>
        <SfIconExpandMore
          :class="[
            'ml-auto text-neutral-500 transition-transform ease-in-out duration-300',
            {
              'rotate-180': isOpen,
              '!text-disabled-500 cursor-not-allowed': isDisabled,
            },
          ]"
          @click="!isDisabled && toggle()"
        />
      </template>
    </SfInput>
    <div v-if="isOpen" ref="floatingRef" :style="style" class="left-0 right-0 z-1">
      <ul
        :id="listId"
        ref="dropdownRef"
        role="listbox"
        aria-label="Country list"
        class="max-h-80 px-1 -mx-1 py-2 bg-white border border-solid rounded-md border-neutral-100 drop-shadow-md overflow-y-auto"
      >
        <template v-if="snippets.length > 0">
          <li v-for="option in snippets" :key="option.value">
            <SfListItem
              :id="`${listId}-${option.value}`"
              tag="button"
              type="button"
              class="flex justify-start"
              :aria-selected="option.value === inputModel"
              @click="selectOption(option.label)"
              @keydown.enter.space.prevent="selectOption(option.label)"
              @keydown.esc="handleFocusInput"
            >
              <p class="text-left">
                <span>
                  {{ option.label }}
                </span>
              </p>
            </SfListItem>
          </li>
        </template>
        <p v-else-if="inputModel" class="inline-flex px-4 py-2 w-full text-left" aria-label="No options">
          <span>No options</span>
        </p>
        <template v-else>
          <li v-for="option in countriesList" :key="option.value">
            <SfListItem
              :id="`${listId}-${option.value}`"
              tag="button"
              type="button"
              class="flex justify-start"
              :aria-selected="option.value === inputModel"
              @click="selectOption(option.label)"
              @keydown.enter.space.prevent="selectOption(option.label)"
              @keydown.esc="handleFocusInput"
            >
              <p class="text-left">
                <span>{{ option.label }}</span>
              </p>
            </SfListItem>
          </li>
        </template>
      </ul>
    </div>
  </div>
  <p v-if="!isDisabled && isValid === false" class="text-negative-700 typography-text-sm font-medium mt-0.5">
    No option selected
  </p>
  <p class="text-xs mt-0.5 text-neutral-500">Help text</p>
  <p class="mt-2 text-neutral-500 typography-text-sm">*Required</p>
  <div v-if="!isOpen" class="mt-4">
    <label class="flex items-center">
      <SfSwitch :checked="isDisabled" value="disabled" @change="isDisabled = !isDisabled" />
      <span v-if="isDisabled" class="text-base ml-[10px] text-gray-900 cursor-pointer font-body">Disabled</span>
      <span v-else class="text-base ml-[10px] text-gray-900 cursor-pointer font-body">Enabled</span>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { offset } from '@floating-ui/vue';
import { unrefElement } from '@vueuse/core';
import {
  SfInput,
  SfListItem,
  SfIconExpandMore,
  SfSwitch,
  useDisclosure,
  useDropdown,
  useTrapFocus,
  useId,
} from '@storefront-ui/vue';

const inputModel = ref('');
const inputRef = ref();
const dropdownRef = ref();
const id = useId();
const listId = useId();
const isDisabled = ref(false);
const snippets = ref<{ label: string; value: string }[]>([]);
const isValid = ref<boolean | undefined>(undefined);
const isSelected = ref(false);
const { isOpen, close, open, toggle } = useDisclosure();
const { referenceRef, floatingRef, style } = useDropdown({
  isOpen,
  onClose: close,
  placement: 'bottom-start',
  middleware: [offset(4)],
});
const {
  current: currentFocus,
  focusables: focusableElements,
  updateFocusableElements,
} = useTrapFocus(dropdownRef, {
  trapTabs: false,
  arrowKeysUpDown: true,
  activeState: isOpen,
  initialFocus: false,
});

const handleFocusInput = () => {
  const inputEl = unrefElement(inputRef)?.querySelector('input');
  inputEl?.focus();
};

const handleReset = () => {
  inputModel.value = '';
  snippets.value = [];
  close();
  handleFocusInput();
};

const handleBlur = () => {
  isValid.value = !!options.find((option) => option.value.toLowerCase() === inputModel.value.toLowerCase());
};

const handleInputKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
  if (event.key === 'Escape') handleReset();
  if (event.key === 'Enter') close();
  if (event.key === 'ArrowUp') {
    open();
    if (isOpen && focusableElements.value.length > 0) {
      focusableElements.value[focusableElements.value.length - 1].focus();
    }
  }
  if (event.key === 'ArrowDown') {
    open();
    if (isOpen && focusableElements.value.length > 0) {
      focusableElements.value[0].focus();
    }
  }
};

const selectOption = (phrase: string) => {
  inputModel.value = phrase;
  isSelected.value = true;
  close();
  handleFocusInput();
};

watch(inputModel, () => {
  if (inputModel.value === '') {
    handleReset();
  } else if (inputModel.value && isSelected.value === false) {
    const getSnippets = async () => {
      open();
      try {
        const data = await mockAutocompleteRequest(inputModel.value);
        snippets.value = data;
        updateFocusableElements();
      } catch (error) {
        close();
        console.error(error);
      }
    };
    getSnippets();
  } else {
    isSelected.value = false;
  }
});

type SelectOption = {
  label: string;
  value: string;
};
const countriesList: SelectOption[] = [
  {
    label: 'Afghanistan',
    value: 'afghanistan',
  },
  {
    label: 'Albania',
    value: 'albania',
  },
  {
    label: 'Angola',
    value: 'angola',
  },
  {
    label: 'Bahamas',
    value: 'bahamas',
  },
  {
    label: 'Bangladesh',
    value: 'bangladesh',
  },
  {
    label: 'Canada',
    value: 'canada',
  },
  {
    label: 'Chile',
    value: 'chile',
  },
  {
    label: 'Czech Republic',
    value: 'czech Republic',
  },
  {
    label: 'Colombia',
    value: 'colombia',
  },
  {
    label: 'Congo',
    value: 'congo',
  },
  {
    label: 'Croatia',
    value: 'croatia',
  },
  {
    label: 'Cuba',
    value: 'cuba',
  },
  {
    label: 'Denmark',
    value: 'denmark',
  },
  {
    label: 'Dominica',
    value: 'dominica',
  },
  {
    label: 'Egypt',
    value: 'egypt',
  },
  {
    label: 'Ethiopia',
    value: 'ethiopia',
  },
  {
    label: 'Estonia',
    value: 'estonia',
  },
];
// Just for presentation purposes. Replace mock request with the actual API call.
const mockAutocompleteRequest = (phrase: string) => {
  const results = countriesList.filter((option: SelectOption) =>
    option.value.toLowerCase().startsWith(phrase.toLowerCase()),
  );
  return results;
};
</script>
