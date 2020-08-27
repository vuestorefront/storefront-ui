import { shallowMount } from "@vue/test-utils";
import SfCollectedProduct from "./SfCollectedProduct.vue";
describe("SfCollectedProduct.vue", () => {
  it("renders a component", () => {
    const title = "Product";
    const component = shallowMount(SfCollectedProduct, {
      propsData: {
        title,
      },
    });
    expect(component.classes("sf-collected-product")).toBe(true);
  });
});
