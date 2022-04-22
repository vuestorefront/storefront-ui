<template>
  <div class="flex items-center">
    <progress
      :value="value"
      max="100"
      class="h-6 progress-linear"
    />
    <span class="ml-1 text-xs font-medium font-body">{{ value }}%</span>
  </div>
</template>

<script>

export default {
  name: 'SfProgress',
  props: {
    value: {
      type: Number,
      default: 0
    }
  }
}
</script>
