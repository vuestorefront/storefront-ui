<template>
  <div class="e-page-examples">
    <div v-if="!isDocs" class="sidebar" :class="!isOpen && 'sidebar-collapsed'">
      <button class="sidebar-toggle" :class="!isOpen && 'sidebar-toggle-collapsed'" @click="isOpen = !isOpen">
        &lt;&lt;
      </button>
      <h2 class="sidebar-heading">Components (Vue)</h2>
      <ul class="sidebar-list">
        <li
          v-for="component in components"
          :key="component"
          :class="currentRoute.path === `/examples/${component}` ? 'active' : ''"
        >
          <NuxtLink :to="`/examples/${component}`">{{ component }}</NuxtLink>
        </li>
      </ul>
    </div>
    <NuxtPage />
  </div>
</template>

<script setup>
const { currentRoute } = useRouter();

const files = import.meta.glob('./examples/*.vue');
const components = Object.keys(files)
  .map((file) => file.match(/([\w\d_-]*)\.?[^\\\/]*$/i)[1])
  .sort();

const isOpen = ref(true);
const isDocs = computed(() => currentRoute.value.query.docs);
</script>
