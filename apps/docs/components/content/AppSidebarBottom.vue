<script setup lang="ts">
import { components } from '~/utils/components';
import { blocks } from '~/utils/blocks';
import { NavItem } from '@nuxt/content/dist/runtime/types';

type Framework = {
  name: 'vue' | 'react';
  icon: string;
};
const framework = useCookie<Framework>('framework');

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
        ...(components[framework.value.name]?.map((component: string) => ({
          title: component.replace('Sf', ''),
          _path: `/${framework.value.name.toLowerCase()}/components/${component.replace('Sf', '').toLowerCase()}`,
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
        ...(blocks[framework.value.name]?.map((block: string) => ({
          title: block.replace('Sf', ''),
          _path: `/${framework.value.name.toLowerCase()}/blocks/${block.toLowerCase()}`,
          _id: block,
          sidebarNesting: 'inline',
        })) ?? []),
      ],
    },
    {
      title: framework.value.name === 'vue' ? 'Composables' : 'Hooks',
      _path: '/hooks',
      children: [
        {
          title: `All ${framework.value.name === 'vue' ? 'Composables' : 'Hooks'}`,
          _path: '/hooks',
          _id: 'all-hooks',
          sidebarNesting: 'inline',
        },
        ...(hooks[framework.value.name]?.map((hook: string) => ({
          title: hook,
          _path: `/${framework.value.name.toLowerCase()}/hooks/${hook.toLowerCase()}`,
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
