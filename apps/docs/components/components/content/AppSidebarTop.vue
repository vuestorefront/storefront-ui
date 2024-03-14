<script setup lang="ts">
import { SfDropdown, useDisclosure } from '@storefront-ui/vue';

const { isOpen, toggle } = useDisclosure();

const { frameworks, selectedFramework, framework, setFramework } = useFramework();

function selectFramework(frameworkName: string) {
  setFramework(frameworkName);
  toggle();
}
</script>
<template>
  <div class="relative mb-4">
    <SfDropdown
      v-model="isOpen"
      class="[&>div]:w-[calc(100%-32px)] [&>div]:!left-4 [&>div]:border [&>div]:rounded !w-full z-50"
    >
      <template #trigger>
        <button
          @click="toggle()"
          class="bg-gray-100 w-full dark:bg-neutral-800 border rounded flex p-2 px-4 items-center capitalize"
        >
          <Icon :name="selectedFramework.icon" class="w-4 h-4 mr-2" />
          {{ selectedFramework.name }}
          <Icon
            name="ri:arrow-down-s-line"
            class="w-4 h-4 ml-auto"
            :class="{
              'rotate-180': isOpen,
            }"
          />
        </button>
      </template>
      <ul class="rounded bg-gray-100 w-full dark:bg-neutral-800 z-50">
        <li
          v-for="(framework, index) in frameworks"
          :key="framework.name"
          class="relative z-50"
          :class="{
            'border-t': index > 0,
          }"
        >
          <component
            :is="framework.link ? 'a' : 'button'"
            :href="framework.link"
            @click="selectFramework(framework.name)"
            :target="framework.link ? '_blank' : '_self'"
            class="py-2 px-4 bg-gray-100 w-full dark:bg-neutral-800 dark:hover:bg-neutral-700 hover:bg-gray-50 flex items-center capitalize"
          >
            <Icon :name="framework.icon" class="w-4 h-4 mr-2" />
            {{ framework.name }}
            <Icon
              v-if="framework.name === selectedFramework.name"
              name="ion:md-checkmark"
              class="w-4 h-4 ml-auto text-primary-500"
            />
            <Icon v-else-if="framework.link" name="ri:external-link-line" class="ml-1 text-sm" />
          </component>
        </li>
      </ul>
    </SfDropdown>
  </div>
</template>
