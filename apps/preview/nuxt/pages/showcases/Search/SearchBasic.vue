<template>
  <form ref="referenceRef" role="search" class="relative" @submit.prevent="submit">
    <SfInput
      ref="inputRef"
      v-model="inputModel"
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
    <div v-if="isOpen" ref="floatingRef" :style="style" class="left-0 right-0">
      <div
        v-if="isLoadingSnippets"
        class="flex items-center justify-center w-full h-20 py-2 bg-white border border-solid rounded-md border-neutral-100 drop-shadow-md"
      >
        <SfLoaderCircular />
      </div>
      <ul
        v-else-if="snippets.length > 0"
        ref="dropdownListRef"
        class="py-2 bg-white border border-solid rounded-md border-neutral-100 drop-shadow-md"
      >
        <li v-for="{ highlight, rest, product } in snippets" :key="product.id">
          <SfListItem tag="button" type="button" class="flex justify-start" @click="() => selectValue(product.name)">
            <p class="text-left">
              <span>{{ highlight }}</span>
              <span class="font-medium">{{ rest }}</span>
            </p>
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
useTrapFocus(dropdownListRef as Ref<HTMLElement>, { arrowKeysOn: true, activeState: isOpen, initialFocus: false });

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
}
const mockProducts: Product[] = [
  { id: 'ip-14', name: 'iPhone 14' },
  { id: 'ip-14-pro', name: 'iPhone 14 Pro' },
  { id: 'ip-14-pro-max', name: 'iPhone 14 Pro Max' },
  { id: 'ip-14-plus', name: 'iPhone 14 Plus' },
  { id: 'ip-13', name: 'iPhone 13' },
  { id: 'ip-13-mini', name: 'iPhone 13 mini' },
  { id: 'ip-12', name: 'iPhone 12' },
  { id: 'ip-11', name: 'iPhone 11' },
  { id: 'mb-air', name: 'MacBook Air' },
  { id: 'mb-pro-13', name: 'MacBook Pro 13"' },
  { id: 'mb-pro-14', name: 'MacBook Pro 14"' },
  { id: 'mb-pro-16', name: 'MacBook Pro 16"' },
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
