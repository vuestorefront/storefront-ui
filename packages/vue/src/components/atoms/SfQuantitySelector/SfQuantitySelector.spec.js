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
  it("will set maximum value when qty > max", () => {
    const wrapper = shallowMount(SfQuantitySelector, {
      propsData: {
        qty: 12,
        disabled: false,
        min: 1,
        max: 10,
      },
    });
    const quantityButton = wrapper.find(".sf-quantity-selector__button");
    quantityButton.trigger("click");
    expect(wrapper.classes("sf-quantity-selector")).toBe(true);
  });
});
