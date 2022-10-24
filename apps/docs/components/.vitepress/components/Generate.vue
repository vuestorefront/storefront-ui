<template>
    <a :href="exampleUrl">Link</a>
    <iframe :src="exampleUrl" style="width: 100%; height: 500px;"></iframe>
</template>

<script setup lang="ts">
import { useRoute } from 'vitepress'
import { computed } from 'vue';

const route = useRoute();
const frameworkName = computed(() => route.path.split('/')[1])
const componentName = computed(() => route.path.split('/').pop()?.split('.')[0])
const isProd = import.meta.env.PROD;
const files = import.meta.glob('../../../../../packages/sfui/frameworks/vue/components/**/*.vue');
const components = Object.keys(files).map((file) => file.match(/([\w\d_-]*)\.?[^\\\/]*$/i)[1])
  .sort();
const componentNameFull = components.find( component => component.toLowerCase().includes(componentName.value))
const exampleUrl = computed(() => `http://localhost:${frameworkName.value === 'vue' ? '3001' : '3002'}/examples/${componentNameFull}?docs=true`)
// TODO generate prod URLs
</script>
