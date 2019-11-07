<template>
  <div style="width: 200px; height: 100px; border: 1px solid #ddd">
    <SfLoader :loading="loading" v-bind="$attrs">
      <span
        style="position: absolute; width: 100%; margin-top: 40px; text-align: center"
      >
        Loaded. <button @click="onBtnClick">reload</button>
      </span>
    </SfLoader>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    };
  },
  methods: {
    triggerLoadingTimeout() {
      window.setTimeout(() => {
        this.loading = false;
      }, 3000);
    },
    onBtnClick() {
      this.loading = true;
      this.triggerLoadingTimeout();
    }
  },
  mounted() {
    this.triggerLoadingTimeout();
  }
};
</script>
