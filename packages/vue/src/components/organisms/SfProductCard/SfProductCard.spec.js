import { shallowMount } from "@vue/test-utils";
import SfProductCard from "./SfProductCard.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
import "@testing-library/jest-dom";
const title = "Product A";
const wishlistIconButtonClass = ".sf-product-card__wishlist-icon";
const clickEventName = "click:wishlist";
describe("SfProductCard.vue", () => {
  it("renders Product Card", () => {
    const component = shallowMount(SfProductCard, {
      propsData: {
        title,
      },
    });
    expect(component.exists()).toBe(true);
    expect(component.find(".sf-product-card").exists()).toBe(true);
  });
});
describe("SfProductCard.vue: Wish list icon button", () => {
  it("renders Product Card", () => {
    const component = shallowMount(SfProductCard, {
      propsData: {
        title,
      },
    });
    expect(component.exists()).toBe(true);
    expect(component.find(".sf-product-card").exists()).toBe(true);
  });
  it("has correct CSS class for container", () => {
    const component = shallowMount(SfProductCard, {
      propsData: {
        title,
      },
    });
    expect(component.classes()).toContain("sf-product-card");
  });
  it("has default slot content when no custom content for wish list icon is passed", () => {
    const component = shallowMount(SfProductCard, {
      propsData: {
        title,
      },
    });
    const wishlistIconButton = component.find(wishlistIconButtonClass);
    const sfIconForWishlist = wishlistIconButton.find("sficon-stub");
    expect(sfIconForWishlist.exists()).toBe(true);
  });
  it("has default wish list icon when none is passed (isInWishlist=false)", () => {
    const component = shallowMount(SfProductCard, {
      propsData: {
        title,
      },
    });
    const defaultWishlistIcon = component.props().wishlistIcon;
    const wishlistIconButton = component.find(wishlistIconButtonClass);
    const sfIconForWishlist = wishlistIconButton.find("sficon-stub");
    const iconInSfIconForWishlist = sfIconForWishlist.attributes().icon;
    expect(iconInSfIconForWishlist).toBe(defaultWishlistIcon);
  });
  it("has default wish list icon when none is passed (isInWishlist=true)", () => {
    const component = shallowMount(SfProductCard, {
      propsData: {
        title,
        isInWishlist: true,
      },
    });
    const defaultIsInWishlistIcon = component.props().isInWishlistIcon;
    const wishlistIconButton = component.find(wishlistIconButtonClass);
    const sfIconForWishlist = wishlistIconButton.find("sficon-stub");
    const iconInSfIconForWishlist = sfIconForWishlist.attributes().icon;
    expect(iconInSfIconForWishlist).toBe(defaultIsInWishlistIcon);
  });
  it("has custom wish list icon when SVG path is passed (isInWishlist=false)", () => {
    const customWishlistIconPath =
      "M6.04545 0L7 1.12025L1.92207 7L7 12.8798L6.04545 14L0 6.99994L6.04545 0Z";
    const component = shallowMount(SfProductCard, {
      propsData: {
        title,
        wishlistIcon: customWishlistIconPath,
      },
    });
    const wishlistIconButton = component.find(wishlistIconButtonClass);
    const sfIconForWishlist = wishlistIconButton.find("sficon-stub");
    const iconInSfIconForWishlist = sfIconForWishlist.attributes().icon;
    expect(iconInSfIconForWishlist).toBe(customWishlistIconPath);
  });
  it("has custom wish list icon when SVG path is passed (isInWishlist=true)", () => {
    const customIsInWishlistIconPath =
      "M0.954545 14L0 12.8798L5.07793 7L0 1.12024L0.954545 0L7 7.00006L0.954545 14Z";
    const component = shallowMount(SfProductCard, {
      propsData: {
        title,
        isInWishlistIcon: customIsInWishlistIconPath,
        isInWishlist: true,
      },
    });
    const wishlistIconButton = component.find(wishlistIconButtonClass);
    const sfIconForWishlist = wishlistIconButton.find("sficon-stub");
    const iconInSfIconForWishlist = sfIconForWishlist.attributes().icon;
    expect(iconInSfIconForWishlist).toBe(customIsInWishlistIconPath);
  });
  it("has no wish list button when wishlistIcon is false (isInWishlist=false)", () => {
    const component = shallowMount(SfProductCard, {
      propsData: {
        title,
        wishlistIcon: false,
      },
    });
    const wishlistIconButton = component.find(wishlistIconButtonClass);
    expect(wishlistIconButton.classes("display-none")).toBe(true);
  });
  it("has no wish list button when wishlistIcon is false (isInWishlist=true)", () => {
    const component = shallowMount(SfProductCard, {
      propsData: {
        title,
        wishlistIcon: false,
        isInWishlist: true,
      },
    });
    const wishlistIconButton = component.find(wishlistIconButtonClass);
    expect(wishlistIconButton.classes("display-none")).toBe(true);
  });
  it("has custom slot content when slot is used", () => {
    const customSlotContentText = "Wish List";
    const customSlotContent = `<b>${customSlotContentText}</b>`;
    const component = shallowMount(SfProductCard, {
      propsData: {
        title,
      },
      slots: {
        "wishlist-icon": customSlotContent,
      },
    });
    const wishlistIconButton = component.find(wishlistIconButtonClass);
    const sfIconForWishlist = wishlistIconButton.find("sficon-stub");
    expect(sfIconForWishlist.exists()).toBe(false);
    expect(wishlistIconButton.text()).toBe(customSlotContentText);
  });
  it("emits click:wishlist event on button click", () => {
    const component = shallowMount(SfProductCard, {
      stubs: {
        wishlistIconButtonClass: SfButton,
      },
      propsData: {
        title,
      },
    });
    const wishlistIconButton = component.find(wishlistIconButtonClass);

    wishlistIconButton.trigger("click");
    expect(component.emitted(clickEventName).length).toBe(1);
  });
  it("emits click:wishlist event with payload=true on button click when isInWishlist=false", () => {
    const component = shallowMount(SfProductCard, {
      stubs: {
        wishlistIconButtonClass: SfButton,
      },
      propsData: {
        title,
      },
    });
    const wishlistIconButton = component.find(wishlistIconButtonClass);

    wishlistIconButton.trigger("click");
    expect(component.emitted()[clickEventName][0][0]).toBe(true);
  });
  it("emits click:wishlist event with payload=false on button click when isInWishlist=true", () => {
    const component = shallowMount(SfProductCard, {
      stubs: {
        wishlistIconButtonClass: SfButton,
      },
      propsData: {
        title,
        isInWishlist: true,
      },
    });
    const wishlistIconButton = component.find(wishlistIconButtonClass);
    wishlistIconButton.trigger("click");
    expect(component.emitted()[clickEventName][0][0]).toBe(false);
  });
});
