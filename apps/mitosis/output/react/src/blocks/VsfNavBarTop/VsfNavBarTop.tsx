import * as React from "react";

type VsfNavBarTopThemeVariantsKeys = keyof typeof VsfNavBarTopThemeVariants;
export interface VsfNavBarTopProps {
  searchDisabled?: boolean;
  searchValue?: string;
  searchModelValue?: string;
  searchRequired?: boolean;
  searchAutocomplete?: string;
  themeVariant?: VsfNavBarTopThemeVariantsKeys;
  navData?: {
    text: string;
    link: string;
  }[];
  basketCounterValue?: string | number | null;
  favouritesCounterValue?: string | number | null;
  logoLink?: string;
  loginText?: string;
  slotLogo?: SlotType;
  slotMenu?: SlotType;
  slotSearch?: SlotType;
  slotIcons?: SlotType;
  onMenuToggle?: (...args: Event[]) => void;
  onInput?: (...args: Event[]) => void;
  onSubmit?: (...args: Event[]) => void;
  onReset?: (...args: Event[]) => void;
}

import { SlotType } from "../../functions/types";
import { classStringFromArray } from "../../functions/domUtils";
import VsfIconBasket from "../VsfIcons/VsfIconBasket";
import VsfIconFavoritesOutline from "../VsfIcons/VsfIconFavoritesOutline.lite";
import VsfIconPerson from "../VsfIcons/VsfIconPerson.lite";
import VsfIconMenu from "../VsfIcons/VsfIconMenu.lite";
import VsfIconLogoVsf from "../VsfIcons/VsfIconLogoVsf.lite";
import VsfIconLogoVsfWithName from "../VsfIcons/VsfIconLogoVsfWithName.lite";
import VsfButton from "../VsfButton/VsfButton.lite";
import VsfCounter from "../VsfCounter/VsfCounter.lite";
import VsfSearch from "../VsfSearch/VsfSearch.lite";
export const VsfNavBarTopThemeVariants = Object.freeze({
  default: "default",
  branded: "branded",
});
const DEFAULT_VALUES = {
  searchDisabled: false,
  searchValue: "",
  searchModelValue: "",
  searchRequired: false,
  searchAutocomplete: "",
  themeVariant: "default",
  navData: [],
  basketCounterValue: null,
  favouritesCounterValue: null,
  logoLink: "/",
  loginText: "Log In",
};

