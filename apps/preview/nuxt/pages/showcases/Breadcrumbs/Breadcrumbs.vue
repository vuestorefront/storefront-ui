<template>
  <nav class="inline-flex items-center text-sm font-normal font-body">
    <ol class="flex w-auto leading-none group md:flex-wrap">
      <li class="flex items-center sm:hidden text-neutral-500">
        <SfDropdown v-model="dropdownOpened" strategy="absolute" placement="bottom-start" @update:model-value="close">
          <template #trigger>
            <SfButton
              class="relative w-5 h-5 !p-0 rounded-sm outline-secondary-600 hover:bg-transparent active:bg-transparent"
              aria-label="More breadcrumbs"
              type="button"
              variant="tertiary"
              square
              @click="toggle"
            >
              <template #prefix>
                <SfIconMoreHoriz
                  size="sm"
                  class="text-neutral-500 hover:text-primary-700 active:text-primary-800 active:bg-transparent"
                />
              </template>
            </SfButton>
          </template>
          <div class="px-4 py-2 rounded-md shadow-md border-neutral-100">
            <li v-for="item in breadcrumbs" :key="item.name" class="py-2 last-of-type:hidden">
              <SfLink
                :href="item.link"
                variant="secondary"
                class="leading-5 no-underline text-inherit hover:underline active:underline whitespace-nowrap outline-secondary-600"
              >
                {{ item.name }}
              </SfLink>
            </li>
          </div>
        </SfDropdown>
      </li>
      <li
        v-for="item in breadcrumbs"
        :key="item.name"
        class="peer hidden sm:flex peer-[:nth-of-type(even)]:before:content-['/'] peer-[:nth-of-type(even)]:before:px-2 peer-[:nth-of-type(even)]:before:leading-5 last-of-type:flex last-of-type:before:font-normal last-of-type:before:text-neutral-500 text-neutral-500 last-of-type:text-neutral-900 last-of-type:font-medium"
      >
        <SfLink
          :href="item.link"
          variant="secondary"
          class="leading-5 no-underline hover:underline active:underline whitespace-nowrap outline-secondary-600 text-inherit"
        >
          {{ item.name }}
        </SfLink>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts" setup>
import { SfDropdown, SfButton, SfLink, SfIconMoreHoriz } from '@storefront-ui/vue';
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
const toggle = () => {
  dropdownOpened.value = !dropdownOpened.value;
};
</script>
