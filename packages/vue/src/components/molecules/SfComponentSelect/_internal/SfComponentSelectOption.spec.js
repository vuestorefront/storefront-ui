import { shallowMount } from "@vue/test-utils";
import SfComponentSelectOption from "./SfComponentSelectOption.vue";
describe("SfComponentSelectOption.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfComponentSelectOption);
    expect(component.contains(".sf-select-option")).toBe(true);
  });
});
