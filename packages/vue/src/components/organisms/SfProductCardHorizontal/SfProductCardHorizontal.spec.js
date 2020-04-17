import { shallowMount } from "@vue/test-utils";
import SfProductCardHorizontal from "./SfProductCardHorizontal.vue";
describe("SfProductCardHorizontal.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfProductCardHorizontal);
    expect(component.contains(".sf-product-card-horizontal")).toBe(true);
  });
});
