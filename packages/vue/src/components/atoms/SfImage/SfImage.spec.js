import { shallowMount } from "@vue/test-utils";
import SfImage from "./SfImage.vue";
describe("SfImage.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfImage, { propsData: {} });
    expect(component.contains(".sf-image")).toBe(true);
  });
});
