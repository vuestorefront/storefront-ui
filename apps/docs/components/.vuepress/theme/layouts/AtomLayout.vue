<template>
  <Layout :hideBreadcrumbs="true" :key="`${$route.path}-toggle`" :custom-toc="tocHeaders">
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
    <template #after-content>
      <div class="flex items-center border-b-2 custom-block dark:border-zinc-700">
        <button
          v-for="{ label, value } in tabOptions"
          :key="value"
          @click="changeTab(value)"
          class="px-6 py-2 border-b-2"
          style="margin-bottom: -2px"
          :class="{
            'box-border border-green text-black dark:text-white': selectedTab === value,
            'border-transparent': selectedTab !== value,
          }"
        >
          {{ label }}
        </button>
      </div>
      <KeepAlive>
        <div ref="tabs">
          <Content v-for="{ value } in tabOptions" :key="value" :slot-key="value" v-if="selectedTab === value" />
        </div>
      </KeepAlive>
    </template>
  </Layout>
</template>
<script>
import components from '../../../utils/components.json';

export default {
  name: 'ComponentLayout',
  created() {
    const hash = this.$route.hash.substring(1);
    this.selectedTab = this.tabOptions.find((option) => option.value === hash)?.value ?? 'usage';
  },
  mounted() {
    document.body.addEventListener('click', this.onClickOutsideHandler);
  },
  unmounted() {
    document.body.removeEventListener('click', this.onClickOutsideHandler);
  },
  data() {
    return {
      menuOpen: false,
      tabOptions: [
        { label: 'Usage', value: 'usage' },
        { label: 'API', value: 'api' },
        { label: 'Source', value: 'source' },
      ],
      selectedTab: 'usage',
      tocHeaders: [],
    };
  },
  computed: {
    framework() {
      return this.$route.path.includes('vue') ? 'vue' : 'react';
    },
    reactLink() {
      const path = this.$route.path.replace('vue', 'react');
      if (components.react.some((name) => name.toLowerCase().includes(path.split('/').pop().split('.')[0]))) {
        return path;
      }
    },
    vueLink() {
      const path = this.$route.path.replace('react', 'vue');
      if (components.vue.some((name) => name.toLowerCase().includes(path.split('/').pop().split('.')[0]))) {
        return path;
      }
    },
  },
  methods: {
    changeTab(newTab) {
      this.selectedTab = newTab;
      this.$router.replace({ hash: newTab });
    },
    onClickOutsideHandler(e) {
      if (this.$refs.menu && !this.$refs.menu.contains(e.target)) {
        this.menuOpen = false;
      }
    },
    async loadHeadings() {
      // wait for the DOM to update
      await this.$nextTick();
      return this.$root.$el
        ? (this.tocHeaders = Array.from(this.$root.$el.querySelectorAll('main h1,main h2,main h3')).map((heading) => {
            return {
              slug: heading.id,
              title: heading.innerText,
              level: parseInt(heading.tagName.substring(1)),
            };
          }))
        : [];
    },
  },
  watch: {
    $route() {
      this.menuOpen = false;
      this.loadHeadings();
    },
    selectedTab: {
      handler() {
        this.loadHeadings();
      },
      // force eager callback execution
      immediate: true,
    },
  },
};
</script>
