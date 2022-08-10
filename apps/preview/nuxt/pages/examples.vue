<template>
  <div class="e-page-examples">
    <div class="sidebar" :class="isOpen && 'sidebar-collapsed'" v-if="!isDocs">
      <button class="sidebar-toggle" :class="isOpen && 'sidebar-toggle-collapsed'" @click="isOpen = !isOpen">&lt;&lt;</button>
      <h2 class="sidebar-heading">Components</h2>
      <ul class="sidebar-list" >
        <li v-for="component in components"><NuxtLink :to="`/examples/${component}`">{{component}}</NuxtLink></li>
      </ul>
    </div>
    <NuxtPage />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
const { currentRoute } = useRouter();

const isOpen = ref();
const isDocs = computed(() => currentRoute.value.query.docs);
const components = ['VsfProgress'].sort(); //Generate component list, because we need sorted list
</script>
