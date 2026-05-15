<template>
  <nav class="inline-flex items-center typography-text-sm font-body">
    <ol class="flex w-auto leading-none group md:flex-wrap">
      <li class="flex items-center sm:hidden text-neutral-500">
        <SfDropdown strategy="absolute" placement="bottom-start" @update:model-value="close" v-model="dropdownOpened">
          <template #trigger>
            <SfButton
              class="relative w-5 h-5 !p-0 rounded-xs outline-secondary-600 hover:bg-transparent active:bg-transparent"
              aria-label="More breadcrumbs"
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
        v-for="(item, index) in breadcrumbs"
        :key="item.name"
        class="hidden peer sm:flex items-center text-neutral-500 last-of-type:flex last-of-type:text-neutral-900 last-of-type:font-medium"
      >
        <SfIconChevronRight v-if="index !== 0" size="sm" class="mx-0.5 text-neutral-500" />

        <SfLink
          v-if="index < breadcrumbs.length - 1"
          :href="item.link"
          variant="secondary"
          class="leading-5 no-underline hover:underline active:underline whitespace-nowrap outline-secondary-600 text-inherit"
        >
          {{ item.name }}
        </SfLink>
        <span v-else>
          {{ item.name }}
        </span>
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
    link: '#',
  },
  { name: 'Page 2', link: '#' },
  { name: 'Page 3', link: '#' },
  { name: 'Page 4', link: '#' },
  { name: 'Page 5', link: '#' },
];

const dropdownOpened = ref(false);
const close = () => {
  dropdownOpened.value = false;
};
const toggle = () => {
  dropdownOpened.value = !dropdownOpened.value;
};
</script>
