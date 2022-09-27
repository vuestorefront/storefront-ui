import { useStore, For, Show } from '@builder.io/mitosis'
import VsfButton from '../VsfButton/VsfButton.lite';
import VsfCounter from '../VsfCounter/VsfCounter.lite';
import VsfIconHome from '../VsfIcons/VsfIconHome.lite';
import VsfIconBasket from '../VsfIcons/VsfIconBasket.lite';
import VsfIconSearch from '../VsfIcons/VsfIconSearch.lite';
import VsfIconMenu from '../VsfIcons/VsfIconMenu.lite';
import VsfIconFavoritesOutline from '../VsfIcons/VsfIconFavoritesOutline.lite';

export const VsfNavbarBottomVariants = Object.freeze({
  'primary': 'primary',
  'secondary': 'secondary',
});
type VsfNavbarBottomVariantsKeys = keyof typeof VsfNavbarBottomVariants;

type item = {
  label?: string;
  link?: string;
  tag: string;
  icon: string;
}

export interface VsfNavbarBottomProps {
  variant?: VsfNavbarBottomVariantsKeys,
  absolutePosition: boolean,
  items: item[],
  withLabels: boolean;
  basketCounterValue?: string | number | null,
  basketDot: boolean,
  favouritesCounterValue?: string | number | null, 
  favouritesDot: boolean, 
  onClick?: (...args: any[]) => void;
}
const DEFAULT_VALUES = {
  variant: VsfNavbarBottomVariants.primary,
  absolutePosition: false,
  items: [],
  withLabels: false,
};

export default function VsfNavbarBottom(props: VsfNavbarBottomProps) {
  const state = useStore({
    get useVariantProp() {
      return props.variant || DEFAULT_VALUES.variant
    },
    get useAbsolutePositionProp() {
      return props.absolutePosition ?? DEFAULT_VALUES.absolutePosition
    },
    get useItemsProp() {
      return props.items || DEFAULT_VALUES.items
    },
    get useWithLabelsProp() {
      return props.withLabels || DEFAULT_VALUES.withLabels
    },
    get useBasketCounterValue() {
      return props.basketCounterValue || DEFAULT_VALUES.basketCounterValue
    }, 
    get useBasketDot() {
      return props.basketDot ?? DEFAULT_VALUES.basketDot
    },
    get useFavouritesCounterValue() {
      return props.favouritesCounterValue || DEFAULT_VALUES.favouritesCounterValue
    },
    get useFavouritesDot() {
      return props.favouritesDot || DEFAULT_VALUES.favouritesDot
    }, 
    get iconsClass(): string {
      return state.useVariantProp === 'secondary' ? 'text-white' : 'text-black group-hover:text-primary-600 group-active:text-primary-700'
    },
    onClickHandler(label: string) {
      /* IF-vue */
      state.$emit('click', label);
      /* ENDIF-vue */
      props.onClick && props.onClick(label);
    },
    isIcon(name: string, item: string) {
      return item.toLowerCase() === name
    },
  });
  return (
    <nav className={`${state.useAbsolutePositionProp === false ? 'fixed' : 'absolute'} bottom-0 w-full`}>
      <ul
        className={`grid grid-flow-col bg-white auto-cols-fr justify-items-stretch ${state.useVariantProp === VsfNavbarBottomVariants.secondary ? 'bg-brand' : 'bg-white'}`}
      >
        <For each={state.useItemsProp}>{
          (item, index) =>
            <li className='flex' key={`${item.label}-${index}`}>
              <VsfButton
                link={item.link}
                aria-label={!state.useWithLabelsProp ? `Go to ${item.label}` : undefined}
                className={`${state.useVariantProp === 'primary' ? 'hover:bg-primary-100 active:bg-primary-200' : 'hover:!bg-primary-600 active:!bg-primary-700'} flex flex-col items-center justify-center flex-1 pt-3 pb-1 group rounded-none`}
                onClick={() => state.onClickHandler(item.label)}
                variant="tertiary"
              >
                <Show when={state.isIcon("home", item.icon)}>
                  <VsfIconHome className={iconsClass} />
                </Show>
                <Show when={state.isIcon("basket", item.icon)}>
                  <span class="inline-block relative">
                    <VsfIconBasket className={iconsClass} />
                    <Show when={!state.useBasketCounterValue}
                      else={
                        <VsfCounter
                          className={`${state.useVariantProp === 'primary' ? 'bg-secondary-700 border-2 border-white' : 'bg-white border-2 border-brand group-hover:border-green-600 group-active:border-green-700'} absolute  -top-2 -right-2`}
                          size="xs"
                          pill={true}
                        >
                          <span className={`${state.useVariantProp === 'primary' ? 'text-white ' : 'text-gray-900'}`}>
                            {state.useBasketCounterValue}
                          </span>
                        </VsfCounter>
                      }
                    >
                      <Show when={state.useBasketDot}>
                        <div
                          className={`${state.useVariantProp === 'primary' ? 'bg-secondary-700' : 'bg-white'} absolute w-3 h-3  -top-2 -right-2 rounded-full`}
                        />
                      </Show>
                    </Show>
                  </span>
                </Show>
                <Show when={state.isIcon("search", item.icon)}>
                  <VsfIconSearch className={iconsClass} />
                </Show>
                <Show when={state.isIcon("menu", item.icon)}>
                  <VsfIconMenu className={iconsClass} />
                </Show>
                <Show when={state.isIcon("favorites", item.icon)}>
                  <span class="inline-block relative">
                    <VsfIconFavoritesOutline className={iconsClass} />
                    <Show when={!state.useFavouritesCounterValue}
                      else={
                        <VsfCounter
                          className={`${state.useVariantProp === 'primary' ? 'bg-secondary-700 border-2 border-white' : 'bg-white border-2 border-brand group-hover:border-green-600 group-active:border-green-700'} absolute -top-2 -right-2`}
                          size="xs"
                          pill={true}
                        >
                          <span className={`${state.useVariantProp === 'primary' ? 'text-white ' : 'text-gray-900'}`}>
                            {state.useFavouritesCounterValue}
                          </span>
                        </VsfCounter>
                      }
                    >
                      <Show when={state.useFavouritesDot}>
                        <div
                          className={`${state.useVariantProp === 'primary' ? 'bg-secondary-700' : 'bg-white'} absolute w-3 h-3 -top-2 -right-2 rounded-full`}
                        />
                      </Show>
                    </Show>
                  </span>
                </Show>         
                <Show when={state.useWithLabelsProp}>
                  <span
                    className={`${state.useVariantProp === 'primary' ? 'text-gray-900 group-hover:text-primary-600 group-active:text-primary-700' : 'text-white'} text-xs mt-0.5 font-medium`}
                  >
                    { item.label }
                  </span>
                </Show>
              </VsfButton>    
            </li>
          }
        </For>
      </ul>
    </nav>
  )
}  
