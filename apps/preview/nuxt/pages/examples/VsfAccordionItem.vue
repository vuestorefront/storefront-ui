<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfAccordionItem :open="open" :title="title" :chevron-left="chevronLeft" @toggle="toggleHandler">
        {{ contentText }}
      </VsfAccordionItem>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, ToRefs } from 'vue';
import { VsfAccordionItem } from '@storefront-ui/vue/components/VsfAccordionItem/index';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
  name: 'VsfAccordionItemExample',
  components: {
    VsfAccordionItem,
    Controls,
  },
  setup() {
    return {
      toggleHandler() {
        console.log('toggle handler');
      },
      ...prepareControls<
        ToRefs<
          {
            open: boolean;
            title?: string;
            chevronLeft?: boolean;
          } & { contentText: string }
        >
      >(
        [
          {
            type: 'text',
            modelName: 'title',
            propType: 'string',
            propDefaultValue: 'Header',
          },
          {
            type: 'boolean',
            modelName: 'open',
            propType: 'boolean',
            propDefaultValue: false,
          },
          {
            type: 'boolean',
            modelName: 'chevronLeft',
            propType: 'boolean',
            propDefaultValue: false,
          },
          {
            type: 'text',
            modelName: 'contentText',
            description: 'Content slot/Default slot',
            propDefaultValue: '',
            propType: '---',
          },
        ],
        {
          title: ref('Header'),
          open: ref(false),
          chevronLeft: ref(false),
          contentText: ref(
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          ),
        },
      ),
    };
  },
});
</script>
