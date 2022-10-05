<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfAccordionItem :open="openModel" :title="titleModel" :chevronLeft="chevronLeftModel">
          <template #default>
            {{ childrenModel }}
          </template>
      </VsfAccordionItem>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VsfAccordionItem from '@sfui/sfui/frameworks/vue/components/VsfAccordionItem/VsfAccordionItem.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
  name: 'VsfAccordionItemExample',
  components: {
    VsfAccordionItem,
    Controls,
  },
  setup() {
    return prepareControls(
      [        
        {
          title: 'title',
          type: 'text',
          modelName: 'titleModel',
          propType: 'string',
          propDefaultValue : 'Header'
        },
        {
          title: 'open',
          type: 'boolean',
          modelName: 'openModel',
          propType: 'boolean',
          propDefaultValue: false
        },
        {
          title: 'chevronLeft',
          type: 'boolean',
          modelName: 'chevronLeftModel',
          propType: 'boolean',
          propDefaultValue: false
        },
        {
          title: 'Default slot',
          type: 'text',
          modelName: 'childrenModel',
          description: 'Content slot',
          propDefaultValue: '',
          propType: '---',
        }
      ],
      {
        titleModel: ref('Header'),
        openModel: ref(false),        
        chevronLeftModel: ref(false),
        childrenModel: ref("Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
      },
    );
  },
});
</script>