<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfSearch v-bind="state" v-model="value" @submit.prevent="submitHandler" @reset="resetHandler">
      <template v-if="prefixSlotOptions.getValue(slotPrefix)" #prefix>
        <component :is="prefixSlotOptions.getValue(slotPrefix)" />
      </template>
      <template v-if="suffixSlotOptions.getValue(slotSuffix)" #suffix>
        <component :is="suffixSlotOptions.getValue(slotSuffix)" />
      </template>
      <template v-if="slotSubmit" #submit>
        {{ slotSubmit }}
      </template>
      <template #results>
        <div
          class="bg-white top-1 relative rounded-md font-body text-base text-center p-3 shadow-md border border-gray-100"
        >
          <p>
            This panel is not a part of&nbsp;<code
              class="text-xs rounded bg-yellow-100 border border-yellow-300 py-0.5 px-1"
              >VsfSearch</code
            >&nbsp;component
          </p>
          <p>
            Content is injected via&nbsp;
            <code class="text-xs rounded bg-yellow-100 border border-yellow-300 py-0.5 px-1">#results</code>&nbsp;slot
          </p>
        </div>
      </template>
    </VsfSearch>
  </ComponentExample>
</template>

<script lang="ts">
import { ref, h } from 'vue';
import VsfSearch from '@storefront-ui/vue/components/VsfSearch/VsfSearch.vue';
import { VsfIconSearch } from '@storefront-ui/vue/components/VsfIcons/index';
import { createControlsOptions } from '@storefront-ui/preview-shared/utils/controlsOptions';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const prefixSlotOptions = createControlsOptions({
  none: undefined,
  'Search icon': h(VsfIconSearch),
});
const suffixSlotOptions = createControlsOptions({
  none: undefined,
  'Search icon': h(VsfIconSearch),
});

export default {
  name: 'VsfSearchExample',
  components: {
    ComponentExample,
    VsfSearch,
    VsfIconSearch,
  },
  setup() {
    return {
      submitHandler(e: Event) {
        console.log('Search Submit: ', e);
      },
      resetHandler(e: Event) {
        console.log('Search Reset: ', e);
      },
      prefixSlotOptions,
      suffixSlotOptions,
      ...prepareControls(
        [
          {
            type: 'boolean',
            propType: 'boolean',
            modelName: 'disabled',
          },
          {
            type: 'select',
            propType: 'slot',
            modelName: 'slotPrefix',
            description: "Only for demonstration purposes, Icon is injected via 'prefix' slot",
            options: prefixSlotOptions.controlsOptions,
          },
          {
            type: 'select',
            propType: 'slot',
            modelName: 'slotSuffix',
            description: "Only for demonstration purposes, Icon is injected via 'suffix' slot",
            options: suffixSlotOptions.controlsOptions,
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'slotSubmit',
            description: "Only for demonstration purposes, Content is injected via 'submit' slot",
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'placeholder',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'name',
          },
        ],
        {
          placeholder: ref('Search'),
          disabled: ref(false),
          value: ref(''),
          name: ref('q'),
          slotSubmit: ref('search'),
          slotPrefix: ref(prefixSlotOptions.defaultOption),
          slotSuffix: ref(suffixSlotOptions.defaultOption),
        },
      ),
    };
  },
};
</script>
