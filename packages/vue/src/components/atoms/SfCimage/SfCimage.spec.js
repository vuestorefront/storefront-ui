import { shallowMount } from "@vue/test-utils";
import SfCimage from "./SfCimage.vue";

describe("SfCimage.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfCimage, {
      propsData: {
        publicId: "example",
        cloud: {
          cloudName: "demo",
        },
      },
    });
    expect(component.contains(".sf-cimage")).toBe(true);
  });
});
