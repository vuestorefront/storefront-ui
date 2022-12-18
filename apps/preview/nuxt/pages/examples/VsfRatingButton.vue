<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfRatingButton
        v-model="modelValue"
        :max="Number(max)"
        :size="size"
        :disabled="disabled"
        :name="name"
        :aria-label="ariaLabel"
        @change="changeHandler"
      >
        <template #iconFilled="{ getIconSize }">
          <component :is="iconFilled" :size="getIconSize" />
        </template>
        <template #iconEmpty="{ getIconSize }">
          <component :is="iconEmpty" :size="getIconSize" />
        </template>
      </VsfRatingButton>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import * as Icons from '@sfui/sfui/frameworks/vue/components/VsfIcons/index';
import VsfRatingButton from '@sfui/sfui/frameworks/vue/components/VsfRatingButton/VsfRatingButton.vue';
import VsfIconStar from '@sfui/sfui/frameworks/vue/components/VsfIcons/VsfIconStar.vue';
import VsfIconStarOutline from '@sfui/sfui/frameworks/vue/components/VsfIcons/VsfIconStarOutline.vue';
import { VsfRatingButtonSizes } from '@sfui/sfui/frameworks/vue/components/VsfRatingButton/types';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
  name: 'VsfRatingButtonExample',
  components: {
    VsfRatingButton,
    ...Icons,
    Controls,
  },
  setup() {
    return {
      VsfIconStar,
      VsfIconStarOutline,
      changeHandler(e?: Event) {
        if (e?.target && e.target instanceof HTMLInputElement) {
          console.log('Value changed:', e.target.value);
        }
      },
      ...prepareControls(
        [
          {
            type: 'select',
            modelName: 'size',
            propDefaultValue: VsfRatingButtonSizes.base,
            options: Object.keys(VsfRatingButtonSizes),
            propType: 'VsfRatingButtonSizes',
          },
          {
            type: 'range',
            modelName: 'max',
            propDefaultValue: 5,
            propType: 'Number',
            options: [
              {
                bind: {
                  min: 3,
                  max: 10,
                },
              },
            ],
          },
          {
            type: 'boolean',
            modelName: 'disabled',
            propType: 'Boolean',
            propDefaultValue: false,
          },
          {
            type: 'text',
            modelName: 'name',
            propType: 'string',
          },
          {
            type: 'text',
            modelName: 'ariaLabel',
            propType: 'string',
          },

          {
            type: 'select',
            modelName: 'iconFilled',
            options: Object.keys(Icons),
            propDefaultValue: '',
            propType: 'Slot',
            description: 'Slot used for filled icon. Scoped data: { getIconSize: VsfIconSizeEnum }',
          },
          {
            type: 'select',
            modelName: 'iconEmpty',
            options: Object.keys(Icons),
            propDefaultValue: '',
            propType: 'Slot',
            description: 'Slot used for empty icon. Scoped data: { getIconSize: VsfIconSizeEnum }',
          },
        ],
        {
          size: ref(VsfRatingButtonSizes.base),
          max: ref(5),
          disabled: ref(false),
          modelValue: ref(0),
          name: ref('rating'),
          ariaLabel: ref('Rating button'),
          iconFilled: ref<keyof typeof Icons>('VsfIconStar'),
          iconEmpty: ref<keyof typeof Icons>('VsfIconStarOutline'),
        },
      ),
    };
  },
});
</script>
