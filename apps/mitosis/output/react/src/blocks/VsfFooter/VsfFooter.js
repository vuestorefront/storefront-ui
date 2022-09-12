import * as React from "react";
import VsfIconHelp from "../VsfIcons/VsfIconHelp.js";
import VsfIconChat from "../VsfIcons/VsfIconChat.js";
import VsfIconPhone from "../VsfIcons/VsfIconPhone.js";
import VsfIconFacebook from "../VsfIcons/VsfIconFacebook.js";
import VsfIconTwitter from "../VsfIcons/VsfIconTwitter.js";
import VsfIconInstagram from "../VsfIcons/VsfIconInstagram.js";
import VsfIconPinterest from "../VsfIcons/VsfIconPinterest.js";
import VsfIconYouTube from "../VsfIcons/VsfIconYoutube.js";
const DEFAULT_VALUES = {
  categories: [],
  socialMedia: [],
  companyName: "",
  contactOptions: [],
  bottomLinks: []
};
function VsfFooter(props) {
  var _a, _b, _c, _d;
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("footer", {
    className: "pt-10 bg-gray-100"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-[1fr_1fr] medium:grid-cols-[1fr_1fr_1fr_1fr] px-4 medium:px-6 pb-10"
  }, (_a = useVsfCategoriesProp()) == null ? void 0 : _a.map((category, index) => {
    var _a2;
    return /* @__PURE__ */ React.createElement("div", {
      className: "min-w-[120px] extra-small:min-w-[172px]",
      key: `${category.label}-${index}`
    }, /* @__PURE__ */ React.createElement("span", {
      className: "pb-2 text-lg font-medium leading-7 text-gray-900 font-body"
    }, category.label), (_a2 = category.subcategories) == null ? void 0 : _a2.map((subcategory, index2) => /* @__PURE__ */ React.createElement("a", {
      className: "block py-2 text-sm font-normal leading-5 text-gray-500 font-body",
      key: `${subcategory.label}_${index2}`,
      href: subcategory.link
    }, subcategory.label)));
  })), /* @__PURE__ */ React.createElement("div", {
    className: "py-10 large:flex border-t border-gray-200"
  }, (_b = useVsfContactOptionsProp()) == null ? void 0 : _b.map((element, index) => {
    var _a2;
    return /* @__PURE__ */ React.createElement("div", {
      className: "mx-auto my-4 text-center",
      key: `${element.label}-${index}`
    }, index === 0 ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(VsfIconHelp, {
      size: "lg"
    })) : null, index === 1 ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(VsfIconChat, {
      size: "lg"
    })) : null, index === 2 ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(VsfIconPhone, {
      size: "lg"
    })) : null, /* @__PURE__ */ React.createElement("a", {
      className: "block py-1 my-2 text-lg font-medium leading-7 text-gray-900 underline font-body",
      href: element.link
    }, element.label), (_a2 = element.details) == null ? void 0 : _a2.map((option, index2) => /* @__PURE__ */ React.createElement("span", {
      className: "block text-sm font-normal leading-5 text-gray-500 font-body",
      key: `${option}-${index2}`
    }, option)));
  })), /* @__PURE__ */ React.createElement("div", {
    className: "justify-end px-4 py-10 bg-gray-900 large:flex large:py-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center py-2 large:self-start"
  }, (_c = useVsfSocialMediaProp()) == null ? void 0 : _c.map((element, index) => /* @__PURE__ */ React.createElement("a", {
    className: "mr-4 text-white",
    key: `${element.label}-${index}`,
    "aria-label": `Go to ${element.label} page`,
    href: element.link
  }, element.label.toLowerCase() === "facebook" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(VsfIconFacebook, null)) : null, element.label.toLowerCase() === "twitter" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(VsfIconTwitter, null)) : null, element.label.toLowerCase() === "pinterest" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(VsfIconPinterest, null)) : null, element.label.toLowerCase() === "youtube" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(VsfIconYouTube, null)) : null, element.label.toLowerCase() === "instagram" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(VsfIconInstagram, null)) : null))), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center gap-6 py-2 my-4 large:ml-auto large:my-0"
  }, (_d = useVsfBottomLinksProp()) == null ? void 0 : _d.map((element, index) => /* @__PURE__ */ React.createElement("a", {
    className: "text-sm font-normal leading-5 text-center text-white font-body",
    key: `${element.label}-${index}`,
    href: element.link
  }, element.label))), /* @__PURE__ */ React.createElement("span", {
    className: "block py-2 text-sm font-normal leading-5 text-center text-white/50 font-body large:ml-6"
  }, useVsfCompanyNameProp()))));
}
export {
  VsfFooter as default
};
