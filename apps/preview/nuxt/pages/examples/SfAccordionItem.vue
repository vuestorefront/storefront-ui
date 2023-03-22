<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <SfAccordionItem v-model="state.modelValue" class="rounded border">
      <template #summary>
        <div class="flex justify-between p-2 bg-gray-100">
          <p>Click me to see the content</p>
          <SfIconChevronLeft :class="state.modelValue ? 'rotate-90' : '-rotate-90'" />
        </div>
      </template>
      <p class="p-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
    </SfAccordionItem>
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { SfAccordionItem, SfIconChevronLeft } from '@storefront-ui/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'SfAccordionItemExample',
  components: {
    SfAccordionItem,
    ComponentExample,
    SfIconChevronLeft,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'boolean',
            modelName: 'modelValue',
            propType: 'boolean',
            propDefaultValue: false,
          },
        ],
        {
          modelValue: ref(false),
        },
      ),
    };
  },
});
</script>
