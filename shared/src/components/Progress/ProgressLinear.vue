<template>
  <div class="flex items-center">
    <progress
      id="progressbar"
      :value="value"
      max="100"
      class="progress-linear"
    />
    <label
      for="progressbar"
      class="ml-1 text-xs font-medium font-body"
    >{{ value }}%</label>
  </div>
</template>

<script>

export default {
  name: 'ProgressLinear',
  props: {
    value: {
      type: Number,
      default: 0
    }
  }
};
</script>
<style scoped>
.progress-linear::-webkit-progress-bar {
  @apply bg-gray-200;
}
.progress-linear::-webkit-progress-value {
  @apply bg-primary-600 transition-[width] ease-[cubic-bezier(.4,0,.6,1)] duration-200;
}
.progress-linear::-moz-progress-bar {
  @apply bg-primary-600;
}
</style>
