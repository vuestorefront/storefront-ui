import { shallowMount } from "@vue/test-utils";
import SfTab from "./SfTab.vue";
describe("SfTab.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfTab);
    expect(component.contains(".sf-tabs__title")).toBe(true);
  });
});
