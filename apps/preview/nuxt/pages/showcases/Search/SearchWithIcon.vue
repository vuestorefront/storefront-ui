<template>
  <form ref="referenceRef" role="search" class="relative" @submit.prevent="submit">
    <div class="flex">
      <SfInput
        ref="inputRef"
        v-model="inputModel"
        wrapper-class="w-full !ring-0 active:!ring-0 hover:!ring-0 focus-within:!ring-0 border-y border-l border-neutral-200 rounded-r-none hover:border-primary-800 active:border-primary-700 active:border-y-2 active:border-l-2 focus-within:border-y-2 focus-within:border-l-2 focus-within:border-primary-700"
        aria-label="Search"
        placeholder="Search 'MacBook' or 'iPhone'..."
        @focus="open"
      >
        <template #prefix><SfIconSearch /></template>
        <template #suffix>
          <button
            v-if="inputModel"
            type="button"
            aria-label="Reset search"
            class="flex rounded-md focus-visible:outline focus-visible:outline-offset"
            @click="reset"
          >
            <SfIconCancel /></button
        ></template>
      </SfInput>
      <SfButton type="submit" square aria-label="Search for a specific phrase on the page" class="rounded-l-none"
        ><SfIconSearch
      /></SfButton>
    </div>
    <div v-if="isOpen" ref="floatingRef" :style="style" class="left-0 right-0">
      <div
        v-if="isLoadingSnippets"
        class="flex items-center justify-center w-full h-screen sm:h-20 py-2 bg-white sm:border sm:border-solid sm:rounded-md sm:border-neutral-100 sm:drop-shadow-md"
      >
        <SfLoaderCircular />
      </div>
      <ul
        v-else-if="snippets.length > 0"
        ref="dropdownListRef"
        class="py-2 bg-white h-screen sm:h-auto sm:border sm:border-solid sm:rounded-md sm:border-neutral-100 sm:drop-shadow-md"
      >
        <li v-for="{ highlight, rest, product } in snippets" :key="product.id">
          <SfListItem
            tag="button"
            type="button"
            class="flex justify-start !py-4 sm:!py-2"
            @click="() => selectValue(product.name)"
            @keydown.enter.space.prevent="selectValue(product.name)"
          >
            <p class="text-left">
              <span>{{ highlight }}</span>
              <span class="font-medium">{{ rest }}</span>
            </p>
            <p class="text-left typography-text-xs text-neutral-500">{{ product.category }}</p>
          </SfListItem>
        </li>
      </ul>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { type Ref, ref, watch } from 'vue';
import { offset } from '@floating-ui/vue';
import { watchDebounced } from '@vueuse/shared';
import { unrefElement } from '@vueuse/core';
import {
  SfButton,
  SfIconCancel,
  SfIconSearch,
  SfInput,
  SfListItem,
  SfLoaderCircular,
  useDisclosure,
  useDropdown,
  useTrapFocus,
} from '@storefront-ui/vue';

const inputModel = ref('');
const inputRef = ref();
const dropdownListRef = ref();
const isLoadingSnippets = ref(false);
const snippets = ref<{ highlight: string; rest: string; product: Product }[]>([]);
const { isOpen, close, open } = useDisclosure();
const { referenceRef, floatingRef, style } = useDropdown({
  isOpen,
  onClose: close,
  placement: 'bottom-start',
  middleware: [offset(4)],
});
useTrapFocus(dropdownListRef as Ref<HTMLElement>, { arrowKeysUpDown: true, activeState: isOpen, initialFocus: false });

const submit = () => {
  close();
  alert(`Search for phrase: ${inputModel.value}`);
};

const focusInput = () => {
  const inputEl = unrefElement(inputRef)?.querySelector('input');
  inputEl?.focus();
};

const reset = () => {
  inputModel.value = '';
  snippets.value = [];
  close();
  focusInput();
};

const selectValue = (phrase: string) => {
  inputModel.value = phrase;
  close();
  focusInput();
};

watch(inputModel, () => {
  if (inputModel.value === '') {
    reset();
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

interface Product {
  id: string;
  name: string;
  category: string;
}
const mockProducts: Product[] = [
  { id: 'ip-14', name: 'iPhone 14', category: 'Smartphones' },
  { id: 'ip-14-pro', name: 'iPhone 14 Pro', category: 'Smartphones' },
  { id: 'ip-14-pro-max', name: 'iPhone 14 Pro Max', category: 'Smartphones' },
  { id: 'ip-14-plus', name: 'iPhone 14 Plus', category: 'Smartphones' },
  { id: 'ip-13', name: 'iPhone 13', category: 'Smartphones' },
  { id: 'ip-13-mini', name: 'iPhone 13 mini', category: 'Smartphones' },
  { id: 'ip-12', name: 'iPhone 12', category: 'Smartphones' },
  { id: 'ip-11', name: 'iPhone 11', category: 'Smartphones' },
  { id: 'mb-air', name: 'MacBook Air', category: 'Laptops' },
  { id: 'mb-pro-13', name: 'MacBook Pro 13"', category: 'Laptops' },
  { id: 'mb-pro-14', name: 'MacBook Pro 14"', category: 'Laptops' },
  { id: 'mb-pro-16', name: 'MacBook Pro 16"', category: 'Laptops' },
];
// Just for presentation purposes. Replace mock request with the actual API call.
const delay = () => new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));
const mockAutocompleteRequest = async (phrase: string) => {
  await delay();
  const results = mockProducts
    .filter((product) => product.name.toLowerCase().startsWith(phrase.toLowerCase()))
    .map((product) => {
      const highlight = product.name.substring(0, phrase.length);
      const rest = product.name.substring(phrase.length);
      return { highlight, rest, product };
    });
  return results;
};
</script>
