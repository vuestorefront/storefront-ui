<script setup lang="ts">
  const props = defineProps({
    framework: {
      type: String,
      default: ""
    }
  })
  const fileExtension = props.framework === 'react' ? 'tsx' : 'vue';  
  const files = import.meta.glob('../../components/*.md');
  const getComponentsPath = () => {
  if (props.framework === 'react') {
      return import.meta.glob('../../../../../packages/sfui/frameworks/react/components/**/*.tsx')
    } else {
      return import.meta.glob('../../../../../packages/sfui/frameworks/vue/components/**/*.vue')
    };
  }
  const componentsList = Object.keys(getComponentsPath()).map(file => file.replace(`.${fileExtension}`, '').replace(`../../../../../packages/sfui/frameworks/${props.framework}/components/`, '').split('/')[1])
  const docsComponentsList = Object.keys(files).map(file => file.replace('.md', '').replace('../../components/', '')).filter(name => !name.includes('index'));  
  const toc = docsComponentsList.filter(component  => componentsList.find(item => item.replace('Vsf','').toLowerCase() === component))
  const componentName = (name) => {
    return componentsList.find(item => item.replace('Vsf','').toLowerCase() === name)
  }
</script>
<template>
  <ul>
    <li v-for="(name, item) of toc" :key="item"><a :href="name">{{componentName(name)}}</a></li>
  </ul>
</template>