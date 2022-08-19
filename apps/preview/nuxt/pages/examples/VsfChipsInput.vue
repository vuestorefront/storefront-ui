<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfChipsInput value="Label" :handleChipClose="($event)=>handleChipClose()">
        <template #icon>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-full h-full fill-gray-500">
            <path
              d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            ></path>
          </svg>
        </template>
      </VsfChipsInput>
    </div>
    <div class="e-page-controls"></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import VsfChipsInput from '../../output/blocks/VsfChipsInput/VsfChipsInput.vue';

export default defineComponent({
  name: 'Chipsinput',
  components: {
    VsfChipsInput,
  },
  methods: {
    handleChipClose() {
      console.log('VsfChipsInput Clicked');
    },
  },
});
</script>
