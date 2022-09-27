<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfSearch
        @submit.prevent="submitHandler"
        @reset="resetHandler"
        v-model="value"
        :placeholder="placeholderModel"
        :disabled="disabledModel"
        :required="requiredModel"
        :submitText="submitTextModel"
        :name="nameModel"
        :autocomplete="autocompleteModel"
      >
        <template #prefix v-if="slotPrefix">
          <VsfIconSearch></VsfIconSearch>
        </template>
        <template #suffix v-if="slotSuffix">
          <VsfIconSearch></VsfIconSearch>
        </template>
        <template #submit v-if="slotSubmit">
          <VsfIconSearch></VsfIconSearch>
        </template>
        <template #results>
          <div class="bg-white top-1 relative rounded-md font-body text-base text-center p-3 shadow-md border border-gray-100">
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

<script>
import { ref } from 'vue';
import VsfSearch from '../../output/blocks/VsfSearch/VsfSearch.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';
import VsfIconSearch from '../../output/blocks/VsfIcons/VsfIconSearch.vue';
export default {
  name: 'VsfSearchExample',
  components: {
    Controls,
    VsfSearch,
    VsfIconSearch,
  },
  setup() {
    return {
      submitHandler(e) {
        console.log('Search Submit: ', e);
      },
      resetHandler(e) {
        console.log('Search Reset: ', e);
      },
      ...prepareControls(
        [
          {
            title: 'disabled',
            type: 'boolean',
            propType: 'boolean',
            modelName: 'disabledModel',
          },
          {
            title: 'required',
            type: 'boolean',
            propType: 'boolean',
            modelName: 'requiredModel',
          },
          {
            title: 'Prefix icon',
            type: 'boolean',
            propType: '---',
            modelName: 'slotPrefix',
            description: "Only for demonstration purposes, Icon is injected via 'prefix' slot",
          },
          {
            title: 'Suffix icon',
            type: 'boolean',
            propType: '---',
            modelName: 'slotSuffix',
            description: "Only for demonstration purposes, Icon is injected via 'suffix' slot",
          },
          {
            title: 'Submit with icon',
            type: 'boolean',
            propType: '---',
            modelName: 'slotSubmit',
            description: "Only for demonstration purposes, Icon is injected via 'submit' slot",
          },
          {
            title: 'Submit text',
            type: 'text',
            propType: 'string',
            modelName: 'submitTextModel',
          },
          {
            title: 'Placeholder',
            type: 'text',
            propType: 'string',
            modelName: 'placeholderModel',
          },
          {
            title: 'Name',
            type: 'text',
            propType: 'string',
            modelName: 'nameModel',
          },
          {
            title: 'Autocomplete',
            type: 'select',
            propType: 'string',
            options: ['on', 'off'],
            modelName: 'autocompleteModel',
          },
        ],
        {
          disabledModel: ref(false),
          requiredModel: ref(false),
          placeholderModel: ref('Search'),
          submitTextModel: ref('Search'),
          nameModel: ref('q'),
          autocompleteModel: ref('off'),
          value: ref(''),
          slotSubmit: ref(false),
          slotPrefix: ref(false),
          slotSuffix: ref(false),
        },
      ),
    };
  },
};
</script>
