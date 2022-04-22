<template>
  <div>
    <svg
      id="svg"
      width="96"
      height="96"
      stroke-width="4"
      stroke="#e6e6e6"
      class="-rotate-90"
      viewPort="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <circle
          r="44"
          cx="48"
          cy="48"
          fill="none"
          stroke-dasharray="276.32, 276.32"
        />
        <circle
          id="bar"
          r="44"
          cx="48"
          cy="48"
          stroke-width="4"
          stroke="#16A34A"
          fill="none"
          :stroke-dasharray="`${276.32 * (value / 100)}` + ', 276.32'"
          class="transition-all ease-in-out duration-[600ms]"
        />
        <text
          text-anchor="middle"
          alignment-baseline="central"
          class="font-medium origin-center rotate-[90deg] fill-gray-900 font-body stroke-black stroke-0"
          x="50%"
          y="50%"
        >{{ value }}%</text>
      </g>
    </svg>
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
