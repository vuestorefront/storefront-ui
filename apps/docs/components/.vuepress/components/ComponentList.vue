<template>
  <div class="custom-block mt-16">
    <div class="grid grid-cols-12 gap-8 relative">
      <RouterLink
        v-for="componentName in components"
        :key="componentName"
        class="overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all border rounded-lg col-span-12 md:col-span-6 lg:col-span-4 hover:border-black dark:hover:border-white dark:border-zinc-700"
        :to="generateComponentPath(framework, componentName, type)"
      >
        <div v-if="!hideThumbnail" class="w-full flex items-center justify-center bg-gray-100">
          <img
            :src="`/thumbnails/components/${componentName.replace('Vsf', '')}.png`"
            class="w-full h-full object-cover"
            :alt="componentName"
          />
        </div>
        <div class="p-4">
          <h4 class="font-bold">{{ componentName.replace('Vsf', '') }}</h4>
          <p v-if="!hideDescription" class="mt-2 text-sm">{{ componentDescription(componentName) }}</p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import components from '../../utils/components.json';
import blocks from '../../utils/blocks.json';
import hooks from '../../utils/hooks.json';
import { generateComponentPath } from '../utils/path.util';
export default {
  props: {
    framework: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'components',
    },
    hideThumbnail: {
      type: Boolean,
      default: false,
    },
    hideDescription: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    components() {
      const files = this.type === 'blocks' ? blocks : this.type === 'hooks' ? hooks : components;
      const list = this.framework === 'react' ? files.react : files.vue;
      return list;
    },
  },
  methods: {
    componentDescription(componentName) {
      const componentPath = `/${this.framework}/${this.type}/${componentName.replace('Vsf', '').toLowerCase()}.html`;

      return this.$site.pages.find((page) => page.path.toLowerCase() === componentPath)?.frontmatter?.description;
    },
  },
  data() {
    return { generateComponentPath };
  },
};
</script>
