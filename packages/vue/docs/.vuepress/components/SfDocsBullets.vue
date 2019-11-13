<template>
  <SfBullets :current="currentPage" v-bind="$attrs" @click="go($event)" />
</template>

<script>
export default {
  data() {
    return {
      currentPage: 0
    };
  },
  methods: {
    go(pageIdx) {
      this.currentPage = pageIdx;
    }
  }
};
</script>
