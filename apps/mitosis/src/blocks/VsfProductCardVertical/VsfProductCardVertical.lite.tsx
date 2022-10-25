import { useStore, Show } from '@builder.io/mitosis';
import VsfRating from '../VsfRating/VsfRating.lite';
import VsfButton from '../VsfButton/VsfButton.lite';
import { classStringFromArray } from '../../functions/domUtils';
import VsfIconFavoritesOutline from '../VsfIcons/VsfIconFavoritesOutline.lite';
import VsfIconBasket from '../VsfIcons/VsfIconBasket.lite';
import { SlotType } from '../../functions/types';

export const VsfProductCardVerticalSizes = Object.freeze({
  xs: 'xs',
  sm: 'sm',
  base: 'base',
  lg: 'lg',
});

type VsfProductCardVerticalSizesKeys = keyof typeof VsfProductCardVerticalSizes;

export interface VsfProductCardVerticalProps {
  image: string;
  alt: string;
  link: string;
  ratingValue: number;
  maxRatingValue: number;
  reviews: number;
  label: string;
  price: string;
  oldPrice: string;
  slotBadge?: SlotType;
  description: string;
  outOfStock: boolean;
  inCart: number;
  size: VsfProductCardVerticalSizesKeys;
  withButton: boolean;
  addToCartLabel: string;
  seeSimilarLabel: string;
  handleAddToCart: (e?: Event) => void;
  handleAddToWishlist: (e?: Event) => void;
  handleSeeSimilar: (e?: Event) => void;
}

const DEFAULT_VALUES = {
  image: '',
  alt: '',
  link: '/',
  ratingValue: 0,
  maxRatingValue: 0,
  reviews: -1,
  label: '',
  price: '',
  oldPrice: '',
  description: '',
  outOfStock: false,
  inCart: 0,
  size: VsfProductCardVerticalSizes.base,
  withButton: false,
  addToCartLabel: 'Add',
  seeSimilarLabel: 'See similar'
};

