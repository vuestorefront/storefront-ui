<template>
  <form ref="referenceRef" role="search" class="relative" @submit.prevent="submit">
    <div class="flex">
      <SfInput
        ref="inputRef"
        v-model="inputModel"
        wrapper-class="w-full !ring-0 active:!ring-0 hover:!ring-0 focus-within:!ring-0 border-y border-l border-neutral-200 rounded-r-none hover:border-primary-800 active:border-primary-700 active:border-y-2 active:border-l-2 focus-within:border-y-2 focus-within:border-l-2 focus-within:border-primary-700"
        aria-label="Search"
        placeholder="Search 'jackets' or 'dresses'..."
        @focus="open"
        @keydown="handleInputKeyDown"
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
            <SfIconCancel />
          </button>
        </template>
      </SfInput>
      <SfButton type="submit" class="rounded-l-none">Search</SfButton>
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
            <p class="flex items-center text-left">
              <img
                v-if="product.image"
                :src="product.image"
                alt="product.name"
                class="rounded-sm mr-2"
                width="24"
                height="24"
              />
              <Component :is="product.thumbnail" v-else class="mr-2 text-neutral-500" />
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
  SfButton,
  SfIconCancel,
  SfIconSearch,
  SfIconGridView,
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
const { focusables: focusableElements } = useTrapFocus(dropdownListRef as Ref<HTMLElement>, {
  trapTabs: false,
  arrowKeysUpDown: true,
  activeState: isOpen,
  initialFocus: false,
});

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

const handleInputKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') reset();
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
  image?: string;
  thumbnail?: unknown;
}
const mockProducts: Product[] = [
  { id: 'j-avatar', name: 'jack', image: 'http://localhost:3100/@assets/kid.png' },
  { id: 'j-cat', name: 'jackets', thumbnail: SfIconGridView },
  { id: 'j-wom', name: 'jacket women', thumbnail: SfIconSearch },
  { id: 'j-den', name: 'jacket denim', thumbnail: SfIconSearch },
  { id: 'j-dre', name: 'jacket dress', thumbnail: SfIconSearch },
  { id: 'dr-cat', name: 'dresses', thumbnail: SfIconGridView },
  { id: 'dr-cot', name: 'cotton dresses', thumbnail: SfIconSearch },
  { id: 'dr-wom', name: 'dresses women', thumbnail: SfIconSearch },
  { id: 'dr-sum', name: 'summer dresses', thumbnail: SfIconSearch },
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
