<template>
  <div class="e-page">
    <div class="e-page-component--icons">
      <div v-for="componentName in componentsNames" class="inline-block border cursor-pointer" :data-tooltip="componentName" @click="copyToClipboard(componentName)">
        <component v-bind:is="componentName" :size="size" :style="{ 'color': colorExample }"/>
      </div>

      <div class="mt-5 p-6" v-if="copied">Component name ({{copied}}) has been copied to clipboard</div>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { VsfIconSizeEnum } from '@sfui/sfui/frameworks/vue/components/VsfIcons/types';
import * as AllVsfIcons from '@sfui/sfui/frameworks/vue/components/VsfIcons/index';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

const componentsNames = Object.keys(AllVsfIcons);
export default {
  name: 'VsfSpinnerExample',
  components: {
    Controls,
    ...(componentsNames.reduce((prev, curr) => ({...prev, [`${curr}`]: (AllVsfIcons as Record<string, unknown>)[`${curr}`]}), {}))
  },
  setup() {
    const copied = ref('');
    return {
      componentsNames,
      copied,
      copyToClipboard: (componentName: string) => {
        navigator.clipboard.writeText(componentName);
        copied.value = componentName;
        setTimeout(() => {
          copied.value = ''
        }, 1000)
      },
      ...prepareControls<{ size: VsfIconSizeEnum; colorExample: string }>([
        {
          type: 'select',
          modelName: 'size',
          propDefaultValue: 'VsfIconSize.base',
          propType: 'VsfIconSize',
          options: Object.keys(VsfIconSizeEnum)
        },
        {
          type: 'select',
          modelName: 'colorExample',
          description: 'Its not a prop just example that by setting color on parent, icons changes its color',
          options: ['black', 'red', 'blue', 'green']
        },
      ], {
        size: ref(VsfIconSizeEnum.base),
        colorExample: ref('black'),
      })
    }
  }
};
</script>
