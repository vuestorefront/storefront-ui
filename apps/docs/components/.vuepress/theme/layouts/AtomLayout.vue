<template>
  <DefaultLayout>
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
          <div v-for="{ value } in tabOptions" v-if="selectedTab === value" :key="value">
            <div v-if="value === 'source' && $route.path.includes('/components/')" class="mt-4 custom-block tip mb-4">
              <p class="custom-block-title">Need to change the default behavior?</p>
              <p>
                By copying over our base component into your project, you can customize any behavior or stylings. Just
                make sure to use your custom component when you copy over our
                <RouterLink :to="`/${framework}/blocks`">Blocks</RouterLink>!
              </p>
            </div>
            <Content :slot-key="value" />
          </div>
        </div>
      </KeepAlive>
    </template>
  </DefaultLayout>
</template>
<script>
import DefaultLayout from './DefaultLayout.vue';
export default {
  name: 'AtomLayout',
  components: {
    DefaultLayout,
  },
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
    };
  },
  computed: {
    framework() {
      return this.$route.path.includes('vue') ? 'vue' : 'react';
    },
    reactLink() {
      const path = this.$route.path.replace('vue', 'react');
      if (this.$site.pages.map((page) => page.path).includes(path)) {
        return path;
      }
    },
    vueLink() {
      const path = this.$route.path.replace('react', 'vue');
      if (this.$site.pages.map((page) => page.path).includes(path)) {
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

<style scoped>
:deep(td, th) {
  @apply text-left !important;
}
</style>
