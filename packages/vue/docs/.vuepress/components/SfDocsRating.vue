<template>
  <SfRating :max="ratingMaxScore" :score="ratingScore" v-bind="$attrs" />
</template>

<script>
export default {
  data() {
    return {
      ratingMaxScore: 5,
      ratingScore: 3
    };
  }
};
</script>
