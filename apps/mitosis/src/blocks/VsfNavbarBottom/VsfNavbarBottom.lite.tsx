import { useStore, For, Show } from '@builder.io/mitosis'
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
      return props.absolutePosition || DEFAULT_VALUES.absolutePosition
    },
    get useItemsProp() {
      return props.items || DEFAULT_VALUES.items
    },
    get useWithLabelsProp() {
      return props.withLabels || DEFAULT_VALUES.withLabels
    },
    onClickHandler(label: string) {
      /* IF-vue */
      state.$emit('click', label);
      /* ENDIF-vue */
      props.onClick && props.onClick(label);
    },
  });
  return (
    <nav className={`${state.useAbsolutePositionProp === false ? 'fixed' : 'absolute'} bottom-0 w-full`}>
      <ul
        className={`grid grid-flow-col bg-white auto-cols-fr justify-items-stretch ${state.useVariantProp === VsfNavbarBottomVariants.secondary ? 'bg-brand' : 'bg-white'}`}
      >
        <For each={state.useItemsProp}>{(item, index) => 
          <li className='flex' key={`${item.label}-${index}`}>
            <Show when={item.tag === 'link'} else={
              <button
                aria-label={!state.useWithLabelsProp ? `Go to ${item.label}` : null}
                className={`${state.useVariantProp === 'primary' ? 'hover:bg-primary-100 active:bg-primary-100' : 'hover:bg-primary-600 active:bg-primary-600'} flex flex-col items-center justify-center flex-1 pt-3 pb-1 group`}
                onClick={() => state.onClickHandler(item.label)}
              >
                <span className={`${state.useVariantProp === 'secondary' ? 'text-white' : 'text-primary-500'}`} >
                  <Show when={item.icon.toLowerCase() === "home"}>
                    <VsfIconHome />
                  </Show>
                  <Show when={item.icon.toLowerCase() === "basket"}>
                    <VsfIconBasket />
                  </Show>
                  <Show when={item.icon.toLowerCase() === "search"}>
                    <VsfIconSearch />
                  </Show>
                  <Show when={item.icon.toLowerCase() === "menu"}>
                    <VsfIconMenu />
                  </Show>
                  <Show when={item.icon.toLowerCase() === "favorites"}>
                    <VsfIconFavoritesOutline />
                  </Show>
                </span>
                <Show when={state.useWithLabelsProp}>
                  <span
                    className={`${state.useVariantProp === 'primary' ? 'text-primary-500 group-hover:text-primary-600 group-active:text-primary-600' : 'text-white'} text-xs mt-0.5 font-medium`}
                  >
                    { item.label }
                  </span>
                </Show>
              </button>
            }>
            <a
              href={item.link}
              aria-label={!state.useWithLabelsProp ? `Go to ${item.label}` : null}
              className={`${state.useVariantProp === 'primary' ? 'hover:bg-primary-100 active:bg-primary-100' : 'hover:bg-primary-600 active:bg-primary-600'} flex flex-col items-center justify-center flex-1 pt-3 pb-1 group`}
            >
              <span className={`${state.useVariantProp === 'secondary' ? 'text-white' : 'text-primary-500'}`} >
                <Show when={item.icon.toLowerCase() === "home"}>
                  <VsfIconHome />
                </Show>
                <Show when={item.icon.toLowerCase() === "basket"}>
                  <VsfIconBasket />
                </Show>
                <Show when={item.icon.toLowerCase() === "search"}>
                  <VsfIconSearch />
                </Show>
                <Show when={item.icon.toLowerCase() === "menu"}>
                  <VsfIconMenu />
                </Show>
                <Show when={item.icon.toLowerCase() === "favorites"}>
                  <VsfIconFavoritesOutline />
                </Show>
              </span>
              <Show when={state.useWithLabelsProp}>
                <span
                  className={`${state.useVariantProp === 'primary' ? 'text-primary-500 group-hover:text-primary-600 group-active:text-primary-600' : 'text-white'} text-xs mt-0.5 font-medium`}
                >
                  { item.label }
                </span>
              </Show>
            </a>
          </Show>
        </li>}
      </For>
    </ul>
  </nav>
  )
}  
