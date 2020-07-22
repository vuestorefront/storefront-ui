import { shallowMount } from "@vue/test-utils";
import SfComponentSelect from "./SfComponentSelect.vue";
describe("SfComponentSelect.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfComponentSelect);
    expect(component.contains(".sf-select")).toBe(true);
  });
});
