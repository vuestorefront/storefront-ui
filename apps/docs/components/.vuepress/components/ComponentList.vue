<template>
  <div class="custom-block mt-16">
    <div class="grid grid-cols-12 gap-8">
      <RouterLink
        v-for="componentName in components"
        :key="componentName"
        class="hover:-translate-y-1 hover:shadow-md transition-all border rounded p-4 col-span-12 md:col-span-6 lg:col-span-4 hover:border-black dark:hover:border-white dark:border-zinc-700"
        :to="generateComponentPath(type, componentName)"
      >
        <h4 class="font-bold">{{ componentName.replace('Vsf', '') }}</h4>
        <p class="mt-2 text-sm">{{ componentDescription(componentName) }}</p>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import components from '../../utils/components.json';
import { generateComponentPath } from '../utils/path.util';
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    components() {
      const list = this.type === 'react' ? components.react : components.vue;
      return list;
    },
  },
  methods: {
    componentDescription(componentName) {
      const componentPath = `/${this.type}` + `/components/${componentName.replace('Vsf', '').toLowerCase()}.html`
      return this.$site.pages.find((page) => page.path === componentPath)?.frontmatter?.description;
    }
  },
  data() {
    return { generateComponentPath}
  }
};
</script>
