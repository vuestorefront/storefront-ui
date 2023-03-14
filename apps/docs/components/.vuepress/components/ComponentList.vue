<template>
  <div class="custom-block mt-16">
    <div class="grid grid-cols-12 gap-8 relative">
      <RouterLink
        v-for="componentName in components"
        :key="componentName"
        class="overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all border rounded-lg col-span-12 md:col-span-6 lg:col-span-4 hover:border-black dark:hover:border-white dark:border-zinc-700"
        :to="generateComponentPath(type, componentName, showcase ? 'blocks' : hook ? 'hooks' : 'components')"
      >
        <!-- TODO: Replace with images when available-->
        <!-- <div class="aspect-video bg-gradient-default w-full flex items-center justify-center">

        </div> -->
        <div class="p-4">
          <h4 class="font-bold">{{ componentName.replace('Vsf', '') }}</h4>
          <p class="mt-2 text-sm">{{ componentDescription(componentName) }}</p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import components from '../../utils/components.json';
import showcases from '../../utils/blocks.json';
import hooks from '../../utils/hooks.json';
import { generateComponentPath } from '../utils/path.util';
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    showcase: {
      type: Boolean,
      default: false,
    },
    hook: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    components() {
      const files = this.showcase ? showcases : this.hook ? hooks : components;
      const list = this.type === 'react' ? files.react : files.vue;
      return list;
    },
  },
  methods: {
    componentDescription(componentName) {
      const componentPath = `/${this.type}/${
        this.showcase ? 'showcases' : this.hook ? 'hooks' : 'components'
      }/${componentName.replace('Vsf', '').toLowerCase()}.html`;

      return this.$site.pages.find((page) => page.path.toLowerCase() === componentPath)?.frontmatter?.description;
    },
  },
  data() {
    return { generateComponentPath };
  },
};
</script>
