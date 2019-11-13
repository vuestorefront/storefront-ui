<template>
  <SfBreadcrumbs :breadcrumbs="breadcrumbs" />
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        {
          text: "Home",
          route: {
            link: "#"
          }
        },
        {
          text: "Category",
          route: {
            link: "#"
          }
        },
        {
          text: "Pants",
          route: {
            link: "#"
          }
        }
      ]
    };
  }
};
</script>
