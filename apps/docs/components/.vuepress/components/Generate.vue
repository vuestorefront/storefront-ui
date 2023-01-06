<template>
  <div class="custom-block border rounded bg-white mt-4 generate">
    <iframe :src="exampleUrl" class="w-full h-full" />
  </div>
</template>

<script>
import components from '../../utils/components.json';

export default {
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

      return `${this.$themeConfig.DOCS_EXAMPLES_REACT}/examples/${componentNameFull}?docs=true`;
    },
  },
};
</script>

<style scoped>
.generate {
  height: 500px;
}
</style>
