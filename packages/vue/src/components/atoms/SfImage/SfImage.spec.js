import { shallowMount } from "@vue/test-utils";
import SfImage from "./SfImage.vue";
describe("SfImage.vue", () => {
  it("renders component with defaults", () => {
    const wrapper = shallowMount(SfImage);
    expect(wrapper.classes("sf-image--wrapper")).toBe(true);
  });
  it("renders component with props", () => {
    const wrapper = shallowMount(SfImage, {
      propsData: {
        alt: "test",
        src: "test",
      },
    });
    expect(wrapper.classes("sf-image--wrapper")).toBe(true);
  });
  it("renders component with srcset", () => {
    const wrapper = shallowMount(SfImage, {
      propsData: {
        srcsets: [
          {
            src: "/assets/storybook/SfImage/product-109x164.webp",
            width: 109,
            breakpoint: 480,
          },
          {
            src: "/assets/storybook/SfImage/product-216x326.jpg",
            width: 1200,
            breakpoint: 1200,
          },
          {
            src: "/assets/storybook/SfImage/product-109x164.webp",
            width: "400px",
            breakpoint: 768,
          },
        ],
      },
    });
    expect(wrapper.classes("sf-image--wrapper")).toBe(true);
  });
  it("won't render placeholder when image is loaded", async () => {
    const wrapper = shallowMount(SfImage, {
      propsData: {
        srcsets: [
          {
            src: "/assets/storybook/SfImage/product-109x164.webp",
            width: 109,
            breakpoint: 480,
          },
          {
            src: "/assets/storybook/SfImage/product-216x326.jpg",
            width: 1200,
            breakpoint: 1200,
          },
          {
            src: "/assets/storybook/SfImage/product-109x164.webp",
            width: "400px",
            breakpoint: 768,
          },
        ],
      },
    });
    await wrapper.find("img").trigger("load");
    expect(wrapper.classes("sf-image--placeholder")).toBe(false);
  });
  it("renders component with resolutions", () => {
    const wrapper = shallowMount(SfImage, {
      propsData: {
        srcsets: [
          {
            src: "/assets/storybook/SfImage/product-109x164.webp",
            breakpoint: 480,
            resolution: "10px",
          },
          {
            src: "/assets/storybook/SfImage/product-216x326.jpg",
            breakpoint: 1200,
            resolution: 10,
          },
          {
            src: "/assets/storybook/SfImage/product-109x164.webp",
            breakpoint: 768,
            resolution: "10px",
          },
        ],
      },
    });
    expect(wrapper.classes("sf-image--wrapper")).toBe(true);
  });
});
