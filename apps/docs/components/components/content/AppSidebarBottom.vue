<script setup lang="ts">
import { components } from '~/utils/components';
import { blocks } from '~/utils/blocks';
import type { NavItem } from '@nuxt/content/dist/runtime/types';

type Framework = {
  name: 'vue' | 'react';
  icon: string;
};
const { frameworks, selectedFramework, framework } = useFramework();
const links = computed<NavItem[]>(() => {
  return [
    {
      title: 'Components',
      _path: '/components',

      children: [
        {
          title: 'All Components',
          _path: '/components',
          _id: 'all-components',
          sidebarNesting: 'inline',
        },
        ...(components[selectedFramework.value.name as 'vue' | 'react']?.map((component: string) => ({
          title: component.replace('Sf', ''),
          _path: `/${selectedFramework.value.name.toLowerCase()}/components/${component
            .replace('Sf', '')
            .toLowerCase()}`,
          _id: component,
          sidebarNesting: 'inline',
        })) ?? []),
      ],
    },
    {
      title: 'Blocks',
      _path: '/blocks',

      children: [
        {
          title: 'All Blocks',
          _path: '/blocks',
          _id: 'all-blocks',
          sidebarNesting: 'inline',
        },
        ...(blocks[selectedFramework.value.name as 'vue' | 'react']?.map((block: string) => ({
          title: block.replace('Sf', ''),
          _path: `/${selectedFramework.value.name.toLowerCase()}/blocks/${block.toLowerCase()}`,
          _id: block,
          sidebarNesting: 'inline',
        })) ?? []),
      ],
    },
    {
      title: selectedFramework.value.name === 'vue' ? 'Composables' : 'Hooks',
      _path: '/hooks',
      children: [
        {
          title: `All ${selectedFramework.value.name === 'vue' ? 'Composables' : 'Hooks'}`,
          _path: '/hooks',
          _id: 'all-hooks',
          sidebarNesting: 'inline',
        },
        ...(hooks[selectedFramework.value.name as 'vue' | 'react']?.map((hook: string) => ({
          title: hook,
          _path: `/${selectedFramework.value.name.toLowerCase()}/hooks/${hook.toLowerCase()}`,
          _id: hook,
          sidebarNesting: 'inline',
        })) ?? []),
      ],
    },
  ];
});
</script>

<template>
  <AppSidebarTree :navItems="links" :level="1" :root="'/'" />
</template>
