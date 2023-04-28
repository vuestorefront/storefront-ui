<template>
  <SfDropdown v-model="isOpen" class="!w-full relative" dropdown-class="!w-full">
    <template #trigger>
      <label :class="['font-medium typography-label-sm w-full', { 'cursor-not-allowed text-disabled-900': isDisabled }]"
        >Speed
        <div
          :aria-controls="`select-dropdown-${listboxId}`"
          :aria-expanded="isOpen"
          aria-label="Select one option"
          :class="[
            'flex items-center relative font-normal ring-1 ring-inset rounded-md py-2 px-4',
            { 'bg-disabled-100 ring-disabled-300': isDisabled },
          ]"
          role="combobox"
          :tabindex="isDisabled ? -1 : 0"
        >
          <span :class="['text-neutral-500', { '!text-disabled-500': isDisabled }]">Choose from the list</span>
          <div class="ml-auto text-neutral-500">
            <SfIconExpandMore
              :class="[
                'transition-transform ease-in-out duration-300',
                { 'rotate-180': isOpen, '!text-disabled-500': isDisabled },
              ]"
            />
          </div>
        </div>
      </label>
    </template>
    <ul
      v-if="isOpen"
      :id="`select-dropdown-${listboxId}`"
      class="absolute w-full rounded-md shadow-md border border-neutral-100 bg-white z-1"
    >
      <SfListItem v-for="{ label, value } in options" :key="value" class="block" @click="handleSelect(label)">
        {{ label }}
        <template #suffix>
          <SfIconCheck v-if="label === selectedOption" class="text-primary-700" />
        </template>
      </SfListItem>
    </ul>
  </SfDropdown>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue';
import { SfIconExpandMore, SfListItem, SfDropdown, SfIconCheck, useId } from '@storefront-ui/vue';

type OptionType = {
  label: string;
  value: string;
};

const isOpen = ref(false);
const isDisabled = ref(true);
const listboxId = useId();
const selectedOption = ref('');
const options: Ref<Array<OptionType>> = ref([
  {
    label: 'Startup',
    value: 'startup',
  },
  {
    label: 'Business',
    value: 'business',
  },
  {
    label: 'Enterprise',
    value: 'enterprise',
  },
]);

const handleSelect = (option: string) => {
  selectedOption.value = option;
  isOpen.value = false;
};
</script>