export default function VsfNavBarTop(props: VsfNavBarTopProps) {
  function useSearchDisabledProp() {
    return props.searchDisabled ?? DEFAULT_VALUES.searchDisabled;
  }

  function useSearchValueProp() {
    return props.searchValue || DEFAULT_VALUES.searchValue;
  }

  function useSearchModelValueProp() {
    return props.searchModelValue || DEFAULT_VALUES.searchModelValue;
  }

  function useSearchRequiredProp() {
    return props.searchRequired ?? DEFAULT_VALUES.searchRequired;
  }

  function useSearchAutocompleteProp() {
    return props.searchAutocomplete || DEFAULT_VALUES.searchAutocomplete;
  }

  function useThemeVariantProp() {
    return props.themeVariant || DEFAULT_VALUES.themeVariant;
  }

  function useNavData() {
    return props.navData || DEFAULT_VALUES.navData;
  }

  function useBasketCounterValue() {
    return props.basketCounterValue || DEFAULT_VALUES.basketCounterValue;
  }

  function useFavouritesCounterValue() {
    return (
      props.favouritesCounterValue || DEFAULT_VALUES.favouritesCounterValue
    );
  }

  function useLogoLink() {
    return props.logoLink || DEFAULT_VALUES.logoLink;
  }

  function useLoginText() {
    return props.loginText || DEFAULT_VALUES.loginText;
  }

  function headerClass() {
    return classStringFromArray([
      "grid grid-cols-[max-content_max-content_1fr] small:grid-cols-[max-content_max-content_minmax(250px,_1fr)_max-content] w-full items-center grid-flow-col py-2 px-4 medium:px-10 medium:py-5",
      useThemeVariantProp() === "default" ? "bg-white" : "bg-brand",
    ]);
  }

  function variantClass() {
    return useThemeVariantProp() === "default"
      ? "text-gray-900 group-hover:text-green-600 hover:text-green-600 group-active:text-green-700 active:text-green-700"
      : "text-white group-hover:bg-green-600 hover:bg-green-600 group-active:bg-green-700 active:bg-green-700";
  }

  function variantBackgroundCLass() {
    return useThemeVariantProp() === "default"
      ? ""
      : "hover:bg-green-600 active:bg-green-700";
  }

  function onMenuClickHandler(event) {
    props.onMenuToggle && props.onMenuToggle(event);
  }

  function onSearchInputHandler(event) {
    props.onInput && props.onInput(event);
  }

  function onSearchSubmitHandler(event) {
    props.onSubmit && props.onSubmit(event);
  }

  function onSearchResetHandler(event) {
    props.onReset && props.onReset(event);
  }

  return (
    <>
      <header className={headerClass()}>
        {props.slotLogo}

        {!props.slotLogo ? (
          <>
            <a
              className="flex items-center rounded-md outline-violet"
              aria-label="VSF Homepage"
              href={useLogoLink()}
            >
              <div className="block large:hidden w-10 h-10">
                <VsfIconLogoVsf
                  className={`${
                    useThemeVariantProp() === "default"
                      ? "text-brand"
                      : "text-white"
                  } vsf-icon-full`}
                />
              </div>

              <div className="hidden large:block w-[205px] h-[28px]">
                <VsfIconLogoVsfWithName
                  className={`${
                    useThemeVariantProp() === "default"
                      ? "text-brand"
                      : "text-white"
                  } vsf-icon-full`}
                />
              </div>
            </a>
          </>
        ) : null}

        <div className="items-center mx-4 medium:mx-10">
          {props.slotMenu}

          {!props.slotMenu ? (
            <>
              <nav>
                <ul className="justify-center hidden px-2 large:flex">
                  {useNavData()?.map((navItem, index) => (
                    <li className="mr-1 last-of-type:mr-0" key={index}>
                      <VsfButton
                        variant="tertiary"
                        link={navItem.link}
                        className={`${variantClass()} group`}
                      >
                        <span className={variantClass()}>{navItem.text}</span>
                      </VsfButton>
                    </li>
                  ))}
                </ul>
              </nav>
              <VsfButton
                variant="tertiary"
                onClick={(event) => onMenuClickHandler(event)}
                className={`${variantClass()} group inline-flex large:hidden items-center justify-center pr-[16px] pl-[14px] py-2 text-base font-medium  bg-transparent rounded-md cursor-pointer hover:bg-green-100 active:bg-green-200 disabled:bg-transparent hover:text-green-600 active:text-green-700 disabled:text-gray-500 disabled:opacity-50 font-body outline-violet`}
              >
                <VsfIconMenu className={variantClass()} />

                <span className={`${variantClass()} ml-2 whitespace-nowrap`}>
                  Menu
                </span>
              </VsfButton>
            </>
          ) : null}
        </div>

        {props.slotSearch}

        {!props.slotSearch ? (
          <>
            <VsfSearch
              className="hidden small:block justify-self-end medium:ml-10"
              placeholder="Search"
              submitText=""
              name="search"
              value={useSearchValueProp()}
              disabled={useSearchDisabledProp()}
              required={useSearchRequiredProp()}
              autocomplete={useSearchAutocompleteProp()}
              onInput={(e) => onSearchInputHandler(e)}
              onSubmit={(e) => onSearchSubmitHandler(e)}
              onReset={(e) => onSearchResetHandler(e)}
            />
          </>
        ) : null}

        <ul className="flex items-center self-end justify-self-end medium:ml-10">
          {props.slotIcons}

          {!props.slotIcons ? (
            <>
              <li>
                <VsfButton
                  variant="tertiary"
                  aria-label="Cart"
                  className={`${variantClass()} group relative inline-flex items-center justify-center !px-2 w-10 h-10 text-base font-medium  bg-transparent rounded-md cursor-pointer hover:bg-green-100 active:bg-green-200 disabled:bg-transparent hover:text-green-600 active:text-green-700 disabled:text-gray-500 disabled:opacity-50 font-body outline-violet`}
                >
                  <VsfIconBasket size="base" className={variantClass()} />

                  {useBasketCounterValue() ? (
                    <>
                      <VsfCounter
                        size="xs"
                        pill={true}
                        className={`${
                          useThemeVariantProp() === "default"
                            ? "bg-secondary-700 border-2 border-white"
                            : "bg-white border-2 border-brand group-hover:border-green-600 group-active:border-green-700"
                        } absolute top-0.5 right-0.5`}
                      >
                        <span
                          className={`${
                            useThemeVariantProp() === "default"
                              ? "text-white "
                              : "text-gray-900"
                          }`}
                        >
                          {useBasketCounterValue()}
                        </span>
                      </VsfCounter>
                    </>
                  ) : (
                    <div
                      className={`${
                        useThemeVariantProp() === "default"
                          ? "bg-secondary-700"
                          : "bg-white"
                      } absolute w-3 h-3 top-0.5 right-0.5 rounded-full`}
                    />
                  )}
                </VsfButton>
              </li>
              <li className="mx-1">
                <VsfButton
                  variant="tertiary"
                  aria-label="Wishlist"
                  className={`${variantClass()} group relative inline-flex items-center justify-center !px-2 w-10 h-10 text-base font-medium  bg-transparent rounded-md cursor-pointer hover:bg-green-100 active:bg-green-200 disabled:bg-transparent hover:text-green-600 active:text-green-700 disabled:text-gray-500 disabled:opacity-50 font-body outline-violet`}
                >
                  <VsfIconFavoritesOutline
                    size="base"
                    className={variantClass()}
                  />

                  {useFavouritesCounterValue() ? (
                    <>
                      <VsfCounter
                        size="xs"
                        pill={true}
                        className={`${
                          useThemeVariantProp() === "default"
                            ? "bg-secondary-700 border-2 border-white"
                            : "bg-white border-2 border-brand group-hover:border-green-600 group-active:border-green-700"
                        } absolute top-0.5 right-0.5`}
                      >
                        <span
                          className={`${
                            useThemeVariantProp() === "default"
                              ? "text-white "
                              : "text-gray-900"
                          }`}
                        >
                          {useFavouritesCounterValue()}
                        </span>
                      </VsfCounter>
                    </>
                  ) : (
                    <div
                      className={`${
                        useThemeVariantProp() === "default"
                          ? "bg-secondary-700"
                          : "bg-white"
                      } absolute w-3 h-3 top-0.5 right-0.5 rounded-full`}
                    />
                  )}
                </VsfButton>
              </li>
              <li>
                <VsfButton
                  variant="tertiary"
                  aria-label="Log in"
                  className={`${variantClass()} group inline-flex items-center justify-center p-2 text-base font-medium bg-transparent rounded-md cursor-pointer group hover:bg-green-100 active:bg-green-200 disabled:bg-transparent hover:text-green-600 active:text-green-700 disabled:text-gray-500 disabled:opacity-50 font-body outline-violet`}
                >
                  <VsfIconPerson className={variantClass()} />

                  <span
                    className={`${variantClass()} hidden ml-2 whitespace-nowrap large:block`}
                  >
                    {useLoginText()}
                  </span>
                </VsfButton>
              </li>
            </>
          ) : null}
        </ul>
      </header>
    </>
  );
}
