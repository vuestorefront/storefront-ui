<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfListItemMenu
        class="max-w-sm"
        :size="size"
        :label="label"
        :link="link"
        :counter="counter"
        :secondary-text="secondaryText"
        :truncate="truncate"
        :selected="selected"
        :selected-background="selectedBackground"
        :disabled="disabled"
        @click="selected = !selected"
      >
        <template v-if="showprefix" #prefix>
          <VsfIconCheck :size="VsfIconSizeEnum.sm" />
        </template>
        <template v-if="showSuffix" #suffix>
          <VsfIconCheck :size="VsfIconSizeEnum.sm" />
        </template>
      </VsfListItemMenu>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { VsfListItemMenu, VsfListItemMenuSizes } from '@storefront-ui/vue/components/VsfListItemMenu/index';
import { VsfIconSizeEnum, VsfIconCheck } from '@storefront-ui/vue/components/VsfIcons/index';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
  name: 'VsfListItemMenuExample',
  components: {
    VsfListItemMenu,
    VsfIconCheck,
    Controls,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'text',
            modelName: 'label',
            propType: 'string',
            description: 'Set label value',
          },
          {
            type: 'text',
            modelName: 'link',
            propType: 'string',
            description: 'Set link to render as a link',
          },
          {
            type: 'text',
            modelName: 'secondaryText',
            propType: 'string',
            description: 'Set secondary text',
          },
          {
            type: 'text',
            modelName: 'counter',
            propType: 'string',
            description: 'Set counter value',
          },
          {
            type: 'boolean',
            modelName: 'showSuffix',
            description: 'Show or hide the suffix content',
          },
          {
            type: 'boolean',
            modelName: 'showprefix',
            description: 'Show or hide the prefix content',
          },
          {
            type: 'select',
            modelName: 'size',
            options: Object.keys(VsfListItemMenuSizes),
            description: 'Set size variant',
          },
          {
            type: 'boolean',
            modelName: 'disabled',
            description: 'Show disabled state of component',
          },
          {
            type: 'boolean',
            modelName: 'selected',
            description: 'Show selected state of component',
          },
          {
            type: 'boolean',
            modelName: 'selectedBackground',
            description: 'Show selected background state of component',
          },
          {
            type: 'boolean',
            modelName: 'truncate',
            description: 'Show truncated version of secondary text',
          },
        ],
        {
          label: ref('Label'),
          size: ref<VsfListItemMenuSizes>(VsfListItemMenuSizes.base),
          link: ref(undefined),
          counter: ref(123),
          showSuffix: ref(false),
          showprefix: ref(false),
          secondaryText: ref('Secondary text'),
          disabled: ref(undefined),
          selected: ref(false),
          selectedBackground: ref(false),
          truncate: ref(false),
        },
      ),
      VsfIconSizeEnum,
      VsfListItemMenuSizes,
    };
  },
});
</script>
