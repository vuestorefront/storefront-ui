<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfReview v-bind="state">
      <template #rating>
        <VsfRating :value="3" :max="5" />
      </template>
      <template v-if="slotAuthorSuffix" #authorSuffix>
        <VsfTag :size="VsfTagSizes.sm" :variant="VsfTagVariants.primary" label="Verified purchaser">
          <template #icon>
            <VsfIconCheck :size="VsfIconSizeEnum.xs" />
          </template>
        </VsfTag>
      </template>
    </VsfReview>
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VsfReview from '@storefront-ui/vue/components/VsfReview/VsfReview.vue';
import VsfRating from '@storefront-ui/vue/components/VsfRating/VsfRating.vue';
import { VsfTag, VsfTagSizes, VsfTagVariants } from '@storefront-ui/vue/components/VsfTag/index';
import { VsfIconSizeEnum, VsfIconCheck } from '@storefront-ui/vue/components/VsfIcons/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfReviewExample',
  components: {
    VsfReview,
    VsfRating,
    VsfTag,
    VsfIconCheck,
    ComponentExample,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'text',
            modelName: 'title',
            propDefaultValue: '',
            propType: 'string',
            isRequired: true,
          },
          {
            type: 'text',
            modelName: 'content',
            propDefaultValue: '',
            propType: 'string',
            isRequired: true,
          },
          {
            type: 'text',
            modelName: 'date',
            propDefaultValue: '',
            propType: 'string',
            isRequired: false,
          },
          {
            type: 'text',
            modelName: 'author',
            propDefaultValue: '',
            propType: 'string',
            isRequired: false,
          },
          {
            type: 'text',
            modelName: 'charLimit',
            propDefaultValue: '',
            propType: 'number',
            isRequired: false,
          },
          {
            type: 'text',
            modelName: 'showMoreText',
            propDefaultValue: '',
            propType: 'string',
            isRequired: false,
          },
          {
            type: 'text',
            modelName: 'showLessText',
            propDefaultValue: '',
            propType: 'string',
            isRequired: false,
          },
          {
            type: 'boolean',
            modelName: 'slotAuthorSuffix',
            propType: 'boolean',
          },
        ],
        {
          title: ref('Lorem Ipsum is simply dummy text'),
          content: ref(
            `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.`,
          ),
          date: ref('16 days ago'),
          author: ref('Username'),
          charLimit: ref(700),
          showMoreText: ref('Read more'),
          showLessText: ref('Read less'),
          slotAuthorSuffix: ref(false),
        },
      ),
      VsfTagSizes,
      VsfTagVariants,
      VsfIconSizeEnum,
    };
  },
});
</script>
