import { shallowMount } from "@vue/test-utils";
import SfSelectOption from "./SfSelectOption.vue";
describe("SfSelectOption.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfSelectOption);
    expect(component.contains(".sf-select-option")).toBe(true);
  });
});
