<template>
  <label class="font-medium typography-label-sm" :for="id">Delivery</label>
  <div ref="referenceRef" class="relative">
    <div
      :id="id"
      ref="selectTriggerRef"
      role="combobox"
      :aria-controls="listboxId"
      :aria-expanded="isOpen"
      aria-label="Select one option"
      :aria-activedescendant="selectedOption ? `${listboxId}-${selectedOption.value}` : undefined"
      class="mt-0.5 flex items-center gap-8 relative font-normal typography-text-base ring-1 ring-neutral-300 ring-inset rounded-md py-2 px-4 hover:ring-primary-700 active:ring-primary-700 active:ring-2 focus:ring-primary-700 focus:ring-2 focus-visible:outline focus-visible:outline-offset cursor-pointer"
      tabindex="0"
      @keydown.space="toggle()"
      @click="toggle()"
    >
      <template v-if="selectedOption">{{ selectedOption.label }}</template>
      <span v-else class="text-neutral-500">Choose from the list</span>
      <SfIconExpandMore
        class="ml-auto text-neutral-500 transition-transform ease-in-out duration-300"
        :class="{ 'rotate-180': isOpen }"
      />
    </div>
    <ul
      v-show="isOpen"
      :id="listboxId"
      ref="floatingRef"
      role="listbox"
      aria-label="Select one option"
      class="w-full py-2 rounded-md shadow-md border border-neutral-100 bg-white z-10"
      :style="dropdownStyle"
    >
      <SfListItem
        v-for="option in options"
        :id="`${listboxId}-${option.value}`"
        :key="option.value"
        role="option"
        tabindex="0"
        :aria-selected="option.value === selectedOption?.value"
        class="block"
        :class="{ 'font-medium': option.value === selectedOption?.value }"
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
  </div>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue';
import { unrefElement } from '@vueuse/core';
import {
  useDropdown,
  useDisclosure,
  SfIconExpandMore,
  SfListItem,
  SfIconCheck,
  useId,
  useTrapFocus,
} from '@storefront-ui/vue';

type SelectOption = {
  label: string;
  value: string;
};

const options: SelectOption[] = [
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

const { close, toggle, isOpen } = useDisclosure({ initialValue: false });
const selectedOption = ref<SelectOption>();
const id = useId();
const listboxId = `select-dropdown-${id}`;
const selectTriggerRef = ref<HTMLDivElement>();

const {
  referenceRef,
  floatingRef,
  style: dropdownStyle,
} = useDropdown({
  isOpen,
  onClose: close,
});

useTrapFocus(floatingRef as Ref<HTMLUListElement>, {
  arrowKeysOn: true,
  activeState: isOpen,
  initialFocusContainerFallback: true,
});

const selectOption = (option: SelectOption) => {
  selectedOption.value = option;
  close();
  unrefElement(selectTriggerRef as Ref<HTMLDivElement>)?.focus();
};
</script>
