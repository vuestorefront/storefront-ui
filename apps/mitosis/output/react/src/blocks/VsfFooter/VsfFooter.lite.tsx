import * as React from "react";

export type VsfLinkType = {
  label: string;
  link: string;
};
export type VsfCategoriesType = {
  label: string;
  subcategories: VsfLinkType[];
};
export type VsfContactOptionsType = {
  label: string;
  link: string;
  details: string[];
};
export interface VsfFooterProps {
  categories: VsfCategoriesType[];
  socialMedia: VsfLinkType[];
  companyName: string;
  contactOptions: VsfContactOptionsType[];
  bottomLinks: VsfLinkType[];
}

import VsfIconHelp from "../VsfIcons/VsfIconHelp.lite";
import VsfIconChat from "../VsfIcons/VsfIconChat.lite";
import VsfIconPhone from "../VsfIcons/VsfIconPhone.lite";
import VsfIconFacebook from "../VsfIcons/VsfIconFacebook.lite";
import VsfIconTwitter from "../VsfIcons/VsfIconTwitter.lite";
import VsfIconInstagram from "../VsfIcons/VsfIconInstagram.lite";
import VsfIconPinterest from "../VsfIcons/VsfIconPinterest.lite";
import VsfIconYouTube from "../VsfIcons/VsfIconYoutube.lite";
const DEFAULT_VALUES: Required<VsfFooterProps> = {
  categories: [],
  socialMedia: [],
  companyName: "",
  contactOptions: [],
  bottomLinks: [],
};

export default function VsfFooter(props: VsfFooterProps) {
  function useVsfCategoriesProp() {
    return props.categories || DEFAULT_VALUES.categories;
  }

  function useVsfSocialMediaProp() {
    return props.socialMedia || DEFAULT_VALUES.socialMedia;
  }

  function useVsfCompanyNameProp() {
    return props.companyName || DEFAULT_VALUES.companyName;
  }

  function useVsfContactOptionsProp() {
    return props.contactOptions || DEFAULT_VALUES.contactOptions;
  }

  function useVsfBottomLinksProp() {
    return props.bottomLinks || DEFAULT_VALUES.bottomLinks;
  }

  return (
    <>
      <footer className="pt-10 bg-gray-100">
        <div className="grid grid-cols-[1fr_1fr] medium:grid-cols-[1fr_1fr_1fr_1fr] px-4 medium:px-6 pb-10">
          {useVsfCategoriesProp()?.map((category, index) => (
            <div
              className="min-w-[120px] extra-small:min-w-[172px]"
              key={`${category.label}-${index}`}
            >
              <span className="pb-2 text-lg font-medium leading-7 text-gray-900 font-body">
                {category.label}
              </span>

              {category.subcategories?.map((subcategory, index) => (
                <a
                  className="block py-2 text-sm font-normal leading-5 text-gray-500 font-body"
                  key={`${subcategory.label}_${index}`}
                  href={subcategory.link}
                >
                  {subcategory.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="py-10 large:flex border-t border-gray-200">
          {useVsfContactOptionsProp()?.map((element, index) => (
            <div
              className="mx-auto my-4 text-center"
              key={`${element.label}-${index}`}
            >
              {index === 0 ? (
                <>
                  <VsfIconHelp size="lg" />
                </>
              ) : null}

              {index === 1 ? (
                <>
                  <VsfIconChat size="lg" />
                </>
              ) : null}

              {index === 2 ? (
                <>
                  <VsfIconPhone size="lg" />
                </>
              ) : null}

              <a
                className="block py-1 my-2 text-lg font-medium leading-7 text-gray-900 underline font-body"
                href={element.link}
              >
                {element.label}
              </a>

              {element.details?.map((option, index) => (
                <span
                  className="block text-sm font-normal leading-5 text-gray-500 font-body"
                  key={`${option}-${index}`}
                >
                  {option}
                </span>
              ))}
            </div>
          ))}
        </div>

        <div className="justify-end px-4 py-10 bg-gray-900 large:flex large:py-6">
          <div className="flex justify-center py-2 large:self-start">
            {useVsfSocialMediaProp()?.map((element, index) => (
              <a
                className="mr-4 text-white"
                key={`${element.label}-${index}`}
                aria-label={`Go to ${element.label} page`}
                href={element.link}
              >
                {element.label.toLowerCase() === "facebook" ? (
                  <>
                    <VsfIconFacebook />
                  </>
                ) : null}

                {element.label.toLowerCase() === "twitter" ? (
                  <>
                    <VsfIconTwitter />
                  </>
                ) : null}

                {element.label.toLowerCase() === "pinterest" ? (
                  <>
                    <VsfIconPinterest />
                  </>
                ) : null}

                {element.label.toLowerCase() === "youtube" ? (
                  <>
                    <VsfIconYouTube />
                  </>
                ) : null}

                {element.label.toLowerCase() === "instagram" ? (
                  <>
                    <VsfIconInstagram />
                  </>
                ) : null}
              </a>
            ))}
          </div>

          <div className="flex justify-center gap-6 py-2 my-4 large:ml-auto large:my-0">
            {useVsfBottomLinksProp()?.map((element, index) => (
              <a
                className="text-sm font-normal leading-5 text-center text-white font-body"
                key={`${element.label}-${index}`}
                href={element.link}
              >
                {element.label}
              </a>
            ))}
          </div>

          <span className="block py-2 text-sm font-normal leading-5 text-center text-white/50 font-body large:ml-6">
            {useVsfCompanyNameProp()}
          </span>
        </div>
      </footer>
    </>
  );
}
