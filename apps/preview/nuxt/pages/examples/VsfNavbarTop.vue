<!-- eslint-disable vue/one-component-per-file -->
<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfNavbarTop v-bind="state">
      <a
        href="/"
        aria-label="VSF Homepage"
        :class="[filled ? 'text-white' : 'text-brand', 'flex items-center h-8 md:h-10 lg:h-7']"
      >
        <VsfIconLogo viewBox="0 0 205 28" class="!hidden large:!block !w-[12.5rem] !h-[1.75rem]" />
        <VsfIconLogoSmall :size="VsfIconSizeEnum.xl" viewBox="0 0 40 40" class="!hidden medium:!block large:!hidden" />
        <VsfIconLogoSmall :size="VsfIconSizeEnum.lg" viewBox="0 0 40 40" class="block medium:!hidden" />
      </a>
      <VsfNavbarTopActionGroup class="hidden lg:block">
        <VsfNavbarTopAction v-for="(menuItem, i) in menuItems" :key="i" :link="menuItem.link">{{
          menuItem.label
        }}</VsfNavbarTopAction>
      </VsfNavbarTopActionGroup>
      <VsfNavbarTopAction class="block lg:hidden">
        <template #icon>
          <VsfIconMenu />
        </template>
        Menu</VsfNavbarTopAction
      >
      <VsfSpacer class="block md:hidden" />
      <VsfSearch placeholder="Search" class="flex-1 hidden md:block" />
      <VsfNavbarTopActionGroup>
        <VsfNavbarTopAction icon>
          <VsfBadge dot bordered value="10" :class="[filled ? 'bg-white' : 'bg-secondary-500']">
            <VsfIconBasket />
          </VsfBadge>
        </VsfNavbarTopAction>
        <VsfNavbarTopAction icon>
          <VsfBadge
            dot
            bordered
            value="10"
            :class="[filled ? 'bg-white text-gray-900' : 'bg-secondary-600 text-white']"
          >
            <VsfIconFavoritesOutline />
          </VsfBadge>
        </VsfNavbarTopAction>
        <VsfNavbarTopAction icon>
          <VsfIconPerson />
        </VsfNavbarTopAction>
      </VsfNavbarTopActionGroup>
    </VsfNavbarTop>
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  VsfNavbarTop,
  VsfNavbarTopAction,
  VsfNavbarTopActionGroup,
} from '@storefront-ui/vue/components/VsfNavbarTop/index';
import VsfSpacer from '@storefront-ui/vue/components/VsfNavbarTop/VsfSpacer.vue';
import VsfBadge from '@storefront-ui/vue/components/VsfBadge/VsfBadge.vue';
import VsfSearch from '@storefront-ui/vue/components/VsfSearch/VsfSearch.vue';
import {
  VsfIconBasket,
  VsfIconFavoritesOutline,
  VsfIconPerson,
  VsfIconMenu,
  VsfIconLogo,
  VsfIconLogoSmall,
  VsfIconSizeEnum,
} from '@storefront-ui/vue/components/VsfIcons/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfNavbarTopExample',
  components: {
    VsfNavbarTop,
    VsfNavbarTopAction,
    VsfNavbarTopActionGroup,
    VsfSpacer,
    VsfIconLogo,
    VsfIconLogoSmall,
    VsfIconBasket,
    VsfIconFavoritesOutline,
    VsfIconPerson,
    VsfIconMenu,
    VsfBadge,
    VsfSearch,
    ComponentExample,
  },
  setup() {
    return {
      VsfIconSizeEnum,
      ...prepareControls(
        [
          {
            type: 'boolean',
            modelName: 'filled',
            propType: 'boolean',
          },
          {
            type: 'json',
            modelName: 'menuItems',
            propType: 'Array',
            propDefaultValue: '[]',
          },
        ],
        {
          filled: ref(false),
          menuItems: ref([
            {
              label: 'Men',
              link: '/men',
            },
            {
              label: 'Women',
              link: '/women',
            },
            {
              label: 'Kids',
              link: '/women',
            },
          ]),
        },
      ),
    };
  },
});
</script>
