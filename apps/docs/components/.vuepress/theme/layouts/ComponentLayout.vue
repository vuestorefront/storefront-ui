<template>
  <Layout :hideBreadcrumbs="true" :key="`${$route.path}-toggle`">
    <template #before-content>
      <span v-if="framework === 'vue'" class="px-2 py-1 text-sm font-medium rounded bg-green bg-opacity-20 text-green">
        Vue
      </span>
      <span v-else class="px-2 py-1 text-sm font-medium text-blue-500 bg-blue-500 rounded bg-opacity-20"> React </span>
    </template>
    <template #sidebar-top>
      <div class="relative mb-4 text-black content-menu dark:text-white" ref="menu">
        <button
          @click="menuOpen = !menuOpen"
          class="relative flex items-center w-full p-2 transition-colors border-2 rounded dark:border-zinc-700"
        >
          <template v-if="framework === 'vue'">
            <iconify-icon icon="vscode-icons:file-type-vue" class="mr-2" height="20" />
            Vue
          </template>
          <template v-else-if="framework === 'react'">
            <iconify-icon icon="logos:react" class="mr-2" height="16" />
            React
          </template>
          <iconify-icon icon="majesticons:selector-line" class="absolute right-2" />
        </button>
        <div
          class="absolute z-10 w-full mt-2 bg-white border-2 rounded shadow-md top-full dark:bg-zinc-900 dark:border-zinc-700"
          v-if="menuOpen"
        >
          <RouterLink
            v-if="vueLink"
            :to="vueLink"
            class="relative flex items-center w-full p-2 hover:bg-neutral-100 dark:hover:bg-zinc-800"
          >
            <iconify-icon icon="vscode-icons:file-type-vue" class="mr-2" height="20" />
            Vue
            <iconify-icon v-if="framework === 'vue'" icon="ri:check-line" class="absolute right-2" />
          </RouterLink>
          <RouterLink
            v-if="reactLink"
            :to="reactLink"
            class="flex items-center w-full p-2 hover:bg-neutral-100 dark:hover:bg-zinc-800"
          >
            <iconify-icon icon="logos:react" class="mr-2" height="16" />
            React
            <iconify-icon v-if="framework === 'react'" icon="ri:check-line" class="absolute right-2" />
          </RouterLink>
        </div>
      </div>
    </template>
  </Layout>
</template>
<script>
import components from '../../../utils/components.json';
import blocks from '../../../utils/blocks.json';
export default {
  name: 'ComponentLayout',
  mounted() {
    document.body.addEventListener('click', (e) => {
      if (this.$refs.menu && !this.$refs.menu.contains(e.target)) {
        this.menuOpen = false;
      }
    });
  },
  data() {
    return {
      menuOpen: false,
    };
  },
  computed: {
    framework() {
      return this.$route.path.includes('vue') ? 'vue' : 'react';
    },
    type() {
      if (this.$route.path.includes('blocks')) return 'blocks';
      return 'components';
    },
    reactLink() {
      return this.findCounterPartLink('vue');
    },
    vueLink() {
      return this.findCounterPartLink('react');
    },
  },
  methods: {
    findCounterPartLink(currentFramework) {
      const path = this.$route.path.replace(currentFramework, currentFramework === 'react' ? 'vue' : 'react');
      const files = this.type === 'components' ? components : blocks;
      const findCounterPart = files.vue.some((name) => {
        const componentName = this.type === 'components' ? name.toLowerCase() : name;
        return componentName.includes(path.split('/').pop().split('.')[0]);
      });
      if (findCounterPart) {
        return path;
      }
    },
  },
};
</script>
