<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfProgress :value="propValue" :variant="variantModel" :type="typeModel" />
    </div>
    <div class="e-page-controls">
      <table>
      <tr>
        <td>Value</td>
        <td>
          <input
            v-model="propValue"
            type="range"
            min="0"
            max="100"
            step="1"
          >
        </td>
      </tr>
      <tr>
        <td>Size</td>
        <td>
          <div v-for="variant in VsfProgressVariants" :key="variant">
            <label>
              {{ variant }}
              <input
                v-model="variantModel"
                type="radio"
                name="size"
                :value="variant"
              >
            </label>
          </div>
        </td>
      </tr>
      <tr>
        <td>Type</td>
        <td>
          <div v-for="progressType in VsfProgressTypes" :key="progressType">
            <label>
              {{ progressType }}
              <input
                v-model="typeModel"
                type="radio"
                name="size"
                :value="progressType"
              >
            </label>
          </div>
        </td>
      </tr>
    </table>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
// eslint-disable-next-line import/no-relative-packages, import/no-unresolved
import VsfProgress, { VsfProgressVariants, VsfProgressTypes } from '../../output/blocks/VsfProgress/VsfProgress.vue';

export default {
  name: 'VsfProgressExample',
  components: { VsfProgress },
  setup() {
    return {
      VsfProgressVariants,
      VsfProgressTypes,
      propValue: ref(0),
      variantModel: ref(),
      typeModel: ref(),
    };
  },
};
</script>
