<template>
  <div class="flex items-center">
    <progress
      id="progressbar"
      :value="value"
      max="100"
      class="h-6 progress-linear"
    />
    <label
      for="progressbar"
      class="ml-1 text-xs font-medium font-body"
    >{{ value }}%</label>
  </div>
</template>

<script>

export default {
  name: 'SfProgressLinear',
  props: {
    value: {
      type: Number,
      default: 0
    }
  }
}
</script>
