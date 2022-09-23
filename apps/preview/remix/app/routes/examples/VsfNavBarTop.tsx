
import VsfNavBarTop, { VsfNavBarTopThemeVariants } from '../../output/blocks/VsfNavBarTop/VsfNavBarTop.lite'
import Controls, { prepareControls } from '../../components/utils/Controls';
import VsfSearch from '../../output/blocks/VsfSearch/VsfSearch.lite';
import VsfIconSearch from '../../output/blocks/VsfIcons/VsfIconSearch.lite'

export default function VsfNavBarTopExample() {
  const { state, controls } = prepareControls([
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
  ], {
    searchDisabledModel: false,
    searchValueModel: '',
    themeVariantModel: VsfNavBarTopThemeVariants.default,
    navDataModel:[
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
      }
    ],
    basketCounterValueModel: null,
    favouritesCounterValueModel: null,
    logoLinkModel: '/',
    // searchRequiredModel: false,
    // searchAutocompleteModel: '',
  });
  function searchInputHandler(event: InputEvent) {
    state.set({ ...state.get, searchValueModel: event.target.value });
    console.log('Search Input: ', event);
  };
  function searchSubmitHandler(event: SubmitEvent) {
    event.preventDefault();
    console.log('Search Submit: ', event);
  };
  function searchResetHandler(event: Event) {
    state.set({ ...state.get, searchValueModel: '' });
    console.log('Search Reset: ', event);
  };
  function menuToggleHandler(event: Event) {
    console.log('Mobile menu toggle: ', event);
  };
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfNavBarTop
          themeVariant={state.get.themeVariantModel}
          logoLink={state.get.logoLinkModel}
          navData={state.get.navDataModel}
          basketCounterValue={state.get.basketCounterValueModel}
          favouritesCounterValue={state.get.favouritesCounterValueModel}
          onMenuToggle={menuToggleHandler}
          slotSearch={
            <VsfSearch
              class="hidden w-full small:block justify-self-end medium:ml-10"
              value={state.get.searchValueModel}
              placeholder={"Search"}
              disabled={state.get.searchDisabledModel}
              submitText={""}
              name={"search"}
              onInput={searchInputHandler}
              onSubmit={searchSubmitHandler}
              onReset={searchResetHandler}
              slotSuffix={<VsfIconSearch />}
            />
          }
        >        
        </VsfNavBarTop>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}
