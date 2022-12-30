<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfButton type="button" @click="modelValue = true">Click to open NavigationSide</VsfButton>
      <VsfNavigationSide
        v-model="modelValue"
        :overlay-visible="overlayVisible"
        :permanent="permanent"
        :left-side="leftSide"
        :logo-aria-label="logoAriaLabel"
        :logo-link="logoLink"
      >
        <div class="border border-dashed p-6">{{ defaultContent }}</div>
        <template #banner>
          <div class="border border-dashed p-6">{{ bannerContent }}</div>
        </template>
      </VsfNavigationSide>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import VsfNavigationSide from '@storefront-ui/vue/components/VsfNavigationSide/VsfNavigationSide.vue';
import VsfButton from '@storefront-ui/vue/components/VsfButton/VsfButton.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default {
  name: 'VsfNavigationSideExample',
  components: {
    Controls,
    VsfNavigationSide,
    VsfButton,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'boolean',
            modelName: 'overlayVisible',
            propType: 'boolean',
            propDefaultValue: false,
          },
          {
            type: 'boolean',
            modelName: 'leftSide',
            propType: 'boolean',
            propDefaultValue: true,
          },
          {
            type: 'boolean',
            modelName: 'permanent',
            propType: 'boolean',
            propDefaultValue: false,
            description: "If permanent prop is set to true then props open, overlay and withButton won't work",
          },
          {
            type: 'text',
            modelName: 'logoAriaLabel',
            propType: 'string',
            description: 'Set aria label for logo in navigation',
          },
          {
            type: 'text',
            modelName: 'logoLink',
            propType: 'string',
            description: 'Set link for logo in navigation',
          },
          {
            type: 'text',
            modelName: 'bannerContent',
            propType: 'string',
            description: 'Slot for banner content',
          },
          {
            type: 'text',
            modelName: 'defaultContent',
            propType: 'string',
            description: 'Slot for default content',
          },
          {
            type: 'boolean',
            modelName: 'modelValue',
            propType: 'boolean',
            description:
              'NOTE: When navigation is opened click on switch control will loop, because you also click outside',
          },
        ],
        {
          overlayVisible: ref(false),
          leftSide: ref(true),
          permanent: ref(false),
          bannerContent: ref('I am a slot for banner content'),
          defaultContent: ref('I am a slot for accordion content'),
          logoAriaLabel: ref('Vue Storefront Logo'),
          logoLink: ref('/'),
          modelValue: ref(false),
        },
      ),
    };
  },
};
</script>
