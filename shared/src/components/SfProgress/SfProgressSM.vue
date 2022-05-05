<template>
  <div
    role="progressbar"
    :aria-valuenow="value"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-label="Loading"
  >
    <svg
      width="20"
      height="20"
      stroke-width="2"
      class="-rotate-90"
      viewPort="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        r="9.165"
        cx="10"
        cy="10"
        stroke="#e6e6e6"
        fill="none"
        stroke-dasharray="57.556, 57.556"
      />
      <circle
        r="9.165"
        cx="10"
        cy="10"
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
  name: 'SfProgressSM',
  props: {
    value: {
      type: Number,
      default: 0
    }
  }
}
</script>
