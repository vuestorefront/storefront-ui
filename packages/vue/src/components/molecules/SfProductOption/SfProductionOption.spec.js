import { shallowMount } from "@vue/test-utils";
import SfProductOption from "./SfProductOption.vue";
describe("SfProductOption.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfProductOption);
    expect(component.contains(".sf-product-option")).toBe(true);
  });
});
