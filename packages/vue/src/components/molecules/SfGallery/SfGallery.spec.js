import { shallowMount } from "@vue/test-utils";
import SfGallery from "./SfGallery.vue";
describe("SfGallery.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfGallery);
    expect(component.contains(".sf-gallery")).toBe(true);
  });
});
