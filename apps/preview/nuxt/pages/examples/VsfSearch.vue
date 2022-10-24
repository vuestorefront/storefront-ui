<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfSearch
        v-model="value"
        :placeholder="placeholder"
        :disabled="disabled"
        :name="name"
        @submit.prevent="submitHandler"
        @reset="resetHandler"
      >
        <template v-if="slotPrefix" #prefix>
          <VsfIconSearch></VsfIconSearch>
        </template>
        <template v-if="slotSuffix" #suffix>
          <VsfIconSearch></VsfIconSearch>
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
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import VsfSearch from '@sfui/sfui/frameworks/vue/components/VsfSearch/VsfSearch.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';
import { VsfIconSearch } from '@sfui/sfui/frameworks/vue/components/VsfIcons/index';
export default {
  name: 'VsfSearchExample',
  components: {
    Controls,
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
      ...prepareControls(
        [
          {
            type: 'boolean',
            propType: 'boolean',
            modelName: 'disabled',
          },
          {
            type: 'boolean',
            propType: '---',
            modelName: 'slotPrefix',
            description: "Only for demonstration purposes, Icon is injected via 'prefix' slot",
          },
          {
            type: 'boolean',
            propType: '---',
            modelName: 'slotSuffix',
            description: "Only for demonstration purposes, Icon is injected via 'suffix' slot",
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
          slotPrefix: ref(false),
          slotSuffix: ref(false),
        },
      ),
    };
  },
};
</script>
