<template>
  <SfDropdown v-model="isOpen" class="!w-full relative" dropdown-class="!w-full">
    <template #trigger>
      <label class="font-medium typography-label-sm cursor-pointer w-full" @click="isOpen = !isOpen"
        >Product
        <div
          :aria-controls="`select-dropdown-${listboxId}`"
          :aria-expanded="isOpen"
          aria-label="Select one option"
          :class="[
            'flex items-center relative font-normal ring-1 ring-gray-200 ring-inset rounded-md py-2 pl-4 pr-3 bg-white hover:ring-primary-700 active:ring-primary-700 active:ring-2 focus-within:ring-primary-700 focus-within:ring-2',
          ]"
          role="combobox"
          tabindex="0"
          @keydown.space="isOpen = !isOpen"
        >
          {{ selectedOption ? selectedOption : 'Choose from the list' }}
          <div class="ml-auto text-neutral-500">
            <SfIconExpandMore :class="['transition-transform ease-in-out duration-300', { 'rotate-180': isOpen }]" />
          </div>
        </div>
      </label>
    </template>
    <ul
      v-if="isOpen"
      :id="`select-dropdown-${listboxId}`"
      class="absolute w-full rounded-md shadow-md border border-neutral-100 bg-white z-1"
    >
      <template v-if="options.length > 0">
        <SfListItem v-for="{ label, value } in options" :key="value" class="block" @click="handleSelect(label)">
          {{ label }}</SfListItem
        >
      </template>
      <template v-else>
        <li>
          <SfLoaderCircular size="xl" class="!block my-6 mx-auto" />
        </li>
      </template>
    </ul>
  </SfDropdown>
</template>

<script lang="ts" setup>
import { ref, type Ref, onMounted } from 'vue';
import { SfIconExpandMore, SfListItem, SfDropdown, SfLoaderCircular, useId } from '@storefront-ui/vue';

type OptionType = {
  label: string;
  value: string;
};

const isOpen = ref(false);
const listboxId = useId();
const selectedOption = ref('');
const options: Ref<Array<OptionType>> = ref([]);
const products = [
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
];

const handleSelect = (option: string) => {
  selectedOption.value = option;
  isOpen.value = false;
};

onMounted(() => {
  setTimeout(() => (options.value = options.value.concat(products)), 7000);
});
</script>
