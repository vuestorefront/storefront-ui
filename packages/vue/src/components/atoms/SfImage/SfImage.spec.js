import { shallowMount } from "@vue/test-utils";
import SfImage from "./SfImage.vue";
describe("SfImage.vue", () => {
  it("renders component with srcset", () => {
    const wrapper = shallowMount(SfImage, {
      propsData: {
        src: "/assets/storybook/SfImage/product-109x164.webp",
        alt: "image",
        srcsets: [
          {
            src: "/assets/storybook/SfImage/product-109x164.webp",
            alt: "image",
            width: 109,
            breakpoint: 480,
          },
          {
            src: "/assets/storybook/SfImage/product-216x326.jpg",
            alt: "image",
            width: 1200,
            breakpoint: 1200,
          },
          {
            src: "/assets/storybook/SfImage/product-109x164.webp",
            alt: "image",
            width: "400px",
            breakpoint: 768,
          },
        ],
        width: 216,
        height: 326,
      },
    });
    expect(wrapper.classes("sf-image--wrapper")).toBe(true);
  });
  it("won't render placeholder when image is loaded", async () => {
    const wrapper = shallowMount(SfImage, {
      propsData: {
        src: "/assets/storybook/SfImage/product-109x164.webp",
        alt: "image",
        srcsets: [
          {
            src: "/assets/storybook/SfImage/product-109x164.webp",
            alt: "image",
            width: 109,
            breakpoint: 480,
          },
          {
            src: "/assets/storybook/SfImage/product-216x326.jpg",
            alt: "image",
            width: 1200,
            breakpoint: 1200,
          },
          {
            src: "/assets/storybook/SfImage/product-109x164.webp",
            alt: "image",
            width: "400px",
            breakpoint: 768,
          },
        ],
        width: 216,
        height: 326,
      },
    });
    await wrapper.find("img").trigger("load");
    expect(wrapper.classes("sf-image--placeholder")).toBe(false);
  });
  it("renders component with resolutions", () => {
    const wrapper = shallowMount(SfImage, {
      propsData: {
        src: "/assets/storybook/SfImage/product-109x164.webp",
        alt: "image",
        srcsets: [
          {
            src: "/assets/storybook/SfImage/product-109x164.webp",
            alt: "image",
            breakpoint: 480,
            resolution: "10px",
          },
          {
            src: "/assets/storybook/SfImage/product-216x326.jpg",
            alt: "image",
            breakpoint: 1200,
            resolution: 10,
          },
          {
            src: "/assets/storybook/SfImage/product-109x164.webp",
            alt: "image",
            breakpoint: 768,
            resolution: "10px",
          },
        ],
        width: 216,
        height: 326,
      },
    });
    expect(wrapper.classes("sf-image--wrapper")).toBe(true);
  });
});
