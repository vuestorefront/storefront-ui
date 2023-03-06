<template>
  <div class="custom-block border bg-white mt-4" :class="{ generate: !showcasePath }">
    <iframe :src="exampleUrl" :allow="allow" class="w-full h-full" />
  </div>
</template>

<script>
import components from '../../utils/components.json';

export default {
  props: {
    showcasePath: {
      type: String,
      default: undefined,
    },
    allow: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    frameworkName() {
      return this.$route.path.split('/')[1];
    },
    componentName() {
      return this.$route.path.split('/').pop()?.split('.')[0];
    },
    exampleUrl() {
      const componentNameFull = components[this.frameworkName].find((component) =>
        component.toLowerCase().includes('vsf' + this.componentName),
      );

      return `${
        this.frameworkName === 'react'
          ? this.$themeConfig.DOCS_EXAMPLES_REACT_PATH
          : this.$themeConfig.DOCS_EXAMPLES_VUE_PATH
      }/${this.showcasePath ? `showcases/${this.showcasePath}` : `examples/${componentNameFull}`}?docs=true`;
    },
  },
};
</script>

<style scoped>
.generate {
  height: 500px;
}
</style>
