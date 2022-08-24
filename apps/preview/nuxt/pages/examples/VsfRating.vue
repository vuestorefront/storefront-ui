<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfRatingBase :value="valueModel" :max="maxModel" :size="sizeModel" :reviews="reviewsModel" />
      <VsfRatingWithValue :value="valueModel" :max="maxModel" :reviews="reviewsModel" :size="sizeModel" />
    </div>
    <div class="e-page-controls">
      <table>
        <tbody>
          <tr>
            <td>Size</td>
            <td>
              <div v-for="variant in VsfRatingBaseVariants" :key="variant">
                <label>
                  {{ variant }}
                  <input v-model="sizeModel" type="radio" name="size" :value="variant" />
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <td>Value</td>
            <td>
              <label>
                <input v-model="valueModel" type="range" min="0" :max="maxModel" step="0.5" />
              </label>
            </td>
          </tr>
          <tr>
            <td>Max</td>
            <td>
              <label>
                <input v-model="maxModel" type="range" min="0" :max="10" step="1" />
              </label>
            </td>
          </tr>
          <tr>
            <td>Reviews</td>
            <td>
              <label>
                <input v-model="reviewsModel" type="range" min="0" step="1" />
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import VsfRatingBase, { VsfRatingBaseVariants } from '../../output/blocks/VsfRating/VsfRatingBase.vue';
import VsfRatingWithValue from '../../output/blocks/VsfRating/VsfRatingWithValue.vue';

export default defineComponent({
  name: 'VsfRatingExample',
  components: {
    VsfRatingBase,
    VsfRatingWithValue,
  },
  setup() {
    return {
      VsfRatingBaseVariants,
      valueModel: ref(3),
      maxModel: ref(5),
      reviewsModel: ref(0),
      sizeModel: ref(VsfRatingBaseVariants.base),
    };
  },
});
</script>
