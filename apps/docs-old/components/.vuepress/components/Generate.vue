<template>
  <div class="custom-block border bg-white mt-4" :class="{ generate: !showcasePath }">
    <iframe :src="exampleUrl" :allow="allow" class="w-full h-full" ref="iframeRef"/>
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
    noScale: {
      type: Boolean,
      default: false
    },
    noPaddings: {
      type: Boolean,
      default: false
    },
    allow: {
      type: String,
      default: undefined,
    },
  },
  data: () => {
    return {
      iframeRef: undefined
    }
  },
  mounted: function() {
    const iframeElement = this.$refs.iframeRef;
    window.addEventListener('message', (e) => {
      if (e.data === 'loaded') {
        if (this.noPaddings) iframeElement?.contentWindow?.postMessage('no-paddings', "*")
        else if (this.noScale) iframeElement?.contentWindow?.postMessage('no-scale', "*"); 
      }
    }, false);
  },
  computed: {
    frameworkName() {
      return this.$route.path.split('/')[1];
    },
    urlBasePath() {
      return this.frameworkName === 'react'
          ? this.$themeConfig.DOCS_EXAMPLES_REACT_PATH
          : this.$themeConfig.DOCS_EXAMPLES_VUE_PATH;
    },
    componentName() {
      return this.$route.path.split('/').pop()?.split('.')[0];
    },
    exampleUrl() {
      const componentNameFull = components[this.frameworkName].find((component) =>
        component.toLowerCase().includes('sf' + this.componentName),
      );

      return `${this.urlBasePath}/${this.showcasePath ? `showcases/${this.showcasePath}` : `examples/${componentNameFull}`}`;
    },
  },
};
</script>

<style scoped>
.generate {
  height: 500px;
}
</style>
