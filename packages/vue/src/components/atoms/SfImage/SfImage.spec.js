import { shallowMount } from "@vue/test-utils";
import SfImage from "./SfImage.vue";
describe("SfImage.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfImage, {
      propsData: {
        alt: "test",
        src: "test",
      },
    });
    expect(component.classes("sf-image--wrapper")).toBe(true);
  });
});
