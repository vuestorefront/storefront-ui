<template>
  <div>
    <svg
      id="svg"
      width="20"
      height="20"
      stroke-width="2"
      stroke="#e6e6e6"
      class="-rotate-90"
      viewPort="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        r="9.165"
        cx="10"
        cy="10"
        fill="none"
        stroke-dasharray="57.556, 57.556"
      />
      <circle
        id="bar"
        r="9.165"
        cx="10"
        cy="10"
        stroke-width="2"
        stroke="#16A34A"
        fill="none"
        :stroke-dasharray="`${57.556 * (value / 100)}` + ', 57.556'"
        class="transition-all ease-in-out duration-[600ms]"
      />
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
