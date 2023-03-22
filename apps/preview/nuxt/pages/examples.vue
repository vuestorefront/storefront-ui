<template>
  <div class="e-page-examples">
    <div v-if="!isDocs" class="sidebar" :class="!isOpen && 'sidebar-collapsed'">
      <header class="sidebar-heading">
        <h2>StorefrontUI v2</h2>
        <h3>Vue components</h3>
      </header>
      <SfButton
        class="sidebar-toggle"
        :variant="SfButtonVariant.tertiary"
        :size="SfButtonSize.sm"
        :aria-label="isOpen ? 'Hide sidebar' : 'Open sidebar'"
        @click="isOpen = !isOpen"
      >
        <template #prefix>
          <SfIconChevronLeft v-if="isOpen" />
          <SfIconChevronRight v-else />
        </template>
      </SfButton>
      <ul class="sidebar-list flex flex-col">
        <li v-for="component in components" :key="component">
          <NuxtLink v-slot="{ navigate }" :to="`/examples/${component}`" custom>
            <SfListItem
              tag="span"
              :selected="currentRoute.path === `/examples/${component}`"
              :class="{ 'font-medium': currentRoute.path === `/examples/${component}` }"
              @click="navigate"
            >
              {{ component }}
            </SfListItem>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <NuxtPage />
  </div>
</template>

<script setup>
import {
  SfButton,
  SfButtonVariant,
  SfButtonSize,
  SfListItem,
  SfIconChevronLeft,
  SfIconChevronRight,
} from '@storefront-ui/vue';

const { currentRoute } = useRouter();

const files = import.meta.glob('./examples/*.vue');
const components = Object.keys(files)
  .map((file) => file.match(/([\w\d_-]*)\.?[^\\\/]*$/i)[1])
  .sort();

const isOpen = ref(true);
const isDocs = computed(() => currentRoute.value.query.docs);
</script>
