import { shallowMount } from "@vue/test-utils";
import SfGroupedProduct from "@/components/organisms/SfGroupedProduct/SfGroupedProduct.vue";
describe("SfGroupedProduct.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfGroupedProduct);
    expect(component.classes("sf-grouped-product")).toBe(true);
  });
});
