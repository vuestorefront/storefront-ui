<template>
  <SfDropdown v-model="isOpen" class="relative !w-full" dropdown-class="w-full">
    <template #trigger>
      <label
        class="font-medium typography-label-sm"
        :class="{ 'text-disabled-900': isDisabled }"
      >
        Speed
        <div
          ref="selectDropdownRef"
          role="combobox"
          :aria-controls="unrefElement(listboxRef)?.id"
          :aria-expanded="isOpen"
          :aria-disabled="isDisabled"
          aria-label="Select one option"
          :aria-activedescendant="selectedOption ? `${listboxId}-${selectedOption.value}` : undefined"
          class="mt-0.5 flex items-center gap-8 relative font-normal typography-text-base ring-1 ring-inset rounded-md py-2 px-4"
          :class="
            isDisabled
              ? 'bg-disabled-100 ring-disabled-300 cursor-not-allowed'
              : 'ring-neutral-300 hover:ring-primary-700 active:ring-primary-700 active:ring-2 focus-within:ring-primary-700 focus-within:ring-2 cursor-pointer'
          "
          :tabindex="isDisabled ? undefined : 0"
          @keydown.space="isOpen = !isOpen"
          @click="!isDisabled && (isOpen = !isOpen)"
        >
          <template v-if="selectedOption">{{ selectedOption.label }}</template>
          <span v-else :class="isDisabled ? 'text-disabled-500' : 'text-neutral-500'">Choose from the list</span>
          <SfIconExpandMore
            class="ml-auto transition-transform ease-in-out duration-300"
            :class="[{ 'rotate-180': isOpen }, isDisabled ? 'text-disabled-500' : 'text-neutral-500']"
          />
        </div>
      </label>
    </template>
    <ul
      :id="`select-dropdown-${listboxId}`"
      ref="listboxRef"
      role="listbox"
      aria-label="Select one option"
      class="absolute w-full py-2 rounded-md shadow-md border border-neutral-100 bg-white z-10"
    >
      <SfListItem
        v-for="option in options"
        :id="`${listboxId}-${option.value}`"
        :key="option.value"
        role="option"
        tabindex="0"
        :aria-selected="option.value === selectedOption?.value"
        class="block"
        @click="selectOption(option)"
        @keydown.enter="selectOption(option)"
        @keydown.space="selectOption(option)"
      >
        {{ option.label }}
        <template #suffix>
          <SfIconCheck v-if="option.value === selectedOption?.value" class="text-primary-700" />
        </template>
      </SfListItem>
    </ul>
  </SfDropdown>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { unrefElement } from '@vueuse/core';
import { SfDropdown, SfIconExpandMore, SfListItem, SfIconCheck, useId, useTrapFocus } from '@storefront-ui/vue';

type OptionType = {
  label: string;
  value: string;
};

const options: OptionType[] = [
  {
    label: 'Today',
    value: 'today',
  },
  {
    label: 'Tomorrow',
    value: 'tomorrow',
  },
  {
    label: 'Anytime',
    value: 'anytime',
  },
];

const isOpen = ref(false);

const isDisabled = ref(true);
const selectedOption = ref<OptionType>();
const listboxId = useId();

const selectDropdownRef = ref<HTMLDivElement>();
const listboxRef = ref<HTMLUListElement>();

useTrapFocus(listboxRef, {
  arrowKeysOn: true,
  activeState: isOpen,
  initialFocusContainerFallback: true,
});

const selectOption = (option: OptionType) => {
  selectedOption.value = option;
  isOpen.value = false;
  unrefElement(selectDropdownRef)?.focus();
};
</script>
