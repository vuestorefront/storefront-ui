import { shallowMount } from "@vue/test-utils";
import { getConfig } from "cloudinary-build-url";
import SfCimage from "./SfCimage.vue";

describe("SfCimage.vue", () => {
  it("renders a component with publicId and cloud", () => {
    const wrapper = shallowMount(SfCimage, {
      propsData: {
        publicId: "example",
        cloud: {
          cloudName: "demo",
        },
        alt: "example",
      },
    });
    expect(wrapper.classes("sf-cimage")).toBe(true);
  });
  it("renders a component with placeholder", () => {
    const wrapper = shallowMount(SfCimage, {
      propsData: {
        publicId: "example",
        cloud: {
          cloudName: "demo",
        },
        alt: "example",
        placeholder: "blur",
      },
    });
    expect(wrapper.classes("sf-cimage")).toBe(true);
  });
});
