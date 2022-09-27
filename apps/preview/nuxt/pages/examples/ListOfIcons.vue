<template>
  <div class="e-page">
    <div class="e-page-component--icons">
      <div v-for="componentName in componentsNames" class="inline-block border cursor-pointer" :data-tooltip="componentName" @click="copyToClipboard(componentName)">
        <component v-bind:is="componentName" :size="sizeModel" :style="{ 'color': colorModel }"/>
      </div>

      <div class="mt-5 p-6" v-if="copied">Component name ({{copied}}) has been copied to clipboard</div>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { VsfIconSizeEnum } from '@sfui/sfui/frameworks/vue/components/VsfIcons/types';
import * as AllVsfIcons from '@sfui/sfui/frameworks/vue/components/VsfIcons/index';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';
import { ref } from 'vue';

const componentsNames = Object.keys(AllVsfIcons);
export default {
  name: 'VsfSpinnerExample',
  components: {
    Controls,
    ...(componentsNames.reduce((prev, curr) => ({...prev, [`${curr}`]: AllVsfIcons[`${curr}`]}), {}))
  },
  setup() {
    const copied = ref('');
    return {
      componentsNames,
      copied,
      copyToClipboard: (componentName) => {
        navigator.clipboard.writeText(componentName);
        copied.value = componentName;
        setTimeout(() => {
          copied.value = ''
        }, 1000)
      },
      ...prepareControls([
        {
          title: 'size',
          type: 'select',
          modelName: 'sizeModel',
          propDefaultValue: 'VsfIconSize.base',
          propType: 'VsfIconSize',
          options: Object.keys(VsfIconSizeEnum)
        },
        {
          title: 'color',
          type: 'select',
          modelName: 'colorModel',
          description: 'Its not a prop just example that by setting color on parent, icons changes its color',
          options: ['black', 'red', 'blue', 'green']
        },
      ], {
        sizeModel: ref(VsfIconSizeEnum.base),
        colorModel: ref('black'),
      })
    }
  }
};
</script>
