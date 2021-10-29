import { shallowMount } from "@vue/test-utils";
import SfQuantitySelector from "./SfQuantitySelector.vue";
describe("SfQuantitySelector.vue", () => {
  it("renders component with defaults", () => {
    const wrapper = shallowMount(SfQuantitySelector);
    expect(wrapper.classes("sf-quantity-selector")).toBe(true);
  });
  it("renders component with props", () => {
    const wrapper = shallowMount(SfQuantitySelector, {
      propsData: {
        qty: 2,
        disabled: false,
        min: 1,
        max: 10,
      },
    });
    expect(wrapper.classes("sf-quantity-selector")).toBe(true);
  });
  it("renders component with props", () => {
    const wrapper = shallowMount(SfQuantitySelector, {
      propsData: {
        qty: 2,
        disabled: false,
        min: 1,
        max: 10,
      },
    });
    expect(wrapper.classes("sf-quantity-selector")).toBe(true);
  });
});
