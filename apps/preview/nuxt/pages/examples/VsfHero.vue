<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <div>
      <VsfHero :direction="direction" :bg-img-mobile-src="bgImgMobileSrc" :bg-img-desktop-src="bgImgDesktopSrc">
        <template #media>
          <img :src="hero_img" alt="" class="vsf-hero-img" />
        </template>
        <!-- TODO: use DisplayContent for this example after it's implemented -->
        <div class="pb-6">
          <p class="uppercase text-xs tracking-wide font-medium text-gray-500">special offer</p>
        </div>
        <div class="pb-4">
          <h1 class="text-4xl font-medium">Hot Deals.</h1>
        </div>
        <div class="pb-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          </p>
        </div>
        <VsfButton type="button">Buy now</VsfButton>
      </VsfHero>
    </div>
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import { VsfHero, VsfHeroDirection } from '@storefront-ui/vue/components/VsfHero/index';
import { VsfButton } from '@storefront-ui/vue/components/VsfButton/index';
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
        },
      ),
    };
  },
};
</script>
