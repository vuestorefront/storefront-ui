
import { useStore, Show, For } from "@builder.io/mitosis";
import { SlotType } from '../../functions/types';
import { classStringFromArray } from '../../functions/domUtils';
import VsfIconBasket from '../VsfIcons/VsfIconBasket';
import VsfIconFavoritesOutline from "../VsfIcons/VsfIconFavoritesOutline.lite";
import VsfIconPerson from "../VsfIcons/VsfIconPerson.lite";
import VsfIconMenu from "../VsfIcons/VsfIconMenu.lite";
import VsfIconLogoVsf from "../VsfIcons/VsfIconLogoVsf.lite";
import VsfIconLogoVsfWithName from "../VsfIcons/VsfIconLogoVsfWithName.lite";
import VsfButton from "../VsfButton/VsfButton.lite";
import VsfCounter from "../VsfCounter/VsfCounter.lite";
import VsfSearch from "../VsfSearch/VsfSearch.lite";

export const VsfNavBarTopThemeVariants = Object.freeze({
  'default': 'default',
  'branded': 'branded',
});
type VsfNavBarTopThemeVariantsKeys = keyof typeof VsfNavBarTopThemeVariants;

export interface VsfNavBarTopProps {
  searchDisabled?: boolean,
  searchValue?: string,
  searchModelValue?: string,
  searchRequired?: boolean,
  searchAutocomplete?: string,
  themeVariant?: VsfNavBarTopThemeVariantsKeys;
  navData?: { text: string, link: string }[],
  basketCounterValue?: string | number | null,
  favouritesCounterValue?: string | number | null,
  logoLink?: string,
  loginText?: string,
  slotLogo?: SlotType,
  slotMenu?: SlotType,
  slotSearch?: SlotType,
  slotIcons?: SlotType,
  onMenuToggle?: (...args: Event[]) => void;
  onInput?: (...args: Event[]) => void,
  onSubmit?: (...args: Event[]) => void;
  onReset?: (...args: Event[]) => void;
}

const DEFAULT_VALUES = {
  searchDisabled: false,
  searchValue: '',
  searchModelValue: '',
  searchRequired: false,
  searchAutocomplete: '',
  themeVariant: 'default',
  navData: [],
  basketCounterValue: null,
  favouritesCounterValue: null,
  logoLink: '/',
  loginText: 'Log In'
}

