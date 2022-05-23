<template>
  <fieldset class="inline-flex rating">
    <input
      aria-label="Rating star 1 of 5"
      type="radio"
      name="rating-1"
      class="w-6 h-6 appearance-none cursor-pointer star-input"
    >
    <input
      aria-label="Rating star 2 of 5"
      type="radio"
      name="rating-1"
      class="w-6 h-6 appearance-none cursor-pointer star-input"
      checked
    >
    <input
      aria-label="Rating star 3 of 5"
      type="radio"
      name="rating-1"
      class="w-6 h-6 appearance-none cursor-pointer star-input"
    >
    <input
      aria-label="Rating star 4 of 5"
      type="radio"
      name="rating-1"
      class="w-6 h-6 appearance-none cursor-pointer star-input"
    >
    <input
      aria-label="Rating star 5 of 5"
      type="radio"
      name="rating-1"
      class="w-6 h-6 appearance-none cursor-pointer star-input"
    >
  </fieldset>
</template>

<script>

export default {
  name: "RatingButton",
}
</script>
