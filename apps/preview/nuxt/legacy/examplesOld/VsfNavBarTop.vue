<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfNavBarTop
        :theme-variant="themeVariantModel"
        :basket-counter-value="basketCounterValueModel"
        :favourites-counter-value="favouritesCounterValueModel"
        :nav-data="navDataModel"
        :logo-link="logoLinkModel"
        @toggle="menuToggleHandler"
      >
        <template #search>
          <VsfSearch
            v-model="searchValueModel"
            class="hidden w-full small:block justify-self-end medium:ml-10"
            placeholder="Search"
            :disabled="searchDisabledModel"
            name="search"
            @input="searchInputHandler"
            @submit="searchSubmitHandler"
            @reset="searchResetHandler"
          >
            <template #suffix>
              <VsfIconSearch :class="themeVariantModel === 'default' ? 'text-gray-500' : 'text-primary-500'" />
            </template>
          </VsfSearch>
        </template>
      </VsfNavBarTop>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import VsfNavBarTop, { VsfNavBarTopThemeVariants } from '../../output/blocks/VsfNavBarTop/VsfNavBarTop.vue';
import VsfSearch from '../../output/blocks/VsfSearch/VsfSearch.vue';
import VsfIconSearch from '../../output/blocks/VsfIcons/VsfIconSearch.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default {
  name: 'VsfNavBarTopExample',
  components: {
    Controls,
    VsfNavBarTop,
    VsfSearch,
    VsfIconSearch,
  },
  setup() {
    const searchInputHandler = (event) => {
      console.log('Search Input: ', event);
    };
    const searchSubmitHandler = (event) => {
      event.preventDefault();
      console.log('Search Submit: ', event);
    };
    const searchResetHandler = (event) => {
      console.log('Search Reset: ', event);
    };
    const menuToggleHandler = (event) => {
      console.log('Mobile menu toggle: ', event);
    };
    return {
      searchInputHandler,
      searchSubmitHandler,
      searchResetHandler,
      menuToggleHandler,
      ...prepareControls(
        [
          {
            title: 'themeVariant',
            type: 'select',
            modelName: 'themeVariantModel',
            options: Object.keys(VsfNavBarTopThemeVariants),
            propDefaultValue: VsfNavBarTopThemeVariants.default,
          },
          {
            title: 'navData',
            type: 'json',
            modelName: 'navDataModel',
            propDefaultValue: '[{text: "", link: ""}]',
          },
          {
            title: 'searchDisabled',
            type: 'boolean',
            modelName: 'searchDisabledModel',
            propDefaultValue: false,
          },
          {
            title: 'searchValue',
            type: 'text',
            modelName: 'searchValueModel',
            propDefaultValue: '',
          },
          // TODO add these props when proper features will be ready
          // {
          //   title: 'searchRequired',
          //   type: 'boolean',
          //   modelName: 'searchRequiredModel',
          //   propDefaultValue: false,
          // },
          // {
          //   title: 'searchAutocomplete',
          //   type: 'text',
          //   modelName: 'searchAutocompleteModel',
          //   propDefaultValue:'',
          // },
          {
            title: 'basketCounterValue',
            type: 'text',
            modelName: 'basketCounterValueModel',
            propDefaultValue: 'null',
          },
          {
            title: 'favouritesCounterValue',
            type: 'text',
            modelName: 'favouritesCounterValueModel',
            propDefaultValue: 'null',
          },
          {
            title: 'logoLink',
            type: 'text',
            modelName: 'logoLinkModel',
            propDefaultValue: '/',
          },
        ],
        {
          searchDisabledModel: ref(false),
          searchValueModel: ref(''),
          // searchRequiredModel: ref(false),
          // searchAutocompleteModel: ref(''),
          themeVariantModel: ref(VsfNavBarTopThemeVariants.default),
          navDataModel: ref([
            {
              text: 'Men',
              link: '/',
            },
            {
              text: 'Women',
              link: '/',
            },
            {
              text: 'Kids',
              link: '/',
            },
          ]),
          basketCounterValueModel: ref(null),
          favouritesCounterValueModel: ref(null),
          logoLinkModel: ref('/'),
        },
      ),
    };
  },
};
</script>
