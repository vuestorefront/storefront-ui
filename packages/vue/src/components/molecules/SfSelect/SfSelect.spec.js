import { shallowMount } from "@vue/test-utils";
import SfSelect from "./SfSelect.vue";

describe("SfSelect.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfSelect);
    expect(component.classes("sf-select")).toBe(true);
  });
});
