<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfListItemMenu
        :link="linkModel"
        :size="sizeModel"
        :selected="selectedModel"
        :primary-text="primaryTextModel"
        :secondary-text="secondaryTextModel"
        :counter="counterModel"
        :truncated-text="truncatedTextModel"
        :disabled="disabledModel"
        class="w-[400px]"
      >
        <template #prefix>
          <VsfIconDot class="vsf-icon-full" />
        </template>
        <template #suffix>
          <VsfIconChevronRight class="vsf-icon-full" />
        </template>
      </VsfListItemMenu>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import VsfListItemMenu, { VsfListItemMenuSize } from '../../output/blocks/VsfListItemMenu/VsfListItemMenu.vue';
import { defineComponent } from 'vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';
import VsfIconDot from '../../output/blocks/VsfIcons/VsfIconDot';
import VsfIconChevronRight from '../../output/blocks/VsfIcons/VsfIconChevronRight';

export default defineComponent({
  name: 'VsfListItemMenuExample',
  components: {
    VsfListItemMenu,
    Controls,
    VsfIconDot,
    VsfIconChevronRight,
  },
  setup() {
    return prepareControls(
      [
        {
          title: 'link',
          type: 'text',
          modelName: 'linkModel',
          propDefaultValue: '',
          propType: 'string',
        },
        {
          title: 'size',
          type: 'select',
          modelName: 'sizeModel',
          propDefaultValue: '',
          propType: 'string',
          options: Object.keys(VsfListItemMenuSize),
        },
        {
          title: 'selected',
          type: 'boolean',
          modelName: 'selectedModel',
          propDefaultValue: false,
          propType: 'boolean',
        },
        {
          title: 'primaryText',
          type: 'text',
          modelName: 'primaryTextModel',
          propDefaultValue: '',
          propType: 'string',
        },
        {
          title: 'secondaryText',
          type: 'text',
          modelName: 'secondaryTextModel',
          propDefaultValue: '',
          propType: 'string',
        },
        {
          title: 'counter',
          type: 'text',
          modelName: 'counterModel',
          propDefaultValue: '',
          propType: 'string',
        },
        {
          title: 'truncatedText',
          type: 'boolean',
          modelName: 'truncatedTextModel',
          propDefaultValue: false,
          propType: 'boolean',
        },
        {
          title: 'disabled',
          type: 'boolean',
          modelName: 'disabledModel',
          propDefaultValue: false,
          propType: 'boolean',
        },
      ],
      {
        linkModel: ref(''),
        sizeModel: ref(VsfListItemMenuSize.base),
        selectedModel: ref(false),
        primaryTextModel: ref('Menu Item'),
        secondaryTextModel: ref(''),
        counterModel: ref('123'),
        truncatedTextModel: ref(false),
        disabledModel: ref(false),
      },
    );
  },
});
</script>
