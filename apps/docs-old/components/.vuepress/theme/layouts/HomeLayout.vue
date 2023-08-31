<template>
  <Home>
    <div class="container relative mx-auto gap-y-16 bg-inherit">
      <Content />
    </div>
    <template #after-content>
      <div class="flex items-center border-b-2 custom-block dark:border-zinc-700">
        <button
          v-for="{ label, value } in tabOptions"
          :key="value"
          @click="changeTab(value)"
          type="button"
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
  </Home>
</template>

<script>
import Home from '@theme/layouts/Home.vue';
export default {
  components: {
    Home,
  },
  created() {
    this.loadTabs();
  },
  mounted() {
    let githubScript = document.createElement('script');
    githubScript.setAttribute('src', 'https://buttons.github.io/buttons.js');
    githubScript.setAttribute('async', 'true');
    githubScript.setAttribute('defer', 'true');

    document.head.appendChild(githubScript);
  },
  data() {
    return {
      tabOptions: [],
      tocHeaders: [],
    };
  },
  methods: {
    changeTab(newTab) {
      this.selectedTab = newTab;
      this.$router.replace({ hash: newTab });
    },
    loadTabs() {
      const hash = this.$route.hash.substring(1);

      if (!this.$page.frontmatter.tabOptions) {
        this.tabOptions = [];
        this.selectedTab = '';
        return;
      }
      this.tabOptions = this.$page.frontmatter.tabOptions.map((option) => ({
        label: option.charAt(0).toUpperCase() + option.slice(1),
        value: option,
      }));
      this.selectedTab = this.tabOptions.find((option) => option.value === hash)?.value ?? this.tabOptions[0].value;
    },
  },
  watch: {
    $route() {
      // this.menuOpen = false;
      this.loadTabs();
    },
  },
};
</script>
