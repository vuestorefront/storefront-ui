<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfChipsInput :value="valueModel" :size="sizeModel" :disabled="disabledModel" :handleChipClose="handleChipClose">
        <template #icon>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-full h-full fill-gray-500">
            <path
              d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            ></path>
          </svg>
        </template>
      </VsfChipsInput>
    </div>
    <div class="e-page-controls">
      <table>
        <tbody>
          <tr>
            <td>Size</td>
            <td>
              <div v-for="variant in SizeTypes" :key="variant">
                <label>
                  {{ variant }}
                  <input v-model="sizeModel" type="radio" name="size" :value="variant" />
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <td>Disabled</td>
            <td>
              <input v-model="disabledModel" type="checkbox" />
            </td>
          </tr>
          <tr>
            <td>Value</td>
            <td>
              <input v-model="valueModel" type="text" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import VsfChipsInput, { SizeTypes } from '../../output/blocks/VsfChipsInput/VsfChipsInput.vue';

export default defineComponent({
  name: 'Chipsinput',
  components: {
    VsfChipsInput,
  },
  setup() {
    return {
      sizeModel: ref(SizeTypes.MEDIUM),
      disabledModel: ref(false),
      valueModel: ref('Label'),
      SizeTypes,
      handleChipClose() {
        console.log('VsfChipsInput Clicked');
      },
    };
  },
});
</script>
