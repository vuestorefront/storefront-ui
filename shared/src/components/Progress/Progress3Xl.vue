<template>
  <div
    role="progressbar"
    :aria-valuenow="value"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-label="Loading"
  >
    <svg
      width="192"
      height="192"
      stroke-width="8"
      viewPort="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <circle
          r="88"
          cx="96"
          cy="96"
          stroke="#e6e6e6"
          fill="none"
          stroke-dasharray="552.64, 552.64"
          class="origin-center rotate-[-90deg]"
        />
        <circle
          r="88"
          cx="96"
          cy="96"
          stroke="#16A34A"
          fill="none"
          :stroke-dasharray="`${552.64 * (value / 100)}, 552.64`"
          class="transition-all ease-in-out duration-[600ms] origin-center rotate-[-90deg]"
        />
        <text
          text-anchor="middle"
          alignment-baseline="central"
          class="text-2xl font-medium origin-center stroke-0 fill-gray-900 font-body stroke-black"
          x="50%"
          y="50%"
        >{{ value }}%</text>
      </g>
    </svg>
  </div>
</template>

<script>

export default {
  name: 'Progress3Xl',
  props: {
    value: {
      type: Number,
      default: 0
    }
  }
}
</script>
