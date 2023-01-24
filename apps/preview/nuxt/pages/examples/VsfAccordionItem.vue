<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfAccordionItem v-bind="state" @toggle="toggleHandler">
      {{ contentText }}
    </VsfAccordionItem>
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref, ToRefs } from 'vue';
import { VsfAccordionItem, VsfAccordionItemSize } from '@storefront-ui/vue/components/VsfAccordionItem/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfAccordionItemExample',
  components: {
    VsfAccordionItem,
    ComponentExample,
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
            size: VsfAccordionItemSize;
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
          {
            type: 'select',
            modelName: 'size',
            options: Object.keys(VsfAccordionItemSize),
            propType: 'VsfAccordionItemSize',
            propDefaultValue: 'base',
            description: 'Accordion item size. There are 3 sizes: sm, base, lg',
          },
        ],
        {
          title: ref('Header'),
          open: ref(false),
          chevronLeft: ref(false),
          contentText: ref(
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          ),
          size: ref<VsfAccordionItemSize>(VsfAccordionItemSize.base),
        },
      ),
    };
  },
});
</script>
