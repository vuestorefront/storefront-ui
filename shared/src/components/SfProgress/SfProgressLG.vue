<template>
  <div>
    <svg
      id="svg"
      width="40"
      height="40"
      stroke-width="2"
      stroke="#e6e6e6"
      class="-rotate-90"
      viewPort="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <circle
          r="18.33"
          cx="20"
          cy="20"
          fill="none"
          stroke-dasharray="115.112, 115.112"
        />
        <circle
          id="bar"
          r="18.33"
          cx="20"
          cy="20"
          stroke-width="2"
          stroke="#16A34A"
          fill="none"
          :stroke-dasharray="`${115.112 * (value / 100)}` + ', 115.112'"
          class="transition-all ease-in-out duration-[600ms]"
        />
        <text
          text-anchor="middle"
          alignment-baseline="central"
          class="font-medium text-xs origin-center rotate-[90deg] fill-gray-900 font-body stroke-black stroke-0"
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
