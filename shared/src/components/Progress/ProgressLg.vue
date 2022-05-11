<template>
  <div
    role="progressbar"
    :aria-valuenow="value"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-label="Loading"
  >
    <svg
      width="40"
      height="40"
      stroke-width="2"
      viewPort="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <circle
          r="18.33"
          cx="20"
          cy="20"
          stroke="#e6e6e6"
          fill="none"
          stroke-dasharray="115.112, 115.112"
          class="origin-center rotate-[-90deg]"
        />
        <circle
          r="18.33"
          cx="20"
          cy="20"
          stroke="#16A34A"
          fill="none"
          :stroke-dasharray="`${115.112 * (value / 100)}, 115.112`"
          class="transition-all ease-in-out duration-[600ms] origin-center rotate-[-90deg]"
        />
        <text
          text-anchor="middle"
          alignment-baseline="central"
          class="text-xs font-medium origin-center stroke-0 fill-gray-900 font-body stroke-black"
          x="50%"
          y="50%"
        >{{ value }}%</text>
      </g>
    </svg>
  </div>
</template>

<script>

export default {
  name: 'ProgressLg',
  props: {
    value: {
      type: Number,
      default: 0
    }
  }
}
</script>
