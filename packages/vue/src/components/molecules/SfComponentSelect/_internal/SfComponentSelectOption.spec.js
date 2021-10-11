import { shallowMount } from "@vue/test-utils";
import SfComponentSelectOption from "./SfComponentSelectOption.vue";
describe("SfComponentSelectOption.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfComponentSelectOption);
    expect(component.classes("sf-component-select-option")).toBe(true);
  });
});
