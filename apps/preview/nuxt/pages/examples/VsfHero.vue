<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <div>
      <VsfHero :direction="direction" :bg-img-mobile-src="bgImgMobileSrc" :bg-img-desktop-src="bgImgDesktopSrc">
        <template #media>
          <img :src="hero_img" alt="" class="vsf-hero-img" />
        </template>
        <VsfDisplayContent :subtitle="subtitle" :title="title" :description="description">
          <VsfButton type="button">Buy now</VsfButton>
        </VsfDisplayContent>
      </VsfHero>
    </div>
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import { VsfHero, VsfHeroDirection } from '@storefront-ui/vue/components/VsfHero/index';
import { VsfButton } from '@storefront-ui/vue/components/VsfButton/index';
import { VsfDisplayContent } from '@storefront-ui/vue/components/VsfDisplayContent/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';
import hero_img from '../../assets/fixture/hero_img.png';
import hero_bg_mobile from '../../assets/fixture/hero_bg_mobile.png';
import hero_bg_desktop from '../../assets/fixture/hero_bg_desktop.png';

export default {
  name: 'VsfHeroExample',
  components: {
    ComponentExample,
    VsfHero,
    VsfButton,
    VsfDisplayContent,
  },
  setup() {
    return {
      VsfHeroDirection,
      hero_img,
      ...prepareControls(
        [
          {
            type: 'select',
            modelName: 'direction',
            propDefaultValue: VsfHeroDirection.horizontal,
            description: '',
            options: Object.values(VsfHeroDirection),
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'bgImgMobileSrc',
            propDefaultValue: undefined,
            description: '',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'bgImgDesktopSrc',
            propDefaultValue: undefined,
            description: '',
          },
        ],
        {
          direction: ref(VsfHeroDirection.horizontal),
          bgImgMobileSrc: ref(hero_bg_mobile),
          bgImgDesktopSrc: ref(hero_bg_desktop),
          title: ref('Hot deals'),
          subtitle: ref('Special offer'),
          description: ref(
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          ),
        },
      ),
    };
  },
};
</script>
