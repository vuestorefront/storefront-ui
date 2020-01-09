import { shallowMount } from "@vue/test-utils";
import SfQuantitySelector from "./SfQuantitySelector.vue";
describe("SfQuantitySelector.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfQuantitySelector);
    expect(component.contains(".sf-quantity-selector")).toBe(true);
  });
});
