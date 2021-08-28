<template>
  <div id="playground">
    <sf-badge class="sf-badge--number">90</sf-badge>
    <br />
    <sf-breadcrumbs :breadcrumbs="breadc"></sf-breadcrumbs>
    <br />
    <sf-bullets :total="3" :current="1"></sf-bullets>
  </div>
</template>

<script>
// Use this component to play with other components
import SfBadge from "../src/components/atoms/SfBadge/SfBadge.vue";
import SfBreadcrumbs from "../src/components/atoms/SfBreadcrumbs/SfBreadcrumbs.vue";
import SfBullets from "../src/components/atoms/SfBullets/SfBullets.vue";
export default {
  components: {
    SfBadge,
    SfBreadcrumbs,
    SfBullets,
  },
  data: function () {
    return {
      breadc: [
        { text: "Home", link: "http://localhost:3002" },
        { text: "Category", link: "http://localhost:3002" },
        { text: "Pants", link: "http://localhost:3002" },
      ],
    };
  },
};
</script>
