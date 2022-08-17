<template>
  <div class="e-page">
    <div class="e-page-component">
      <Breadcrumbs :breadcrumbs="breadcrumbs" />
    </div>
    <div class="e-page-controls"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Breadcrumbs from "../../output/blocks/Breadcrumbs.vue";

export default defineComponent({
  name: 'BreadcrumbsExample',
  components: {
    Breadcrumbs
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
});
</script>
