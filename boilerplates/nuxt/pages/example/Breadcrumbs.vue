<template>
  <div class="ml-4 mt-4">
    <!-- eslint-disable-next-line -->
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
  </div>
</template>

<script>
/* eslint-disable */
import Breadcrumbs from "../../../../mitosis/output/vue/vue2/src/blocks/Breadcrumbs.vue";

export default {
  name: "bread-crumbs",
  components: {
    Breadcrumbs,
  },
  data() {
    return {
      breadcrumbs: [
        { name: "Page 1", link: "/page1" },
        { name: "Page 2", link: "/page1" },
        { name: "Page 3", link: "/page1" },
        { name: "Page 4", link: "/page1" },
        { name: "Page 5", link: "/page1" },
        { name: "Page 6", link: "/page1" },
      ],
    };
  },
};
</script>
<style>
.breadcrumb-item:nth-of-type(1n+3) {
  @apply before:content-['/'] before:mx-2;
}
.breadcrumb-item:last-child > a {
  @apply font-medium text-gray-900 no-underline;
}
</style>

