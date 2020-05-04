import { shallowMount } from "@vue/test-utils";
import SfAddToCart from "./SfAddToCart.vue";
describe("SfAddToCart.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfAddToCart);
    expect(component.contains(".sf-add-to-cart")).toBe(true);
  });
});
