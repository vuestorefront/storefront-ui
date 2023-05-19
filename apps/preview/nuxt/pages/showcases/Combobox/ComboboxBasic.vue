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
      aria-autocomplete="both"
      :aria-disabled="isDisabled"
      :aria-expanded="isOpen"
      :aria-activedescendant="currentFocus?.id"
      :invalid="!isValid"
      :disabled="isDisabled"
      :class="[
        'cursor-pointer',
        {
          '!text-disabled-500': isDisabled,
        },
      ]"
      :wrapper-class-name="{
        '!bg-disabled-100 !ring-disabled-300 !ring-1': isDisabled,
      }"
      slot-suffix="{"
      }
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
    <div v-if="isOpen" ref="floatingRef" :style="style" class="left-0 right-0">
      <div
        v-if="isLoadingSnippets"
        class="flex items-center justify-center w-full h-20 py-2 bg-white border border-solid rounded-md border-neutral-100 drop-shadow-md"
      >
        <SfLoaderCircular />
      </div>
      <ul
        v-else
        :id="listId"
        ref="dropdownListRef"
        role="listbox"
        aria-label="Country list"
        class="py-2 bg-white border border-solid rounded-md border-neutral-100 drop-shadow-md"
      >
        <div v-if="snippets.length > 0">
          <li v-for="option in snippets" :key="option.value">
            <SfListItem
              :id="`${listId}-${option.value}`"
              as="button"
              type="button"
              class="flex justify-start"
              :aria-selected="option.value === inputModel"
              @click="selectOption(option.value)"
              @keydown="(event) => handleOptionItemKeyDown(event, option)"
            >
              <p class="text-left">
                <span :class="isDisabled ? '!text-disabled-500' : 'text-neutral-500'">
                  {{ option.label }}
                </span>
              </p>
            </SfListItem>
          </li>
        </div>
        <SfListItem v-else-if="inputModel" class-name="flex justify-start">
          <p class="text-left">
            <span>No options</span>
          </p>
        </SfListItem>
        <div v-else>
          <li v-for="option in options" :key="option.value">
            <SfListItem
              :id="`${listId}-${option.value}`"
              as="button"
              type="button"
              class="flex justify-start"
              :aria-selected="option.value === inputModel"
              @click="() => selectOption(option.value)"
              @key-down="(event) => handleOptionItemKeyDown(event, option)"
            >
              <p class="text-left">
                <span>{{ option.label }}</span>
              </p>
            </SfListItem>
          </li>
        </div>
      </ul>
    </div>
  </div>
  <p class="text-xs mt-0.5 text-neutral-500">Help text</p>
  <p class="mt-2 text-neutral-500 typography-text-sm">*Required</p>
  <p v-if="!isDisabled && isValid === false" class="text-negative-700 typography-text-sm font-medium mt-0.5">
    No option selected
  </p>
  <div class="mt-10">
    <label class="flex items-center">
      <SfSwitch :checked="isDisabled" value="disabled" @change="isDisabled = !isDisabled" />
      <span class="text-base ml-[10px] text-gray-900 cursor-pointer font-body">Disabled/Enabled</span>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { type Ref, ref, watch } from 'vue';
import { offset } from '@floating-ui/vue';
import { watchDebounced } from '@vueuse/shared';
import { unrefElement } from '@vueuse/core';
import {
  SfInput,
  SfListItem,
  SfLoaderCircular,
  SfIconExpandMore,
  SfSwitch,
  useDisclosure,
  useDropdown,
  useTrapFocus,
  InitialFocusType,
  useId,
} from '@storefront-ui/vue';

const inputModel = ref('');
const inputRef = ref();
const dropdownListRef = ref();
const isLoadingSnippets = ref(false);
const id = useId();
const listId = useId();
const isDisabled = ref(false);
const snippets = ref<{ label: string; value: string }[]>([]);
const isValid = ref<boolean | undefined>(undefined);
const { isOpen, close, open, toggle } = useDisclosure();
const { referenceRef, floatingRef, style } = useDropdown({
  isOpen,
  onClose: close,
  placement: 'bottom-start',
  middleware: [offset(4)],
});
const { current: currentFocus, focusables: focusableElements } = useTrapFocus(dropdownListRef as Ref<HTMLElement>, {
  arrowKeysOn: true,
  activeState: isOpen,
  initialFocus: InitialFocusType.autofocus,
  initialFocusContainerFallback: true,
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
  if (dropdownListRef.value) return;
  isValid.value = !!inputModel.value;
};

const handleInputKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
  if (event.key === 'Escape') handleReset();
  if (event.key === 'ArrowUp') {
    open();
    if (isOpen) {
      const focusableElementsAmount = focusableElements.value.length;
      console.log('focusables', focusableElements.value[focusableElementsAmount - 1]);
      focusableElements.value[focusableElementsAmount - 1].focus();
    }
  }
  if (event.key === 'ArrowDown') {
    open();
    focusableElements.value[0].focus();
  }
};

const handleOptionItemKeyDown = (event: KeyboardEvent<HTMLButtonElement>, option: SelectOption) => {
  if (event.key === ' ' || event.key === 'Enter') selectOption(option.value);
};

const selectOption = (phrase: string) => {
  inputModel.value = phrase;
  close();
  handleFocusInput();
};

watch(inputModel, () => {
  if (inputModel.value === '') {
    handleReset();
  }
});

watchDebounced(
  inputModel,
  () => {
    if (inputModel.value) {
      const getSnippets = async () => {
        open();
        isLoadingSnippets.value = true;
        try {
          const data = await mockAutocompleteRequest(inputModel.value);
          snippets.value = data;
        } catch (error) {
          close();
          console.error(error);
        }
        isLoadingSnippets.value = false;
      };

      getSnippets();
    }
  },
  { debounce: 500 },
);

type SelectOption = {
  label: string;
  value: string;
};
const options: SelectOption[] = [
  {
    label: 'Startup',
    value: 'startup',
  },
  {
    label: 'Business',
    value: 'business',
  },
  {
    label: 'Buses',
    value: 'buses',
  },
  {
    label: 'Enterprise',
    value: 'enterprise',
  },
];
// Just for presentation purposes. Replace mock request with the actual API call.
const delay = () => new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));
const mockAutocompleteRequest = async (phrase: string) => {
  await delay();
  const results = options.filter((option) => option.value.toLowerCase().startsWith(phrase.toLowerCase()));
  return results;
};
</script>
