import { shallowMount } from "@vue/test-utils";
import SfAddToCart from "./SfAddToCart.vue";
describe("SfAddToCart.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfAddToCart);
    expect(component.contains("[data-test='sf-add-to-card']")).toBe(true);
  });
});
