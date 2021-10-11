import { shallowMount } from "@vue/test-utils";
import SfHeaderNavigation from "./SfHeaderNavigation.vue";
describe("SfHeaderNavigation.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfHeaderNavigation);
    expect(component.classes("sf-header-navigation")).toBe(true);
  });
});
