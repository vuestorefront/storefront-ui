<template>
  <div class="e-page-examples">
    <div v-if="!isDocs" class="sidebar" :class="!isOpen && 'sidebar-collapsed'">
      <header class="sidebar-heading">
        <h2>StorefrontUI v2</h2>
        <h3>Vue components</h3>
      </header>
      <VsfButton
        class="sidebar-toggle"
        :variant="VsfButtonVariant.tertiary"
        :size="VsfButtonSize.sm"
        :aria-label="isOpen ? 'Hide sidebar' : 'Open sidebar'"
        @click="isOpen = !isOpen"
      >
        <template #prefix>
          <VsfIconChevronLeft v-if="isOpen" />
          <VsfIconChevronRight v-else />
        </template>
      </VsfButton>
      <ul class="sidebar-list flex flex-col">
        <li v-for="component in components" :key="component">
          <NuxtLink v-slot="{ navigate }" :to="`/examples/${component}`" custom>
            <VsfListItem
              tag="span"
              :selected="currentRoute.path === `/examples/${component}`"
              :class="{ 'font-medium': currentRoute.path === `/examples/${component}` }"
              @click="navigate"
            >
              {{ component }}
            </VsfListItem>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <NuxtPage />
  </div>
</template>

<script setup>
import {
  VsfButton,
  VsfButtonVariant,
  VsfButtonSize,
  VsfListItem,
  VsfIconChevronLeft,
  VsfIconChevronRight,
} from '@storefront-ui/vue';

const { currentRoute } = useRouter();

const files = import.meta.glob('./examples/*.vue');
const components = Object.keys(files)
  .map((file) => file.match(/([\w\d_-]*)\.?[^\\\/]*$/i)[1])
  .sort();

const isOpen = ref(true);
const isDocs = computed(() => currentRoute.value.query.docs);
</script>
