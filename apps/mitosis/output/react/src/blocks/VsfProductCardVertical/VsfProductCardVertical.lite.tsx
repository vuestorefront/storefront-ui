import * as React from "react";

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

import VsfRating from "../VsfRating/VsfRating.lite";
import VsfButton from "../VsfButton/VsfButton.lite";
import { classStringFromArray } from "../../functions/domUtils";
import VsfIconFavoritesOutline from "../VsfIcons/VsfIconFavoritesOutline.lite";
import VsfIconBasket from "../VsfIcons/VsfIconBasket.lite";
import { SlotType } from "../../functions/types";
export const VsfProductCardVerticalSizes = Object.freeze({
  xs: "xs",
  sm: "sm",
  base: "base",
  lg: "lg",
});
const DEFAULT_VALUES = {
  image: "",
  alt: "",
  link: "/",
  ratingValue: 0,
  maxRatingValue: 0,
  reviews: -1,
  label: "",
  price: "",
  oldPrice: "",
  description: "",
  outOfStock: false,
  inCart: 0,
  size: VsfProductCardVerticalSizes.base,
  withButton: false,
  addToCartLabel: "Add",
  seeSimilarLabel: "See similar",
};

export default function VsfProductCardVertical(
  props: VsfProductCardVerticalProps
) {
  function useImageProp() {
    return props.image || DEFAULT_VALUES.image;
  }

  function useAltProp() {
    return props.alt || DEFAULT_VALUES.alt;
  }

  function useLinkProp() {
    return props.link || DEFAULT_VALUES.link;
  }

  function useRatingValueProp() {
    return props.ratingValue || DEFAULT_VALUES.ratingValue;
  }

  function useMaxRatingValueProp() {
    return props.maxRatingValue || DEFAULT_VALUES.maxRatingValue;
  }

  function useReviewsProp() {
    return props.reviews || DEFAULT_VALUES.reviews;
  }

  function useLabelProp() {
    return props.label || DEFAULT_VALUES.label;
  }

  function usePriceProp() {
    return props.price || DEFAULT_VALUES.price;
  }

  function useOldPriceProp() {
    return props.oldPrice || DEFAULT_VALUES.oldPrice;
  }

  function useDescriptionProp() {
    return props.description || DEFAULT_VALUES.description;
  }

  function useOutOfStockProp() {
    return props.outOfStock || DEFAULT_VALUES.outOfStock;
  }

  function useInCartProp() {
    return props.inCart || DEFAULT_VALUES.inCart;
  }

  function useSizeProp() {
    return props.size || DEFAULT_VALUES.size;
  }

  function useWithButtonProp() {
    return props.withButton || DEFAULT_VALUES.withButton;
  }

  function useAddToCartLabelProp() {
    return props.addToCartLabel || DEFAULT_VALUES.addToCartLabel;
  }

  function useSeeSimilarLabelProp() {
    return props.seeSimilarLabel || DEFAULT_VALUES.seeSimilarLabel;
  }

  function imageDimensions() {
    switch (useSizeProp()) {
      case VsfProductCardVerticalSizes.xs:
        return 148;

      case VsfProductCardVerticalSizes.sm:
        return 180;

      case VsfProductCardVerticalSizes.lg:
        return 280;

      default:
        return 230;
    }
  }

  function detailsPadding() {
    return classStringFromArray([
      useSizeProp() === VsfProductCardVerticalSizes.xs ||
      useSizeProp() === VsfProductCardVerticalSizes.sm
        ? "p-2"
        : "p-4",
    ]);
  }

  function productCardWidth() {
    switch (useSizeProp()) {
      case VsfProductCardVerticalSizes.xs:
        return `max-w-[148px]`;

      case VsfProductCardVerticalSizes.sm:
        return `max-w-[180px]`;

      case VsfProductCardVerticalSizes.lg:
        return `max-w-[280px]`;

      default:
        return `max-w-[230px]`;
    }
  }

  function isXs() {
    return useSizeProp() === VsfProductCardVerticalSizes.xs;
  }

  function isSm() {
    return useSizeProp() === VsfProductCardVerticalSizes.sm;
  }

  function isBase() {
    return useSizeProp() === VsfProductCardVerticalSizes.base;
  }

  function isLg() {
    return useSizeProp() === VsfProductCardVerticalSizes.lg;
  }

  function labelClasses() {
    return classStringFromArray([
      "block font-normal font-body",
      useSizeProp() === VsfProductCardVerticalSizes.lg
        ? "text-base"
        : "text-sm",
      useWithButtonProp() && "p-0",
      !isLg() && "px-4 pt-4",
      !useWithButtonProp() && isBase() && "px-4 pt-4",
      !useWithButtonProp() && isSm() && "px-2 pt-2",
      !useWithButtonProp() && isXs() && "px-2 pt-2",
    ]);
  }

  function priceClasses() {
    return classStringFromArray([
      "font-bold font-headings",
      (isXs() || isSm()) && "text-xs leading-4",
      (isBase() || isLg()) && "text-lg leading-6",
      useOldPriceProp() ? "text-secondary-700" : "text-gray-900",
    ]);
  }

  function addToCart(event) {
    props.handleAddToCart && props.handleAddToCart(event);
  }

  function addToWishlist(event) {
    props.handleAddToWishlist && props.handleAddToWishlist(event);
  }

  function seeSimilar(event) {
    props.handleSeeSimilar && props.handleSeeSimilar(event);
  }

  return (
    <>
      <div
        className={`${productCardWidth()} overflow-hidden border border-gray-200 rounded-md hover:shadow-lg`}
      >
        <div className="relative">
          <a href={useLinkProp()}>
            <img
              loading="lazy"
              src={useImageProp()}
              alt={useAltProp()}
              width={imageDimensions()}
              height={imageDimensions()}
              className={`${
                useOutOfStockProp() ? "opacity-50" : "opacity-100"
              } w-full object-cover aspect-square`}
            />
          </a>

          <div
            className={`${
              useSizeProp() === "lg" || useSizeProp() === "base"
                ? "top-0"
                : "-top-1"
            } absolute left-0`}
          >
            {props.slotBadge}
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex items-end m-2">
            {useOutOfStockProp() || useInCartProp() > 0 ? (
              <>
              </>
            ) : null}

            <VsfButton
              variant="secondary"
              size="sm"
              className="ml-auto rounded-full"
              aria-label={`Add ${useLabelProp()} to wishlist`}
              onClick={(event) => addToWishlist(event)}
              icon={true}
            >
              <VsfIconFavoritesOutline size="sm" />
            </VsfButton>
          </div>
        </div>

        <div
          className={`${
            useWithButtonProp() ? detailsPadding() : ""
          } border-gray-200 border-t flex flex-col`}
        >
          <a href={useLinkProp()} className={`${labelClasses()} pb-1`}>
            {useLabelProp()}
          </a>

          {!useWithButtonProp() ? (
            <>
              <a
                href={useLinkProp()}
                className={`${
                  useSizeProp() === VsfProductCardVerticalSizes.sm ||
                  useSizeProp() === VsfProductCardVerticalSizes.xs
                    ? "px-2"
                    : "px-4"
                } block`}
              >
                <VsfRating size="xs" type="base" value={3} reviews={-1} />
              </a>
            </>
          ) : (
            <div className="order-2">
              <VsfRating size="xs" type="base" value={3} reviews={-1} />
            </div>
          )}

          {(useDescriptionProp() && useSizeProp() === "base") ||
          useSizeProp() === "lg" ? (
            <>
              {!useWithButtonProp() ? (
                <>
                  <a
                    href={useLinkProp()}
                    className={`${
                      useSizeProp() === VsfProductCardVerticalSizes.sm ||
                      useSizeProp() === VsfProductCardVerticalSizes.xs
                        ? "px-2"
                        : "px-4"
                    } block pt-2 text-sm font-normal leading-5 text-gray-700 font-body`}
                  >
                    {useDescriptionProp()}
                  </a>
                </>
              ) : (
                <span
                  className={`${
                    useSizeProp() === "base" ? "text-xs" : "text-sm"
                  } order-3 mt-2 font-normal leading-5 text-gray-700 font-body`}
                >
                  {useDescriptionProp()}
                </span>
              )}
            </>
          ) : null}

          {!useWithButtonProp() ? (
            <>
              <a
                href={useLinkProp()}
                className={`${
                  useSizeProp() === VsfProductCardVerticalSizes.sm ||
                  useSizeProp() === VsfProductCardVerticalSizes.xs
                    ? "px-2 pt-1 pb-2"
                    : "px-4 py-4"
                } flex items-baseline`}
              >
                <span className={`${priceClasses()}`}>{usePriceProp()}</span>

                <span
                  className={`${
                    useSizeProp() === VsfProductCardVerticalSizes.xs
                      ? "ml-1"
                      : "ml-2"
                  } text-xs font-normal leading-4 text-gray-500 line-through`}
                >
                  {useOldPriceProp()}
                </span>
              </a>
            </>
          ) : (
            <div className={`flex items-baseline order-1 mb-1`}>
              <span className={priceClasses()}>{usePriceProp()}</span>

              <span
                className={`${
                  useSizeProp() === VsfProductCardVerticalSizes.xs
                    ? "ml-1"
                    : "ml-2"
                } text-xs font-normal leading-4 text-gray-500 line-through`}
              >
                {useOldPriceProp()}
              </span>
            </div>
          )}
        </div>

        {useWithButtonProp() ? (
          <>
            {!useOutOfStockProp() ? (
              <>
                <VsfButton
                  onClick={(event) => addToCart(event)}
                  className={`${
                    useSizeProp() === VsfProductCardVerticalSizes.sm ||
                    useSizeProp() === VsfProductCardVerticalSizes.xs
                      ? "mb-2 mx-2"
                      : "mb-4 mx-4"
                  } inline-flex items-center justify-center border rounded-md cursor-pointer font-body uppercase disabled:cursor-not-allowed outline-violet disabled:text-gray-500 disabled:opacity-50 leading-5 px-3 py-[6px] text-sm bg-primary-500 text-white hover:bg-primary-600 hover:shadow-medium active:bg-primary-700`}
                >
                  <VsfIconBasket size="sm" />

                  <span className="ml-2">{useAddToCartLabelProp()}</span>
                </VsfButton>
              </>
            ) : (
              <VsfButton
                onClick={(event) => seeSimilar(event)}
                className={`${
                  useSizeProp() === VsfProductCardVerticalSizes.sm ||
                  useSizeProp() === VsfProductCardVerticalSizes.xs
                    ? "mb-2 mx-2"
                    : "mb-4 mx-4"
                } inline-flex items-center justify-center rounded-md cursor-pointer font-body uppercase disabled:cursor-not-allowed outline-violet disabled:text-gray-500 disabled:opacity-50 leading-5 px-3 py-[6px] text-sm bg-white border border-gray-200 text-primary-500 hover:border-primary-300 hover:bg-green-100 hover:text-primary-600 hover:shadow-medium active:border-primary-400 active:bg-green-200 active:text-primary-700`}
              >
                {useSeeSimilarLabelProp()}
              </VsfButton>
            )}
          </>
        ) : null}
      </div>
    </>
  );
}
