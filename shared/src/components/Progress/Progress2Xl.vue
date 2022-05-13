<template>
  <div
    role="progressbar"
    :aria-valuenow="value"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-label="Loading"
  >
    <svg
      width="96"
      height="96"
      stroke-width="4"
      viewPort="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <circle
          r="44"
          cx="48"
          cy="48"
          stroke="#e6e6e6"
          fill="none"
          stroke-dasharray="276.32, 276.32"
          class="origin-center rotate-[-90deg]"
        />
        <circle
          r="44"
          cx="48"
          cy="48"
          stroke="#16A34A"
          fill="none"
          :stroke-dasharray="`${276.32 * (value / 100)}, 276.32`"
          class="transition-all ease-in-out duration-[600ms] origin-center rotate-[-90deg]"
        />
        <text
          text-anchor="middle"
          alignment-baseline="central"
          class="font-medium origin-center stroke-0 fill-gray-900 font-body stroke-black"
          x="50%"
          y="50%"
        >{{ value }}%</text>
      </g>
    </svg>
  </div>
</template>

<script>

export default {
  name: 'Progress2Xl',
  props: {
    value: {
      type: Number,
      default: 0
    }
  }
}
</script>
