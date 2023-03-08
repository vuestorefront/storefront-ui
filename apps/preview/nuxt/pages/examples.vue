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
      <ul class="sidebar-list">
        <li>
          <NuxtLink
            v-for="component in components"
            :key="component"
            v-slot="{ navigate }"
            :to="`/examples/${component}`"
            custom
          >
            <VsfListItemMenu
              tag="span"
              :active="currentRoute.path === `/examples/${component}`"
              :class="{ 'font-medium': currentRoute.path === `/examples/${component}` }"
              @click="navigate"
            >
              {{ component }}
            </VsfListItemMenu>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <NuxtPage />
  </div>
</template>

<script setup>
import VsfButton from '@storefront-ui/vue/components/VsfButton/VsfButton.vue';
import { VsfButtonVariant, VsfButtonSize } from '@storefront-ui/vue/components/VsfButton/types';
import VsfListItemMenu from '@storefront-ui/vue/components/VsfListItemMenu/VsfListItemMenu.vue';
import { VsfIconChevronLeft, VsfIconChevronRight } from '@storefront-ui/vue/components/VsfIcons/index';

const { currentRoute } = useRouter();

const files = import.meta.glob('./examples/*.vue');
const components = Object.keys(files)
  .map((file) => file.match(/([\w\d_-]*)\.?[^\\\/]*$/i)[1])
  .sort();

const isOpen = ref(true);
const isDocs = computed(() => currentRoute.value.query.docs);
</script>
