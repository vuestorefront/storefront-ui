import { shallowMount } from "@vue/test-utils";
import SfFilter from "./SfFilter.vue";
describe("SfFilter.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfFilter);
    expect(component.classes("sf-filter")).toBe(true);
  });
});
