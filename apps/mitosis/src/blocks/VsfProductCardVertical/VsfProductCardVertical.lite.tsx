import { useStore, Show } from '@builder.io/mitosis';
import VsfRating from '../VsfRating/VsfRating.lite';
import VsfTag from '../VsfTag/VsfTag.lite';
import { classStringFromArray } from '../../functions/domUtils';
import VsfIconHot from '../VsfIcons/VsfIconHot.lite';
import VsfIconFavoritesOutline from '../VsfIcons/VsfIconFavoritesOutline.lite';
import VsfIconBasket from '../VsfIcons/VsfIconBasket.lite';

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
  badge: string;
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
  badge: '',
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
    get useBadgeProp() {
      return props.badge || DEFAULT_VALUES.badge
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
    get detailsPadding():string {
      return classStringFromArray([
        state.useSizeProp === VsfProductCardVerticalSizes.xs || state.useSizeProp === VsfProductCardVerticalSizes.sm ? 'p-2' : 'p-4' ,
      ])
    },
    get productCardWidth() {
      switch (state.useSizeProp) {
        case VsfProductCardVerticalSizes.xs:
          return `w-[148px]`;
        case VsfProductCardVerticalSizes.sm:
          return `w-[180px]`;
        case VsfProductCardVerticalSizes.lg:
          return `w-[280px]`;
        default:
          return `w-[230px]`;
      }
    },
    get labelClasses():string {
      return classStringFromArray([
        'block font-normal font-body',
        state.useSizeProp === VsfProductCardVerticalSizes.lg ? 'text-base' : 'text-sm',
        state.useWithButtonProp && 'p-0',
        !state.useWithButtonProp && state.useSizeProp === VsfProductCardVerticalSizes.lg && 'px-4 pt-4',
        !state.useWithButtonProp && state.useSizeProp === VsfProductCardVerticalSizes.base && 'px-4 pt-4',
        !state.useWithButtonProp && state.useSizeProp === VsfProductCardVerticalSizes.sm && 'px-2 pt-2',
        !state.useWithButtonProp && state.useSizeProp === VsfProductCardVerticalSizes.xs && 'px-2 pt-2'
      ]);
    },
    get priceClasses():string {
      return classStringFromArray([
        'font-bold font-headings',
        state.useSizeProp === VsfProductCardVerticalSizes.xs && 'text-xs leading-4',
        state.useSizeProp ===  VsfProductCardVerticalSizes.sm && 'text-xs leading-4',
        state.useSizeProp === VsfProductCardVerticalSizes.base && 'text-lg leading-6',
        state.useSizeProp === VsfProductCardVerticalSizes.lg && 'text-lg leading-6',
        state.useOldPriceProp ? 'text-secondary-700' : 'text-gray-900'
    ]);
    },
    addToCart(event: Event) {
      /* IF-vue */
      state.$emit('addToCart', event);
      /* ENDIF-vue */
      props.handleAddToCart && props.handleAddToCart(event);
    },
    addToWishlist(event: Event) {
      /* IF-vue */
      state.$emit('addToWishlist', event);
      /* ENDIF-vue */
      props.handleAddToWishlist && props.handleAddToWishlist(event);
    },
    seeSimilar(event: Event) {
      /* IF-vue */
      state.$emit('seeSimilar', event);
      /* ENDIF-vue */
      props.handleSeeSimilar && props.handleSeeSimilar(event);
    },
  });

    return (
    <>
      <div
        className={`${state.productCardWidth} block overflow-hidden border border-gray-200 rounded-md hover:shadow-lg`}
      >
        <div className='relative'>
          <a href={state.useLinkProp}>
            <img
              className={`${state.useOutOfStockProp ? 'opacity-50' : 'opacity-100' } w-full h-auto rounded-md`}
              src={state.useImageProp}
              alt={state.useAltProp}
              loading="lazy"
              width={state.imageDimensions}
              height={state.imageDimensions}
            />
          </a>
          <div className={`${state.useSizeProp === 'lg' || state.useSizeProp === 'base' ? 'top-0' : '-top-1'} absolute left-0`}>
            <VsfTag
              badge={true}
              size={state.useSizeProp === 'lg' || state.useSizeProp === 'base' ? 'base' : 'sm'}
              variant='info'
            >
              <VsfIconHot
                size={state.useSizeProp === 'lg' || state.useSizeProp === 'base' ? 'base' : 'xs'}
              />
              {state.useBadgeProp}
            </VsfTag>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 flex items-end m-2"
          >
            <Show when={state.useOutOfStockProp || state.useInCartProp > 0}>
              <VsfTag
                badge={false}
                size="sm"
                variant={state.useOutOfStockProp ? 'error' : 'positive'}
              >
                {
                  (state.useOutOfStockProp)
                    ? <span> Out of stock </span> 
                    : <span> {state.useInCartProp} in cart </span> 
                }
              </VsfTag>
            </Show>
            <button
              class="right-0 ml-auto bg-white border border-gray-200 rounded-full px-1 pb-1 pt-0 group hover:bg-primary-100 hover:border-primary-300 active:border-primary-400 active:bg-primary-200"
              aria-label={`Add ${state.useLabelProp} to wishlist`}
              onClick={(event) => state.addToWishlist(event)}
            >
              <VsfIconFavoritesOutline 
                size='sm'
                className="fill-primary-500 text-primary-500 group-hover:fill-primary-600 group-active:fill-primary-700"
              />
            </button>
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
            <button
              className={`${state.useSizeProp === VsfProductCardVerticalSizes.sm || state.useSizeProp === VsfProductCardVerticalSizes.xs ? 'mb-2 mx-2' : 'mb-4 mx-4'} inline-flex items-center justify-center rounded-md cursor-pointer font-body uppercase disabled:cursor-not-allowed outline-violet disabled:text-gray-500 disabled:opacity-50 leading-5 px-3 py-[6px] text-sm bg-white border border-gray-200 text-primary-500 hover:border-primary-300 hover:bg-green-100 hover:text-primary-600 hover:shadow-medium active:border-primary-400 active:bg-green-200 active:text-primary-700`}
              onClick={(event) => state.seeSimilar(event)}
            >
              {state.useSeeSimilarLabelProp}
            </button>
          }>
            {/* TODO: replace button tag with VsfButton when there is a possibility to use named slots in mitosis */}
            <button
              className={`${state.useSizeProp === VsfProductCardVerticalSizes.sm || state.useSizeProp === VsfProductCardVerticalSizes.xs ? 'mb-2 mx-2' : 'mb-4 mx-4'} inline-flex items-center justify-center border rounded-md cursor-pointer font-body uppercase disabled:cursor-not-allowed outline-violet disabled:text-gray-500 disabled:opacity-50 leading-5 px-3 py-[6px] text-sm bg-primary-500 text-white hover:bg-primary-600 hover:shadow-medium active:bg-primary-700`}
              onClick={(event) => state.addToCart(event)}
            >
              <VsfIconBasket 
                size='sm' 
              />
              <span class="ml-2">
                {state.useAddToCartLabelProp}
              </span>
            </button>
          </Show>
        </Show>
      </div>
    </>
  );
}
