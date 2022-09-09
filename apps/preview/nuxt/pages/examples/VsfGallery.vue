<template>
  <div class="e-page">
    <div class="e-page-component">
      <div class="w-full h-full">
        <VsfGallery
          :images="imagesModel"
          :control="controlModel"
          :thumbsLeft="thumbsLeftModel"
          :contain="containModel"
          :counter="counterModel"
        >
          <template #image v-if="badgeModel">
            <VsfTag variant="info" :badge="true" class="absolute top-0 left-0 z-10">
              <template #prefix>
                <VsfIconHot class="vsf-icon-full" />
              </template>
              <span class="font-medium">-50%</span>
            </VsfTag>
          </template>
        </VsfGallery>
      </div>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import VsfGallery from '../../output/blocks/VsfGallery/VsfGallery.vue';
import VsfIconHot from '../../output/blocks/VsfIcons/VsfIconHot.vue';
import VsfTag from '../../output/blocks/VsfTag/VsfTag.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default {
  name: 'VsfGalleryExample',
  components: {
    Controls,
    VsfGallery,
    VsfIconHot,
    VsfTag,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            title: 'Control',
            type: 'select',
            options: ['thumbs', 'bullets'],
            modelName: 'controlModel',
            propType: 'string',
          },
          {
            title: 'Thumbs Left',
            type: 'boolean',
            modelName: 'thumbsLeftModel',
            propType: 'boolean',
          },
          {
            title: 'Contain',
            type: 'boolean',
            modelName: 'containModel',
            propType: 'boolean',
            propDefaultValue: "false",
            description: "Set 'object-fit: contain' attribute in main grid. Default attribute value: 'cover'"
          },
          {
            title: 'Counter',
            type: 'boolean',
            modelName: 'counterModel',
            propType: 'boolean',
          },
          {
            title: 'Badge',
            type: 'boolean',
            modelName: 'badgeModel',
            propType: '---',
            description: "Only for demonstration purpose. Badge is injected via 'image' slot"
          },
          {
            title: 'Images',
            type: 'json',
            modelName: 'imagesModel',
            propType: '(GalleryImageType | string)[]',
          },
        ],
        {
          controlModel: ref(),
          thumbsLeftModel: ref(false),
          containModel: ref(false),
          counterModel: ref(false),
          badgeModel: ref(false),
          imagesModel: ref([
            'https://via.placeholder.com/400x550',
            'https://via.placeholder.com/550',
            'https://via.placeholder.com/550x300',
            'https://via.placeholder.com/350x550',
            'https://via.placeholder.com/350x300',
            'https://via.placeholder.com/450x200',
            'https://via.placeholder.com/400x550',
            'https://via.placeholder.com/550',
            'https://via.placeholder.com/550x300',
            'https://via.placeholder.com/350x550',
            'https://via.placeholder.com/350x300',
            'https://via.placeholder.com/450x200',
          ]),
        },
      ),
    };
  },
};
</script>
