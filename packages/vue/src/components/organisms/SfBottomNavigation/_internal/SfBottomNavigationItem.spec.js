import { shallowMount } from "@vue/test-utils";
import SfBottomNavigationItem from "./SfBottomNavigationItem.vue";
describe("SfBottomNavigationItem.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfBottomNavigationItem);
    expect(component.classes("sf-bottom-navigation-item")).toBe(true);
  });
});
