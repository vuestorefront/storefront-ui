import { shallowMount } from "@vue/test-utils";
import SfAddToCart from "@/components/molecules/SfAddToCart.vue";

describe("SfAddToCart.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfAddToCart);
    expect(component.contains(".sf-sf-add-to-cart")).toBe(true);
  });
});
