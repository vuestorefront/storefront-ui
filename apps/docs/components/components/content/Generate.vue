<template>
  <div class="custom-block">
    <iframe ref="iframeRef" :src="exampleUrl" class="generate w-full h-full border" loading="lazy" />
  </div>
</template>

<script setup>
import { components } from '../../utils/components';

const props = defineProps({
  showcasePath: {
    type: String,
    default: undefined,
  },
  noScale: {
    type: Boolean,
    default: false,
  },
  noPaddings: {
    type: Boolean,
    default: false,
  },
  allow: {
    type: String,
    default: undefined,
  },
});

const iframeRef = ref(undefined);

const config = useRuntimeConfig();

onMounted(() => {
  const iframeElement = iframeRef.value;
  window.addEventListener(
    'message',
    (e) => {
      if (e.data === 'loaded') {
        if (props.noPaddings) iframeElement?.contentWindow?.postMessage('no-paddings', '*');
        else if (props.noScale) iframeElement?.contentWindow?.postMessage('no-scale', '*');
      }
    },
    false,
  );
});

const route = useRoute();

const { selectedFramework } = useFramework();

const urlBasePath = computed(() => {
  return selectedFramework.value.name.toLowerCase() === 'react'
    ? config.public.DOCS_EXAMPLES_REACT_PATH
    : config.public.DOCS_EXAMPLES_VUE_PATH;
});

const componentName = computed(() => {
  return route.path.split('/').pop()?.split('.')[0];
});

const exampleUrl = computed(() => {
  const componentNameFull = components[selectedFramework.value.name.toLowerCase()].find((component) =>
    component.toLowerCase().includes('sf' + componentName.value),
  );

  return `${urlBasePath.value}/${
    props.showcasePath ? `showcases/${props.showcasePath}` : `examples/${componentNameFull}`
  }`;
});
</script>
