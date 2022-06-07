<template>
  <div
    role="progressbar"
    :aria-valuenow="value"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-label="Loading"
  >
    <svg
      width="56"
      height="56"
      stroke-width="3"
      viewPort="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <circle
          r="25.66"
          cx="28"
          cy="28"
          stroke="#e6e6e6"
          fill="none"
          stroke-dasharray="161.144, 161.144"
          class="origin-center rotate-[-90deg]"
        />
        <circle
          r="25.66"
          cx="28"
          cy="28"
          stroke="#16A34A"
          fill="none"
          :stroke-dasharray="`${161.144 * (value / 100)}, 161.144`"
          class="transition-all ease-in-out duration-[600ms] origin-center rotate-[-90deg]"
        />
        <text
          text-anchor="middle"
          alignment-baseline="central"
          class="text-xs font-medium stroke-0 fill-gray-900 font-body stroke-black"
          x="50%"
          y="50%"
        >{{ value }}%</text>
      </g>
    </svg>
  </div>
</template>

<script>

export default {
  name: 'ProgressXl',
  props: {
    value: {
      type: Number,
      default: 0
    }
  }
};
</script>
