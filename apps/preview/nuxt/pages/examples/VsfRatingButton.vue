<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfRatingButton v-bind="state" v-model="modelValue" :max="Number(max)" @change="changeHandler">
      <template #iconFilled="{ getIconSize }">
        <component :is="iconFilled" :size="getIconSize" />
      </template>
      <template #iconEmpty="{ getIconSize }">
        <component :is="iconEmpty" :size="getIconSize" />
      </template>
    </VsfRatingButton>
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import * as Icons from '@storefront-ui/vue/components/VsfIcons/index';
import { VsfIconStar, VsfIconStarOutline } from '@storefront-ui/vue/components/VsfIcons/index';
import { VsfRatingButton, VsfRatingButtonSizes } from '@storefront-ui/vue/components/VsfRatingButton/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfRatingButtonExample',
  components: {
    VsfRatingButton,
    ...Icons,
    ComponentExample,
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
