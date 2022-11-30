<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfCard
        :title="title"
        :size="size"
        :link="link"
        :link-tag="linkTag"
        :description="description"
        :img-src="imgSrc"
        :img-attr="imgAttr"
        :button-text="buttonText"
        :with-button="withButton"
        :rounded="rounded"
      />
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import VsfCard from '@sfui/sfui/frameworks/vue/components/VsfCard/VsfCard.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';
import { VsfCardSizes, VsfCardLinkTags } from '@sfui/sfui/frameworks/vue/components/VsfCard/types';
import productImage from '../fixture/product-card.webp';
export default defineComponent({
  name: 'VsfCardExample',
  components: {
    VsfCard,
    Controls,
  },
  setup() {
    // TODO: isRequired is not working properly, always set to false
    return prepareControls(
      [
        {
          type: 'text',
          modelName: 'title',
          propType: 'string',
          description: 'Set title for card.',
          isRequired: true,
        },
        {
          type: 'select',
          modelName: 'size',
          options: Object.keys(VsfCardSizes),
          description: 'Set size variant.',
          propType: 'VsfCardSizes',
          isRequired: false,
        },
        {
          type: 'text',
          modelName: 'link',
          propType: 'string',
          description:
            'Set link to render as clickable card. Without link the card is static with clickable button only.',
          isRequired: false,
        },
        {
          type: 'text',
          propType: 'string',
          modelName: 'linkTag',
        },
        {
          type: 'text',
          modelName: 'imgSrc',
          propType: 'string',
          description: 'Set image source.',
          isRequired: false,
        },
        {
          type: 'json',
          propType: 'object',
          modelName: 'imgAttr',
        },
        {
          type: 'text',
          modelName: 'description',
          propType: 'string',
          description: 'Set card description.',
          isRequired: false,
        },
        {
          type: 'boolean',
          modelName: 'withButton',
          propType: 'boolean',
          description: 'Show or hide the button',
          isRequired: false,
        },
        {
          type: 'text',
          modelName: 'buttonText',
          propType: 'string',
          description: 'Set button text.',
          isRequired: true,
        },
        {
          type: 'boolean',
          modelName: 'rounded',
          propType: 'boolean',
          description: 'Show rounded variant of card component.',
          isRequired: false,
        },
      ],
      {
        title: ref('Title'),
        size: ref(VsfCardSizes.base),
        link: ref('/examples/VsfCard'),
        linkTag: ref(VsfCardLinkTags.a),
        imgSrc: ref(productImage),
        imgAttr: ref({ alt: 'Example image to describe card component content', loading: 'lazy' }),
        description: ref('There are many variations of passages of Lorem Ipsum available'),
        buttonText: ref('Button'),
        withButton: ref(true),
        rounded: ref(false),
      },
    );
  },
});
</script>