export default function VsfNavBarTop(props: VsfNavBarTopProps) {
  const state = useStore({
    get useSearchDisabledProp() {
      return props.searchDisabled ?? DEFAULT_VALUES.searchDisabled
    },
    get useSearchValueProp() {
      return props.searchValue || DEFAULT_VALUES.searchValue
    },
    get vueProxyValue() {
      return {
        get: function () {
          return props.searchModelValue;
        },
        set: function (value: string) {
          state.$emit('update:modelSearchValue', value);
        },
      };
    },
    get useSearchModelValueProp() {
      return props.searchModelValue || DEFAULT_VALUES.searchModelValue
    },
    get useSearchRequiredProp() {
      return props.searchRequired ?? DEFAULT_VALUES.searchRequired
    },
    get useSearchAutocompleteProp() {
      return props.searchAutocomplete || DEFAULT_VALUES.searchAutocomplete
    },
    get useThemeVariantProp() {
      return props.themeVariant || DEFAULT_VALUES.themeVariant
    },
    get useNavData() {
      return props.navData || DEFAULT_VALUES.navData
    },
    get useBasketCounterValue() {
      return props.basketCounterValue || DEFAULT_VALUES.basketCounterValue
    },
    get useFavouritesCounterValue() {
      return props.favouritesCounterValue || DEFAULT_VALUES.favouritesCounterValue
    },
    get useLogoLink() {
      return props.logoLink || DEFAULT_VALUES.logoLink
    },
    get useLoginText() {
      return props.loginText || DEFAULT_VALUES.loginText
    },
    get headerClass(): string {
      return classStringFromArray([
        'grid grid-cols-[max-content_max-content_1fr] small:grid-cols-[max-content_max-content_minmax(250px,_1fr)_max-content] w-full items-center grid-flow-col py-2 px-4 medium:px-10 medium:py-5',
        state.useThemeVariantProp === 'default' ? 'bg-white' : 'bg-brand'
      ])
    },
    get variantClass(): string {
      return state.useThemeVariantProp === 'default' ? 'text-gray-900 group-hover:text-green-600 hover:text-green-600 group-active:text-green-700 active:text-green-700' : 'text-white group-hover:bg-green-600 hover:bg-green-600 group-active:bg-green-700 active:bg-green-700'
    },
    get variantBackgroundCLass(): string {
      return state.useThemeVariantProp === 'default' ? '' : 'hover:bg-green-600 active:bg-green-700'
    },
    onMenuClickHandler(event: Event) {
      /* IF-vue */
      state.$emit('toggle', event);
      /* ENDIF-vue */
      /* IF-react */
      props.onMenuToggle && props.onMenuToggle(event);
      /* ENDIF-react */
    },
    onSearchInputHandler(event: InputEvent) {
      /* IF-vue */
      state.$emit('input', event);
      /* ENDIF-vue */
      /* IF-react */
      props.onInput && props.onInput(event);
      /* ENDIF-react */
    },
    onSearchSubmitHandler(event: Event) {
      /* IF-vue */
      state.$emit('submit', event);
      /* ENDIF-vue */
      /* IF-react */
      props.onSubmit && props.onSubmit(event);
      /* ENDIF-react */
    },
    onSearchResetHandler(event: PointerEvent) {
      /* IF-vue */
      state.$emit('update:modelSearchModelValue', '')
      state.$emit('reset', event);
      /* ENDIF-vue */
      /* IF-react */
      props.onReset && props.onReset(event);
      /* ENDIF-react */
    }
  });

  return (
    <>
      <header
        class={state.headerClass}
      >
        <>{props.slotLogo}</>
        <Show when={!props.slotLogo}>
          <a
            href={state.useLogoLink}
            class="flex items-center rounded-md outline-violet"
            aria-label="VSF Homepage"
          >
            <div class="block large:hidden w-10 h-10">
              <VsfIconLogoVsf
                className={`${state.useThemeVariantProp === 'default' ? 'text-brand' : 'text-white'} vsf-icon-full`}
              />
            </div>
            <div className="hidden large:block w-[205px] h-[28px]">
              <VsfIconLogoVsfWithName
                className={`${state.useThemeVariantProp === 'default' ? 'text-brand' : 'text-white'} vsf-icon-full`}
              />
            </div>
          </a>
        </Show>
        <div class="items-center mx-4 medium:mx-10">
          <>{props.slotMenu}</>
          <Show when={!props.slotMenu}>
            <nav>
              <ul class="justify-center hidden px-2 large:flex">
                <For
                  each={state.useNavData}
                >
                  {(navItem, index) =>
                    <li class="mr-1 last-of-type:mr-0" key={index}>
                      <VsfButton
                        link={navItem.link}
                        variant="tertiary"
                        className={`${state.variantClass} group`}
                      >
                        <span class={state.variantClass}>{navItem.text}</span>
                      </VsfButton>
                    </li>
                  }
                </For>
              </ul>
            </nav>

            {/* TODO replace menu button with the dropdown component */}

            <VsfButton
              variant="tertiary"
              className={`${state.variantClass} group inline-flex large:hidden items-center justify-center pr-[16px] pl-[14px] py-2 text-base font-medium  bg-transparent rounded-md cursor-pointer hover:bg-green-100 active:bg-green-200 disabled:bg-transparent hover:text-green-600 active:text-green-700 disabled:text-gray-500 disabled:opacity-50 font-body outline-violet`}
              onClick={(event) => state.onMenuClickHandler(event)}
            >
              {/* TODO add VsfIconMenu in slotPrefix when it will be possible  */}
              <VsfIconMenu
                className={state.variantClass}
              />
              <span className={`${state.variantClass} ml-2 whitespace-nowrap`}>
                Menu
              </span>
            </VsfButton>
          </Show>
        </div>
        <>{props.slotSearch}</>
        <Show when={!props.slotSearch}>
          <VsfSearch
            class="hidden small:block justify-self-end medium:ml-10"
            value={state.useSearchValueProp}
            v-model="vueProxyValue"
            placeholder={"Search"}
            disabled={state.useSearchDisabledProp}
            submitText={""}
            name={"search"}
            required={state.useSearchRequiredProp}
            autocomplete={state.useSearchAutocompleteProp}
            onInput={(e) => state.onSearchInputHandler(e)}
            onSubmit={(e) => state.onSearchSubmitHandler(e)}
            onReset={(e) => state.onSearchResetHandler(e)}
          />
        </Show>
        <ul class="flex items-center self-end justify-self-end medium:ml-10">
          <>{props.slotIcons}</>
          <Show when={!props.slotIcons}>
            <li>
              <VsfButton
                variant="tertiary"
                aria-label="Cart"
                className={`${state.variantClass} group relative inline-flex items-center justify-center !px-2 w-10 h-10 text-base font-medium  bg-transparent rounded-md cursor-pointer hover:bg-green-100 active:bg-green-200 disabled:bg-transparent hover:text-green-600 active:text-green-700 disabled:text-gray-500 disabled:opacity-50 font-body outline-violet`}
              >
                <VsfIconBasket class={state.variantClass} size="base" />
                <Show when={state.useBasketCounterValue}
                  else={
                    <div
                      className={`${state.useThemeVariantProp === 'default' ? 'bg-secondary-700' : 'bg-white'} absolute w-3 h-3 top-0.5 right-0.5 rounded-full`}
                    />
                  }
                >
                  <VsfCounter
                    className={`${state.useThemeVariantProp === 'default' ? 'bg-secondary-700 border-2 border-white' : 'bg-white border-2 border-brand group-hover:border-green-600 group-active:border-green-700'} absolute top-0.5 right-0.5`}
                    size="xs"
                    pill={true}
                  >
                    <span className={`${state.useThemeVariantProp === 'default' ? 'text-white ' : 'text-gray-900'}`}>
                      {state.useBasketCounterValue}
                    </span>
                  </VsfCounter>
                </Show>
              </VsfButton>
            </li>
            <li class="mx-1">
              <VsfButton
                variant="tertiary"
                aria-label="Wishlist"
                className={`${state.variantClass} group relative inline-flex items-center justify-center !px-2 w-10 h-10 text-base font-medium  bg-transparent rounded-md cursor-pointer hover:bg-green-100 active:bg-green-200 disabled:bg-transparent hover:text-green-600 active:text-green-700 disabled:text-gray-500 disabled:opacity-50 font-body outline-violet`}
              >
                <VsfIconFavoritesOutline class={state.variantClass} size="base" />
                <Show when={state.useFavouritesCounterValue}
                  else={
                    <div
                      className={`${state.useThemeVariantProp === 'default' ? 'bg-secondary-700' : 'bg-white'} absolute w-3 h-3 top-0.5 right-0.5 rounded-full`}
                    />
                  }
                >
                  <VsfCounter
                    className={`${state.useThemeVariantProp === 'default' ? 'bg-secondary-700 border-2 border-white' : 'bg-white border-2 border-brand group-hover:border-green-600 group-active:border-green-700'} absolute top-0.5 right-0.5`}
                    size="xs"
                    pill={true}
                  >
                    <span className={`${state.useThemeVariantProp === 'default' ? 'text-white ' : 'text-gray-900'}`}>
                      {state.useFavouritesCounterValue}
                    </span>
                  </VsfCounter>
                </Show>
              </VsfButton>
            </li>
            <li>
              <VsfButton
                variant="tertiary"
                aria-label="Log in"
                className={`${state.variantClass} group inline-flex items-center justify-center p-2 text-base font-medium bg-transparent rounded-md cursor-pointer group hover:bg-green-100 active:bg-green-200 disabled:bg-transparent hover:text-green-600 active:text-green-700 disabled:text-gray-500 disabled:opacity-50 font-body outline-violet`}
              >
                <VsfIconPerson className={state.variantClass} />
                <span class={`${state.variantClass} hidden ml-2 whitespace-nowrap large:block`}>
                  {state.useLoginText}
                </span>
              </VsfButton>
            </li>
          </Show>
        </ul>
      </header>
    </>
  )
}
