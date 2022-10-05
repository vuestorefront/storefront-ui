import { useStore, For, Show } from '@builder.io/mitosis';
import VsfButton from '../VsfButton/VsfButton.lite';
import VsfCounter from '../VsfCounter/VsfCounter.lite';
import VsfIconHome from '../VsfIcons/VsfIconHome.lite';
import VsfIconBasket from '../VsfIcons/VsfIconBasket.lite';
import VsfIconSearch from '../VsfIcons/VsfIconSearch.lite';
import VsfIconMenu from '../VsfIcons/VsfIconMenu.lite';
import VsfIconFavoritesOutline from '../VsfIcons/VsfIconFavoritesOutline.lite';

export const VsfNavbarBottomVariants = Object.freeze({
  primary: 'primary',
  secondary: 'secondary',
});
type VsfNavbarBottomVariantsKeys = keyof typeof VsfNavbarBottomVariants;

type item = {
  label?: string;
  link?: string;
  tag: string;
  icon: string;
};

export interface VsfNavbarBottomProps {
  variant?: VsfNavbarBottomVariantsKeys;
  absolutePosition: boolean;
  items: item[];
  withLabels: boolean;
  basketCounterValue?: string | number | null;
  basketDot: boolean;
  favouritesCounterValue?: string | number | null;
  favouritesDot: boolean;
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
      return props.variant || DEFAULT_VALUES.variant;
    },
    get useAbsolutePositionProp() {
      return props.absolutePosition ?? DEFAULT_VALUES.absolutePosition;
    },
    get useItemsProp() {
      return props.items || DEFAULT_VALUES.items;
    },
    get useWithLabelsProp() {
      return props.withLabels || DEFAULT_VALUES.withLabels;
    },
    get useBasketCounterValue() {
      return props.basketCounterValue || DEFAULT_VALUES.basketCounterValue;
    },
    get useBasketDot() {
      return props.basketDot ?? DEFAULT_VALUES.basketDot;
    },
    get useFavouritesCounterValue() {
      return props.favouritesCounterValue || DEFAULT_VALUES.favouritesCounterValue;
    },
    get useFavouritesDot() {
      return props.favouritesDot || DEFAULT_VALUES.favouritesDot;
    },
    get iconsClass(): string {
      return state.useVariantProp === 'secondary'
    },
    onClickHandler(label: string) {
      /* IF-vue */
      state.$emit('click', label);
      /* ENDIF-vue */
      props.onClick && props.onClick(label);
    },
    isIcon(name: string, item: string) {
      return item.toLowerCase() === name;
    },
  });
  return (
    <nav className={`${state.useAbsolutePositionProp === false ? 'fixed' : 'absolute'} bottom-0 w-full`}>
      <ul
        className={`grid grid-flow-col bg-white auto-cols-fr justify-items-stretch ${
      >
        <For each={state.useItemsProp}>
          {(item, index) => (
            <li className="flex" key={`${item.label}-${index}`}>
              <VsfButton
                link={item.link}
                aria-label={!state.useWithLabelsProp ? `Go to ${item.label}` : undefined}
                className={`${
                onClick={() => state.onClickHandler(item.label)}
                variant="tertiary"
              >
                <Show when={state.isIcon('home', item.icon)}>
                  <VsfIconHome className={iconsClass} />
                </Show>
                <Show when={state.isIcon('basket', item.icon)}>
                  <span class="inline-block relative">
                    <VsfIconBasket className={iconsClass} />
                    <Show
                      else={
                        <VsfCounter
                          className={`${
                        </VsfCounter>
                      }
                    >
                      <Show when={state.useBasketDot}>
                        <div
                          className={`${
                        />
                      </Show>
                    </Show>
                  </span>
                </Show>
                <Show when={state.isIcon('search', item.icon)}>
                  <VsfIconSearch className={iconsClass} />
                </Show>
                <Show when={state.isIcon('menu', item.icon)}>
                  <VsfIconMenu className={iconsClass} />
                </Show>
                <Show when={state.isIcon('favorites', item.icon)}>
                  <span class="inline-block relative">
                    <VsfIconFavoritesOutline className={iconsClass} />
                    <Show
                      else={
                        <VsfCounter
                          className={`${
                        </VsfCounter>
                      }
                    >
                      <Show when={state.useFavouritesDot}>
                        <div
                          className={`${
                        />
                      </Show>
                    </Show>
                  </span>
                </Show>
                <Show when={state.useWithLabelsProp}>
                  <span
                    className={`${
                  >
                    {item.label}
                  </span>
                </Show>
              </VsfButton>
            </li>
          )}
        </For>
      </ul>
    </nav>
  );
}
