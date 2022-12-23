<template>
    <a :href="exampleUrl">Link</a>
    <iframe :src="exampleUrl" style="width: 100%; height: 500px;"></iframe>
</template>

<script setup lang="ts">
import { useRoute } from 'vitepress'
import { computed } from 'vue';

const route = useRoute();
const frameworkName = computed(() => route.path.split('/')[import.meta.env.VITE_DOCS_BASEPATH ? 2 : 1])
const componentName = computed(() => route.path.split('/').pop()?.split('.')[0])
const files = import.meta.glob('../../../../../packages/sfui/frameworks/vue/components/**/*.vue');
const components = Object.keys(files).map((file) => file.match(/([\w\d_-]*)\.?[^\\\/]*$/i)[1])
  .sort();
const componentNameFull = components.find( component => component.toLowerCase().includes(componentName.value));

const getFrameworkBaseUrl = (frameworkName: string) => {
  switch(frameworkName) {
    case 'react':
      return import.meta.env.VITE_DOCS_EXAMPLES_REACT || 'http://localhost:3002';
    default:
      return import.meta.env.VITE_DOCS_EXAMPLES_VUE || 'http://localhost:3001';
  }
};

const exampleUrl = computed(() => `${getFrameworkBaseUrl(frameworkName.value)}/examples/${componentNameFull}?docs=true`)
</script>
