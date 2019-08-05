import { shallowMount } from "@vue/test-utils";
import SfProductCard from "@/components/molecules/SfProductCard/SfProductCard.vue";

describe("SfProductCard.vue", () => {
  const rating = { max: 5, score: 4 };
  const price = { regular: "$10,99" };
  const title = "Product A";
  let isOnWishlist = false;

  it("renders Product Card", () => {
    isOnWishlist = false;
    const component = shallowMount(SfProductCard, {
      propsData: {
        rating,
        price,
        title,
        isOnWishlist
      }
    });

    expect(component.contains(".sf-product-card")).toBe(true);
  });
  it("renders default wishlist icon", () => {
    const component = shallowMount(SfProductCard, {
      propsData: {
        rating,
        price,
        title,
        isOnWishlist
      }
    });

    expect(component.contains(".sf-product-card")).toBe(true);
  });

  it("renders default wish list icon when none is passed", () => {
    isOnWishlist = false;
    const component = shallowMount(SfProductCard, {
      propsData: {
        rating,
        price,
        title,
        isOnWishlist
      }
    });

    expect(component.contains("[data-test='sf-wishlist-icon'")).toBe(true);
  });

  it("render custom wish list icon", () => {
    isOnWishlist = false;
    const path =
      "M10 0C4.48561 0 0 4.48561 0 10C0 15.5144 4.48561 20 10 20C15.5144 20 20 15.5144 20 10C20 4.48561 15.5144 0 10 0ZM10 1.46341C14.7237 1.46341 18.5366 5.27634 18.5366 10C18.5366 14.7237 14.7237 18.5366 10 18.5366C5.27634 18.5366 1.46341 14.7237 1.46341 10C1.46341 5.27634 5.27634 1.46341 10 1.46341ZM10 2.68293C9.59605 2.68293 9.26829 3.01068 9.26829 3.41463V10C9.26829 10.2706 9.41597 10.5059 9.63415 10.6326L14.9161 13.6814C15.2658 13.8834 15.7126 13.7643 15.9146 13.4146C16.1166 13.065 15.9975 12.6181 15.6478 12.4161L10.7317 9.58078V3.41468C10.7317 3.01073 10.404 2.68298 10 2.68298V2.68293Z";

    const component = shallowMount(SfProductCard, {
      propsData: {
        rating,
        price,
        title,
        isOnWishlist,
        wishlistIcon: path
      }
    });

    expect(
      component
        .find("[data-test='sf-wishlist-icon'")
        .find("path")
        .attributes("d")
    ).toEqual(path);
  });

  it("renders default on wish list icon when none is passed", () => {
    isOnWishlist = true;
    const component = shallowMount(SfProductCard, {
      propsData: {
        rating,
        price,
        title,
        isOnWishlist
      }
    });

    expect(component.contains("[data-test='sf-wishlist-icon'")).toBe(true);
  });

  it("does not render wish list icon when false is passed", () => {
    isOnWishlist = true;
    const component = shallowMount(SfProductCard, {
      propsData: {
        rating,
        price,
        title,
        isOnWishlist,
        wishlistIcon: false
      }
    });

    expect(component.contains("[data-test='sf-wishlist-icon'")).toBe(false);
  });

  it("render custom on wish list icon", () => {
    isOnWishlist = true;
    const path =
      "M10 0C4.48561 0 0 4.48561 0 10C0 15.5144 4.48561 20 10 20C15.5144 20 20 15.5144 20 10C20 4.48561 15.5144 0 10 0ZM10 1.46341C14.7237 1.46341 18.5366 5.27634 18.5366 10C18.5366 14.7237 14.7237 18.5366 10 18.5366C5.27634 18.5366 1.46341 14.7237 1.46341 10C1.46341 5.27634 5.27634 1.46341 10 1.46341ZM10 2.68293C9.59605 2.68293 9.26829 3.01068 9.26829 3.41463V10C9.26829 10.2706 9.41597 10.5059 9.63415 10.6326L14.9161 13.6814C15.2658 13.8834 15.7126 13.7643 15.9146 13.4146C16.1166 13.065 15.9975 12.6181 15.6478 12.4161L10.7317 9.58078V3.41468C10.7317 3.01073 10.404 2.68298 10 2.68298V2.68293Z";

    const component = shallowMount(SfProductCard, {
      propsData: {
        rating,
        price,
        title,
        isOnWishlist,
        onWishlistIcon: path
      }
    });

    expect(
      component
        .find("[data-test='sf-wishlist-icon'")
        .find("path")
        .attributes("d")
    ).toEqual(path);
  });

  it("renders default wish list icon when none is passed", () => {
    isOnWishlist = false;
    const component = shallowMount(SfProductCard, {
      propsData: {
        rating,
        price,
        title,
        isOnWishlist
      }
    });
    (component.vm as any).toggleOnWishlist();
    expect(component.emitted()["click:wishlist"][0]).toBe(true);
  });
});
