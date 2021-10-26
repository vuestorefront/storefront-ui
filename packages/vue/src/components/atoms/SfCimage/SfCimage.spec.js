import { shallowMount } from "@vue/test-utils";
import SfCimage from "./SfCimage.vue";

describe("SfCimage.vue", () => {
  it("renders a component with publicId and cloud", () => {
    const component = shallowMount(SfCimage, {
      propsData: {
        publicId: "example",
        cloud: {
          cloudName: "demo",
        },
        alt: "example",
      },
    });
    expect(component.classes("sf-cimage")).toBe(true);
  });
  it("renders a component with placeholder", () => {
    const component = shallowMount(SfCimage, {
      propsData: {
        publicId: "example",
        cloud: {
          cloudName: "demo",
        },
        alt: "example",
        placeholder: "blur",
      },
    });
    expect(component.classes("sf-cimage")).toBe(true);
  });
});
