import { shallowMount } from "@vue/test-utils";
import SfCollectedProduct from "@/components/molecules/SfCollectedProduct.vue";

describe("SfCollectedProduct.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfCollectedProduct);
    expect(component.contains(".sf-sf-collected-product")).toBe(true);
  });
});
