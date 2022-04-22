<template>
  <div>
    <svg
      id="svg"
      width="24"
      height="24"
      stroke-width="2"
      stroke="#e6e6e6"
      class="-rotate-90"
      viewPort="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        r="11"
        cx="12"
        cy="12"
        fill="none"
        stroke-dasharray="69.08, 69.08"
      />
      <circle
        id="bar"
        r="11"
        cx="12"
        cy="12"
        stroke-width="2"
        stroke="#16A34A"
        fill="none"
        :stroke-dasharray="`${69.08 * (value / 100)}` + ', 69.08'"
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
