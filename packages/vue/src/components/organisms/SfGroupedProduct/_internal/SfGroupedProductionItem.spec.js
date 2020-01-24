import { shallowMount } from "@vue/test-utils";
import SfGroupedProductItem from "./SfGroupedProductItem.vue";
describe("SfGroupedProductItem.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfGroupedProductItem);
    expect(component.contains(".sf-grouped-product-item")).toBe(true);
  });
});
