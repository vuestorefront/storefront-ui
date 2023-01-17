<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfButton type="button" @click="modelValue = true">Click to open NavigationSide</VsfButton>
    <VsfNavigationSide v-bind="state" v-model="modelValue">
      <component :is="childrenOptions.getValue(defaultContent)" />
      <template v-if="slotBannerOptions.getValue(bannerContent)" #banner>
        <component :is="slotBannerOptions.getValue(bannerContent)" />
      </template>
    </VsfNavigationSide>
  </ComponentExample>
</template>

<script lang="ts">
import { ref, h } from 'vue';
import VsfNavigationSide from '@storefront-ui/vue/components/VsfNavigationSide/VsfNavigationSide.vue';
import VsfButton from '@storefront-ui/vue/components/VsfButton/VsfButton.vue';
import { createControlsOptions } from '@storefront-ui/preview-shared/utils/controlsOptions';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const childrenOptions = createControlsOptions({
  text: h('div', { class: 'p-6 border border-dashed' }, 'Content'),
  none: undefined,
});
const slotBannerOptions = createControlsOptions({
  text: h('div', { class: 'p-6 border border-dashed' }, 'Banner'),
  none: undefined,
});

export default {
  name: 'VsfNavigationSideExample',
  components: {
    ComponentExample,
    VsfNavigationSide,
    VsfButton,
  },
  setup() {
    return {
      childrenOptions,
      slotBannerOptions,
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
            type: 'select',
            modelName: 'defaultContent',
            propType: 'slot',
            description: 'Slot for default content',
            options: childrenOptions.controlsOptions,
          },
          {
            type: 'select',
            modelName: 'bannerContent',
            propType: 'slot',
            description: 'Slot for banner content',
            options: slotBannerOptions.controlsOptions,
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
          bannerContent: ref(slotBannerOptions.defaultOption),
          defaultContent: ref(childrenOptions.defaultOption),
          logoAriaLabel: ref('Vue Storefront Logo'),
          logoLink: ref('/'),
          modelValue: ref(false),
        },
      ),
    };
  },
};
</script>
