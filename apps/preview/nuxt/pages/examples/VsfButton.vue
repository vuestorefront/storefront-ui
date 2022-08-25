<template>
    <div class="e-page">
        <div class="e-page-component">
            <VsfButton :size="sizeModel" :variant="variantModel" :link="linkModel" :disabled="disabledModel">
            {{ childrenModel }}
            </VsfButton>
        </div>
        <div class="e-page-controls">
            <Controls v-bind="controlsAttrs"/>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import VsfButton from '../../output/blocks/VsfButton/VsfButton.vue'
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
    name: 'VsfButtonExample',
    components: {
        VsfButton,
        Controls
    },
    setup() {
    return prepareControls([
        {
          title: 'Content',
          type: 'text',
          modelName: 'childrenModel',
        },
        {
          title: 'Link',
          type: 'text',
          modelName: 'linkModel',
        },
        {
          title: 'Variant',
          type: 'select',
          modelName: 'variantModel',
          options: [
          {
            label: 'Primary',
            value: 'primary',
          },{
            label: 'Secondary',
            value: 'secondary',
          },
          {
            label: 'Tertiary',
            value: 'tertiary',
          },
          {
            label: 'Destroy Primary',
            value: 'destroy-primary',
          },
          {
            label: 'Destroy Secondary',
            value: 'destroy-secondary',
          },
          {
            label: 'Destroy Tertiary',
            value: 'destroy-tertiary',
          }
          ],
        },
        {
          title: 'Size',
          type: 'select',
          modelName: 'sizeModel',
          options: ['sm', 'base', 'lg'],
        },
        {
          title: 'Disabled',
          type: 'boolean',
          modelName: 'disabledModel',
        },
      ], {
        childrenModel: ref('Hello'),
        linkModel: ref(),
        disabledModel: ref(false),
        variantModel: ref('primary'),
        sizeModel: ref('base'),
      })
   }
  });
</script>
