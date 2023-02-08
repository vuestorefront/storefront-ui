<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfTabs v-model="modelValue" :size="size">
      <VsfTabsItem v-for="tab of tabs" :key="tab.label" :uid="tab.label" :disabled="tab.label === disabled">
        <template #prefix>
          <span v-if="slotPrefix">{{ slotPrefix }}</span> <VsfIconDot v-else />
        </template>
        {{ tab.label }}
        <template #suffix>
          <span v-if="slotSuffix">{{ slotSuffix }}</span>
          <VsfCounter v-else pill class="bg-white">{{ tab.counter }}</VsfCounter>
        </template>
      </VsfTabsItem>
    </VsfTabs>
  </ComponentExample>
</template>

<script>
import { ref } from 'vue';
import VsfTabs from '@storefront-ui/vue/components/VsfTabs/VsfTabs.vue';
import VsfTabsItem from '@storefront-ui/vue/components/VsfTabs/VsfTabsItem.vue';
import VsfIconDot from '@storefront-ui/vue/components/VsfIcons/VsfIconDot.vue';
import VsfCounter from '@storefront-ui/vue/components/VsfCounter/VsfCounter.vue';
import { VsfButtonSize } from '@storefront-ui/vue/components/VsfButton/types';
import ComponentExample from '../../components/utils/ComponentExample.vue';

import { prepareControls } from '../../components/utils/Controls.vue';

export default {
  name: 'VsfTabsExample',
  components: {
    VsfTabs,
    VsfTabsItem,
    VsfIconDot,
    VsfCounter,
    ComponentExample,
  },
  setup() {
    const tabs = [
      {
        label: 'Label 1',
        counter: '123',
      },
      {
        label: 'Label 2',
        counter: '234',
      },
      {
        label: 'Label 3',
        counter: '345',
      },
    ];
    return {
      tabs,
      ...prepareControls(
        [
          {
            type: 'select',
            modelName: 'size',
            propType: 'VsfButtonSize',
            propDefaultValue: VsfButtonSize.base,
            options: Object.keys(VsfButtonSize),
            description: 'Sets size value of all tabs',
          },
          {
            type: 'text',
            modelName: 'modelValue',
            propType: 'number, string, symbol',
            description: 'Sets active tab identified by uid added to each TabsItem',
          },
          {
            type: 'select',
            modelName: 'disabled',
            propType: 'boolean',
            options: ['all tabs enabled', 'Label 1', 'Label 2', 'Label 3'],
            propDefaultValue: 'false',
            description: "Sets tab as disabled, similar as button. It's VsfTabsItem prop.",
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'slotPrefix',
            description:
              'Slot can be filled with any html element. Fills the space before label. Showed for demonstration purposes',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'slotSuffix',
            description:
              'Slot can be filled with any html element. Fills the space following label. Showed for demonstration purposes',
          },
        ],
        {
          size: ref(VsfButtonSize.base),
          modelValue: ref(''),
          disabled: ref('all tabs enabled'),
          slotSuffix: ref(''),
          slotPrefix: ref(''),
        },
      ),
    };
  },
};
</script>
