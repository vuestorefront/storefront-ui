import { shallowMount } from "@vue/test-utils";
import SfFilter from "./SfFilter.vue";
describe("SfFilter.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfFilter);
    expect(component.contains(".sf-filter")).toBe(true);
  });
});
