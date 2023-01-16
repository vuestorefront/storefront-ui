<template>
  <ComponentExample class="e-page--icons" :controls-attrs="controlsAttrs">
    <div
      v-for="componentName in componentsNames"
      :key="componentName"
      class="inline-block border cursor-pointer"
      :data-tooltip="componentName"
      @click="copyToClipboard(componentName)"
    >
      <component :is="componentName" :size="size" :style="{ color: colorExample }" />
    </div>

    <div v-if="copied" class="mt-5 p-6">Component name ({{ copied }}) has been copied to clipboard</div>
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import { VsfIconSizeEnum } from '@storefront-ui/vue/components/VsfIcons/types';
import * as AllVsfIcons from '@storefront-ui/vue/components/VsfIcons/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const componentsNames = Object.keys(AllVsfIcons);
export default {
  name: 'VsfSpinnerExample',
  components: {
    ComponentExample,
    ...componentsNames.reduce(
      (prev, curr) => ({ ...prev, [`${curr}`]: (AllVsfIcons as Record<string, unknown>)[`${curr}`] }),
      {},
    ),
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
          copied.value = '';
        }, 1000);
      },
      ...prepareControls<{ size: VsfIconSizeEnum; colorExample: string }>(
        [
          {
            type: 'select',
            modelName: 'size',
            propDefaultValue: 'VsfIconSize.base',
            propType: 'VsfIconSize',
            options: Object.keys(VsfIconSizeEnum),
          },
          {
            type: 'select',
            modelName: 'colorExample',
            description: 'Its not a prop just example that by setting color on parent, icons changes its color',
            options: ['black', 'red', 'blue', 'green'],
          },
        ],
        {
          size: ref(VsfIconSizeEnum.base),
          colorExample: ref('black'),
        },
      ),
    };
  },
};
</script>
