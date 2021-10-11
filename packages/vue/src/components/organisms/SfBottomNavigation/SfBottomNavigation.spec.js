import { shallowMount } from "@vue/test-utils";
import SfBottomNavigation from "./SfBottomNavigation.vue";
describe("SfBottomNavigation.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfBottomNavigation);
    expect(component.classes("sf-bottom-navigation")).toBe(true);
  });
});
