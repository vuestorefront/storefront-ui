<script setup lang="ts">
import { SfDropdown, useDisclosure, SfButton } from '@storefront-ui/vue';

const { isOpen, toggle } = useDisclosure();

type Framework = {
  name: string;
  icon: string;
  link?: string;
};

const frameworks: Framework[] = [
  {
    name: 'vue',
    icon: 'logos:vue',
  },
  {
    name: 'react',
    icon: 'logos:react',
  },
];

const selectedFramework = useCookie('framework', {
  default: () => frameworks[0],
});

const route = useRoute();
const router = useRouter();

watch(
  () => route,
  () => {
    const framework = frameworks.find((framework) => route.path.includes(framework.name.toLowerCase()));
    if (framework) {
      selectedFramework.value = framework;
    }
  },
  {
    immediate: true,
  },
);

function selectFramework(framework: Framework) {
  const previousFramework = selectedFramework.value.name.toLowerCase();
  selectedFramework.value = framework;
  isOpen.value = false;
  if (route.path.includes(previousFramework)) {
    router.push(route.path.replace(previousFramework, framework.name.toLowerCase()));
  }
}
</script>
<template>
  <div class="relative mb-4">
    <SfDropdown
      v-model="isOpen"
      class="[&>div]:w-[calc(100%-3rem)] [&>div]:!left-0 [&>div]:border [&>div]:rounded w-full"
    >
      <template #trigger>
        <button
          @click="toggle()"
          class="bg-gray-100 w-full dark:bg-neutral-800 border rounded flex p-2 px-4 items-center capitalize"
        >
          <Icon :name="selectedFramework.icon" class="w-4 h-4 mr-2" />
          {{ selectedFramework.name }}
          <Icon name="ion:md-arrow-dropdown" class="w-4 h-4 ml-auto pl-4" />
        </button>
      </template>
      <ul class="rounded bg-gray-100 w-full dark:bg-neutral-800">
        <li
          v-for="(framework, index) in frameworks"
          :key="framework.name"
          class=""
          :class="{
            'border-t': index > 0,
          }"
        >
          <button
            @click="selectFramework(framework)"
            class="w-full py-2 px-4 dark:hover:bg-neutral-700 hover:bg-gray-50 flex items-center capitalize"
          >
            <Icon :name="framework.icon" class="w-4 h-4 mr-2" />
            {{ framework.name }}
            <Icon
              v-if="framework.name === selectedFramework.name"
              name="ion:md-checkmark"
              class="w-4 h-4 ml-auto text-primary-500"
            />
          </button>
        </li>
      </ul>
    </SfDropdown>
  </div>
</template>
