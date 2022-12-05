<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfListItemMenu
        class="border border-pink-200 border-dashed max-w-sm"
        :size="size"
        :label="label"
        :counter="counter"
        :secondary-text="secondaryText"
        :selected="selected"
        :disabled="disabled"
        @click="selected = !selected"
      >
        <template v-if="showPreffix" #preffix>
          <VsfIconCheck :size="VsfIconSizeEnum.sm" />
        </template>
        <template v-if="showSuffix" #suffix>
          <VsfIconCheck :size="VsfIconSizeEnum.sm" />
        </template>
      </VsfListItemMenu>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VsfListItemMenu from '@sfui/sfui/frameworks/vue/components/VsfListItemMenu/VsfListItemMenu.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';
import { VsfListItemMenuSizes } from '@sfui/sfui/frameworks/vue/components/VsfListItemMenu/types';
import VsfIconCheck from '@sfui/sfui/frameworks/vue/components/VsfIcons/VsfIconCheck.vue';
import { VsfIconSizeEnum } from '@sfui/sfui/frameworks/vue/components/VsfIcons/types';

export default defineComponent({
  name: 'VsfListItemMenuExample',
  components: {
    VsfListItemMenu,
    VsfIconCheck,
    Controls,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'text',
            modelName: 'label',
            propType: 'string',
            description: 'Set label value',
          },
          {
            type: 'text',
            modelName: 'secondaryText',
            propType: 'string',
            description: 'Set secondary text',
          },
          {
            type: 'text',
            modelName: 'counter',
            propType: 'number',
            description: 'Set counter value',
          },
          {
            type: 'boolean',
            modelName: 'showSuffix',
            description: 'Show or hide the suffix content',
          },
          {
            type: 'boolean',
            modelName: 'showPreffix',
            description: 'Show or hide the preffix content',
          },
          {
            type: 'select',
            modelName: 'size',
            options: Object.keys(VsfListItemMenuSizes),
            description: 'Set size variant',
          },
          {
            type: 'boolean',
            modelName: 'disabled',
            description: 'Show disabled state of component',
          },
        ],
        {
          label: ref('Label'),
          size: ref<VsfListItemMenuSizes>(VsfListItemMenuSizes.base),
          strong: ref(false),
          counter: ref(123),
          showSuffix: ref(false),
          showPreffix: ref(false),
          secondaryText: ref('Secondary text'),
          disabled: ref(false),
          selected: ref(false),
        },
      ),
      VsfIconSizeEnum,
      VsfListItemMenuSizes,
    };
  },
});
</script>
