<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfAccordion
        :open="openModel"
        :title="titleModel"
        :chevron-left="chevronLeftModel"
        :header-size="headerSizeModel"
      >
        <template #default>
          {{ childrenModel }}
        </template>
      </VsfAccordion>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import VsfAccordion, { VsfAccordionHeaderSize } from '../../output/blocks/VsfAccordion/VsfAccordion.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
  name: 'VsfAccordionExample',
  components: {
    VsfAccordion,
    Controls,
  },
  setup() {
    return prepareControls(
      [
        {
          title: 'open',
          type: 'boolean',
          modelName: 'openModel',
          propType: 'boolean',
          propDefaultValue: false,
        },
        {
          title: 'title',
          type: 'text',
          modelName: 'titleModel',
          propType: 'string',
          propDefaultValue: 'Header',
        },
        {
          title: 'chevronLeft',
          type: 'boolean',
          modelName: 'chevronLeftModel',
          propType: 'boolean',
          propDefaultValue: false,
        },
        {
          title: 'headerSize',
          type: 'select',
          modelName: 'headerSizeModel',
          options: Object.keys(VsfAccordionHeaderSize),
          propType: 'VsfAccordionHeaderSize',
          propDefaultValue: VsfAccordionHeaderSize.base,
        },
        {
          title: 'Default slot',
          type: 'text',
          modelName: 'childrenModel',
          description: 'Content slot',
          propDefaultValue: '',
          propType: '---',
        },
      ],
      {
        openModel: ref(false),
        titleModel: ref('Header'),
        chevronLeftModel: ref(false),
        headerSizeModel: ref(VsfAccordionHeaderSize.base),
        childrenModel: ref(
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        ),
      },
    );
  },
});
</script>
