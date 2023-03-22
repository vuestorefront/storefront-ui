<template>
  <nav class="inline-flex items-center text-sm font-normal font-body">
    <ol class="flex w-auto leading-none group md:flex-wrap">
      <li class="flex items-center sm:hidden text-neutral-500">
        <VsfDropdown v-model="dropdownOpened" strategy="fixed" placement="bottom-start" @update:model-value="close">
          <template #trigger>
            <VsfButton
              class="relative w-5 h-5 !p-0 rounded-sm outline-secondary-600 hover:bg-transparent active:bg-transparent"
              aria-label="More breadcrumbs"
              type="button"
              variant="tertiary"
              square
              @click="handleClick"
            >
              <template #prefix>
                <VsfIconMoreHoriz
                  size="sm"
                  class="text-neutral-500 hover:text-primary-700 active:text-primary-800 active:bg-transparent"
                />
              </template>
            </VsfButton>
          </template>
          <div class="px-4 py-2 rounded-md shadow-md border-neutral-100">
            <li v-for="item in breadcrumbs" :key="item.name" class="py-2 last-of-type:hidden" :aria-label="item.name">
              <VsfLink
                :href="item.link"
                variant="secondary"
                class="leading-5 no-underline text-inherit hover:underline active:underline whitespace-nowrap outline-secondary-600"
              >
                {{ item.name }}
              </VsfLink>
            </li>
          </div>
        </VsfDropdown>
      </li>
      <li
        v-for="item in breadcrumbs"
        :key="item.name"
        class="peer hidden sm:block peer-[:nth-of-type(even)]:before:content-['/'] peer-[:nth-of-type(even)]:before:px-2 last-of-type:flex last-of-type:before:font-normal last-of-type:before:text-neutral-500 text-neutral-500 last-of-type:text-neutral-900 last-of-type:font-medium"
      >
        <VsfLink
          v-if="breadcrumbs.indexOf(item) === 0"
          :href="item.link"
          variant="secondary"
          class-name="inline-flex leading-5 no-underline hover:underline active:underline whitespace-nowrap outline-secondary-600 text-neutral-500"
        >
          <VsfIconHome size="sm" />
        </VsfLink>
        <VsfLink
          v-else
          :href="item.link"
          variant="secondary"
          class="leading-5 no-underline hover:underline active:underline whitespace-nowrap outline-secondary-600 text-inherit"
        >
          {{ item.name }}
        </VsfLink>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts" setup>
import { VsfDropdown, VsfButton, VsfLink, VsfIconMoreHoriz, VsfIconHome } from '@storefront-ui/vue';
import { ref } from 'vue';

const breadcrumbs = [
  {
    name: 'Home',
    link: '/page',
  },
  { name: 'Page 2', link: '/page' },
  { name: 'Page 3', link: '/page' },
  { name: 'Page 4', link: '/page' },
  { name: 'Page 5', link: '/page' },
];

const dropdownOpened = ref(false);
const close = () => {
  dropdownOpened.value = false;
};
const handleClick = () => {
  dropdownOpened.value = !dropdownOpened.value;
};
</script>
