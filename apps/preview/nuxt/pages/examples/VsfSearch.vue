<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfSearch
        @submit.prevent="submitHandler"
        @clear="clearHandler"
        v-model="text"
        placeholder="Search"
        :disabled="disabledModel"
        :submitText="submitTextModel"
      >
        <template #prefix v-if="slotPrefix">
          <VsfIconSearch></VsfIconSearch>
        </template>
        <template #suffix v-if="slotSuffix">
          <VsfIconSearch></VsfIconSearch>
        </template>
        <template #submit v-if="submitIcon">
          <VsfIconSearch></VsfIconSearch>
        </template>
      </VsfSearch>
      {{ text }}
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
      clearHandler(e) {
        console.log('Search Clear: ', e);
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
            modelName: 'submitIcon',
            description: "Only for demonstration purposes, Icon is injected via 'submit' slot",
          },
          {
            title: 'Submit text',
            type: 'text',
            propType: 'string',
            modelName: 'submitTextModel',
          },
        ],
        {
          withSubmitModel: ref(true),
          disabledModel: ref(false),
          submitTextModel: ref('Search'),
          text: ref('example'),
          submitIcon: ref(false),
          slotPrefix: ref(false),
          slotSuffix: ref(false),
        },
      ),
    };
  },
};
</script>
