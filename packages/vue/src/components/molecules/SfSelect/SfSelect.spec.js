import { shallowMount } from "@vue/test-utils";
import SfSelect from "./SfSelect.vue";
describe("SfSelect.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfSelect);
    expect(component.contains(".sf-select")).toBe(true);
  });
});