export default function VsfProductCardVertical(props: VsfProductCardVerticalProps) {
  const state = useStore({
    get useImageProp() {
      return props.image || DEFAULT_VALUES.image
    },
    get useAltProp() {
      return props.alt || DEFAULT_VALUES.alt
    },
    get useLinkProp() {
      return props.link || DEFAULT_VALUES.link
    },
    get useRatingValueProp() {
      return props.ratingValue || DEFAULT_VALUES.ratingValue
    },
    get useMaxRatingValueProp() {
      return props.maxRatingValue || DEFAULT_VALUES.maxRatingValue
    },
    get useReviewsProp() {
      return props.reviews || DEFAULT_VALUES.reviews
    },
    get useLabelProp() {
      return props.label || DEFAULT_VALUES.label
    },
    get usePriceProp() {
      return props.price || DEFAULT_VALUES.price
    },
    get useOldPriceProp() {
      return props.oldPrice || DEFAULT_VALUES.oldPrice
    },
    get useDescriptionProp() {
      return props.description || DEFAULT_VALUES.description
    },
    get useOutOfStockProp() {
      return props.outOfStock || DEFAULT_VALUES.outOfStock
    },
    get useInCartProp() {
      return props.inCart || DEFAULT_VALUES.inCart
    },
    get useSizeProp() {
      return props.size || DEFAULT_VALUES.size
    },
    get useWithButtonProp() {
      return props.withButton || DEFAULT_VALUES.withButton
    },
    get useAddToCartLabelProp() {
      return props.addToCartLabel || DEFAULT_VALUES.addToCartLabel
    },
    get useSeeSimilarLabelProp() {
      return props.seeSimilarLabel || DEFAULT_VALUES.seeSimilarLabel
    },
    get imageDimensions() {
      switch (state.useSizeProp) {
        case VsfProductCardVerticalSizes.xs:
          return 148;
        case VsfProductCardVerticalSizes.sm:
          return 180;
        case VsfProductCardVerticalSizes.lg:
          return 280;
        default:
          return 230;
      }
    },
    get detailsPadding(): string {
      return classStringFromArray([
        state.useSizeProp === VsfProductCardVerticalSizes.xs || state.useSizeProp === VsfProductCardVerticalSizes.sm ? 'p-2' : 'p-4',
      ])
    },
    get productCardWidth() {
      switch (state.useSizeProp) {
        case VsfProductCardVerticalSizes.xs:
          return `max-w-[148px]`;
        case VsfProductCardVerticalSizes.sm:
          return `max-w-[180px]`;
        case VsfProductCardVerticalSizes.lg:
          return `max-w-[280px]`;
        default:
          return `max-w-[230px]`;
      }
    },
    get isXs(): boolean {
      return state.useSizeProp === VsfProductCardVerticalSizes.xs
    },
    get isSm(): boolean {
      return state.useSizeProp === VsfProductCardVerticalSizes.sm
    },
    get isBase(): boolean {
      return state.useSizeProp === VsfProductCardVerticalSizes.base
    },
    get isLg(): boolean {
      return state.useSizeProp === VsfProductCardVerticalSizes.lg
    },
    get labelClasses(): string {
      return classStringFromArray([
        'block font-normal font-body',
        state.useSizeProp === VsfProductCardVerticalSizes.lg ? 'text-base' : 'text-sm',
        state.useWithButtonProp && 'p-0',
        !state.isLg && 'px-4 pt-4',
        !state.useWithButtonProp && state.isBase && 'px-4 pt-4',
        !state.useWithButtonProp && state.isSm && 'px-2 pt-2',
        !state.useWithButtonProp && state.isXs && 'px-2 pt-2'
      ]);
    },
    get priceClasses(): string {
      return classStringFromArray([
        'font-bold font-headings',
        (state.isXs || state.isSm) && 'text-xs leading-4',
        (state.isBase || state.isLg) && 'text-lg leading-6',
        state.useOldPriceProp ? 'text-secondary-700' : 'text-gray-900'
      ]);
    },
    addToCart(event: Event) {
      /* IF-vue */
      state.$emit('addToCart', event);
      /* ENDIF-vue */
      /* IF-react */
      props.handleAddToCart && props.handleAddToCart(event);
      /* ENDIF-react */
    },
    addToWishlist(event: Event) {
      /* IF-vue */
      state.$emit('addToWishlist', event);
      /* ENDIF-vue */
      /* IF-react */
      props.handleAddToWishlist && props.handleAddToWishlist(event);
      /* ENDIF-react */
    },
    seeSimilar(event: Event) {
      /* IF-vue */
      state.$emit('seeSimilar', event);
      /* ENDIF-vue */
      /* IF-react */
      props.handleSeeSimilar && props.handleSeeSimilar(event);
      /* ENDIF-react */
    },
  });

  return (
    <>
      <div
        className={`${state.productCardWidth} overflow-hidden border border-gray-200 rounded-md hover:shadow-lg`}
      >
        <div className='relative'>
          <a href={state.useLinkProp}>
            <img
              className={`${state.useOutOfStockProp ? 'opacity-50' : 'opacity-100'} w-full object-cover aspect-square`}
              src={state.useImageProp}
              alt={state.useAltProp}
              loading="lazy"
              width={state.imageDimensions}
              height={state.imageDimensions}
            />
          </a>
          <div className={`${state.useSizeProp === 'lg' || state.useSizeProp === 'base' ? 'top-0' : '-top-1'} absolute left-0`}>
            {props.slotBadge}
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 flex items-end m-2"
          >
            <VsfButton
              className="ml-auto rounded-full"
              variant="secondary"
              size="sm"
              aria-label={`Add ${state.useLabelProp} to wishlist`}
              onClick={(event) => state.addToWishlist(event)}
              icon={true}
            >
              <VsfIconFavoritesOutline
                size='sm'
              />
            </VsfButton>
          </div>
        </div>
        <div
          className={`${state.useWithButtonProp ? state.detailsPadding : ''} border-gray-200 border-t flex flex-col`}
        >
          <a
            href={state.useLinkProp}
            className={`${state.labelClasses} pb-1`}
          >
            {state.useLabelProp}
          </a>
          <Show when={!state.useWithButtonProp} else={
            <div className='order-2'>
              <VsfRating
                value={3}
                size="xs"
                reviews={-1}
                type="base"
              />
            </div>
          }>
            <a
              href={state.useLinkProp}
              className={`${state.useSizeProp === VsfProductCardVerticalSizes.sm || state.useSizeProp === VsfProductCardVerticalSizes.xs ? 'px-2' : 'px-4'} block`}
            >
              <VsfRating
                value={3}
                size="xs"
                reviews={-1}
                type="base"
              />
            </a>
          </Show>
          <Show
            when={state.useDescriptionProp && state.useSizeProp === 'base' || state.useSizeProp === 'lg'}
          >
            <Show when={!state.useWithButtonProp} else={
              <span className={`${state.useSizeProp === 'base' ? 'text-xs' : 'text-sm'} order-3 mt-2 font-normal leading-5 text-gray-700 font-body`}>
                {state.useDescriptionProp}
              </span>
            }>
              <a
                href={state.useLinkProp}
                className={`${state.useSizeProp === VsfProductCardVerticalSizes.sm || state.useSizeProp === VsfProductCardVerticalSizes.xs ? 'px-2' : 'px-4'} block pt-2 text-sm font-normal leading-5 text-gray-700 font-body`}
              >
                {state.useDescriptionProp}
              </a>
            </Show>
          </Show>
          <Show when={!state.useWithButtonProp} else={
            <div
              className={`flex items-baseline order-1 mb-1`}
            >
              <span
                className={state.priceClasses}
              >{state.usePriceProp}</span>
              <span
                className={`${state.useSizeProp === VsfProductCardVerticalSizes.xs ? 'ml-1' : 'ml-2'} text-xs font-normal leading-4 text-gray-500 line-through`}
              >
                {state.useOldPriceProp}
              </span>
            </div>
          }>
            <a
              className={`${state.useSizeProp === VsfProductCardVerticalSizes.sm || state.useSizeProp === VsfProductCardVerticalSizes.xs ? 'px-2 pt-1 pb-2' : 'px-4 py-4'} flex items-baseline`}
              href={state.useLinkProp}
            >
              <span
                className={`${state.priceClasses}`}
              >{state.usePriceProp}</span>
              <span
                className={`${state.useSizeProp === VsfProductCardVerticalSizes.xs ? 'ml-1' : 'ml-2'} text-xs font-normal leading-4 text-gray-500 line-through`}
              >
                {state.useOldPriceProp}
              </span>
            </a>
          </Show>
        </div>
        <Show when={state.useWithButtonProp}>
          <Show when={!state.useOutOfStockProp} else={
            // TODO: replace button tag with VsfButton when there is a possibility to use named slots in mitosis
            <VsfButton
              className={`${state.useSizeProp === VsfProductCardVerticalSizes.sm || state.useSizeProp === VsfProductCardVerticalSizes.xs ? 'mb-2 mx-2' : 'mb-4 mx-4'} inline-flex items-center justify-center rounded-md cursor-pointer font-body uppercase disabled:cursor-not-allowed outline-violet disabled:text-gray-500 disabled:opacity-50 leading-5 px-3 py-[6px] text-sm bg-white border border-gray-200 text-primary-500 hover:border-primary-300 hover:bg-green-100 hover:text-primary-600 hover:shadow-medium active:border-primary-400 active:bg-green-200 active:text-primary-700`}
              onClick={(event) => state.seeSimilar(event)}
            >
              {state.useSeeSimilarLabelProp}
            </VsfButton>
          }>
            {/* TODO: replace button tag with VsfButton when there is a possibility to use named slots in mitosis */}
            <VsfButton
              className={`${state.useSizeProp === VsfProductCardVerticalSizes.sm || state.useSizeProp === VsfProductCardVerticalSizes.xs ? 'mb-2 mx-2' : 'mb-4 mx-4'} inline-flex items-center justify-center border rounded-md cursor-pointer font-body uppercase disabled:cursor-not-allowed outline-violet disabled:text-gray-500 disabled:opacity-50 leading-5 px-3 py-[6px] text-sm bg-primary-500 text-white hover:bg-primary-600 hover:shadow-medium active:bg-primary-700`}
              onClick={(event) => state.addToCart(event)}
            >
              <VsfIconBasket
                size='sm'
              />
              <span class="ml-2">
                {state.useAddToCartLabelProp}
              </span>
            </VsfButton>
          </Show>
        </Show>
      </div>
    </>
  );
}
