import * as React from "react";

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

import VsfButton from "../VsfButton/VsfButton";
import VsfCounter from "../VsfCounter/VsfCounter";
import VsfIconHome from "../VsfIcons/VsfIconHome";
import VsfIconBasket from "../VsfIcons/VsfIconBasket";
import VsfIconSearch from "../VsfIcons/VsfIconSearch";
import VsfIconMenu from "../VsfIcons/VsfIconMenu";
import VsfIconFavoritesOutline from "../VsfIcons/VsfIconFavoritesOutline";
export const VsfNavbarBottomVariants = Object.freeze({
  primary: "primary",
  secondary: "secondary",
});
const DEFAULT_VALUES = {
  variant: VsfNavbarBottomVariants.primary,
  absolutePosition: false,
  items: [],
  withLabels: false,
};

export default function VsfNavbarBottom(props: VsfNavbarBottomProps) {
  function useVariantProp() {
    return props.variant || DEFAULT_VALUES.variant;
  }

  function useAbsolutePositionProp() {
    return props.absolutePosition ?? DEFAULT_VALUES.absolutePosition;
  }

  function useItemsProp() {
    return props.items || DEFAULT_VALUES.items;
  }

  function useWithLabelsProp() {
    return props.withLabels || DEFAULT_VALUES.withLabels;
  }

  function useBasketCounterValue() {
    return props.basketCounterValue || DEFAULT_VALUES.basketCounterValue;
  }

  function useBasketDot() {
    return props.basketDot ?? DEFAULT_VALUES.basketDot;
  }

  function useFavouritesCounterValue() {
    return (
      props.favouritesCounterValue || DEFAULT_VALUES.favouritesCounterValue
    );
  }

  function useFavouritesDot() {
    return props.favouritesDot || DEFAULT_VALUES.favouritesDot;
  }

  function iconsClass() {
    return useVariantProp() === "secondary"
      ? "text-white"
      : "text-black group-hover:text-primary-600 group-active:text-primary-700";
  }

  function onClickHandler(label) {
    props.onClick && props.onClick(label);
  }

  function isIcon(name, item) {
    return item.toLowerCase() === name;
  }

  return (
    <nav
      className={`${
        useAbsolutePositionProp() === false ? "fixed" : "absolute"
      } bottom-0 w-full`}
    >
      <ul
        className={`grid grid-flow-col bg-white auto-cols-fr justify-items-stretch ${
          useVariantProp() === VsfNavbarBottomVariants.secondary
            ? "bg-brand"
            : "bg-white"
        }`}
      >
        {useItemsProp()?.map((item, index) => (
          <li className="flex" key={`${item.label}-${index}`}>
            <VsfButton
              variant="tertiary"
              link={item.link}
              aria-label={
                !useWithLabelsProp() ? `Go to ${item.label}` : undefined
              }
              onClick={(event) => onClickHandler(item.label)}
              className={`${
                useVariantProp() === "primary"
                  ? "hover:bg-primary-100 active:bg-primary-200"
                  : "hover:!bg-primary-600 active:!bg-primary-700"
              } flex flex-col items-center justify-center flex-1 pt-3 pb-1 group rounded-none`}
            >
              {isIcon("home", item.icon) ? (
                <>
                  <VsfIconHome className={iconsClass()} />
                </>
              ) : null}

              {isIcon("basket", item.icon) ? (
                <>
                  <span className="inline-block relative">
                    <VsfIconBasket className={iconsClass()} />

                    {!useBasketCounterValue() ? (
                      <>
                        {useBasketDot() ? (
                          <>
                            <div
                              className={`${
                                useVariantProp() === "primary"
                                  ? "bg-secondary-700"
                                  : "bg-white"
                              } absolute w-3 h-3  -top-2 -right-2 rounded-full`}
                            />
                          </>
                        ) : null}
                      </>
                    ) : (
                      <VsfCounter
                        size="xs"
                        pill={true}
                        className={`${
                          useVariantProp() === "primary"
                            ? "bg-secondary-700 border-2 border-white"
                            : "bg-white border-2 border-brand group-hover:border-green-600 group-active:border-green-700"
                        } absolute  -top-2 -right-2`}
                      >
                        <span
                          className={`${
                            useVariantProp() === "primary"
                              ? "text-white "
                              : "text-gray-900"
                          }`}
                        >
                          {useBasketCounterValue()}
                        </span>
                      </VsfCounter>
                    )}
                  </span>
                </>
              ) : null}

              {isIcon("search", item.icon) ? (
                <>
                  <VsfIconSearch className={iconsClass()} />
                </>
              ) : null}

              {isIcon("menu", item.icon) ? (
                <>
                  <VsfIconMenu className={iconsClass()} />
                </>
              ) : null}

              {isIcon("favorites", item.icon) ? (
                <>
                  <span className="inline-block relative">
                    <VsfIconFavoritesOutline className={iconsClass()} />

                    {!useFavouritesCounterValue() ? (
                      <>
                        {useFavouritesDot() ? (
                          <>
                            <div
                              className={`${
                                useVariantProp() === "primary"
                                  ? "bg-secondary-700"
                                  : "bg-white"
                              } absolute w-3 h-3 -top-2 -right-2 rounded-full`}
                            />
                          </>
                        ) : null}
                      </>
                    ) : (
                      <VsfCounter
                        size="xs"
                        pill={true}
                        className={`${
                          useVariantProp() === "primary"
                            ? "bg-secondary-700 border-2 border-white"
                            : "bg-white border-2 border-brand group-hover:border-green-600 group-active:border-green-700"
                        } absolute -top-2 -right-2`}
                      >
                        <span
                          className={`${
                            useVariantProp() === "primary"
                              ? "text-white "
                              : "text-gray-900"
                          }`}
                        >
                          {useFavouritesCounterValue()}
                        </span>
                      </VsfCounter>
                    )}
                  </span>
                </>
              ) : null}

              {useWithLabelsProp() ? (
                <>
                  <span
                    className={`${
                      useVariantProp() === "primary"
                        ? "text-gray-900 group-hover:text-primary-600 group-active:text-primary-700"
                        : "text-white"
                    } text-xs mt-0.5 font-medium`}
                  >
                    {item.label}
                  </span>
                </>
              ) : null}
            </VsfButton>
          </li>
        ))}
      </ul>
    </nav>
  );
}
