import { shallowMount } from "@vue/test-utils";
import SfBottomNavigationItem from "./SfBottomNavigationItem.vue";
describe("SfBottomNavigationItem.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfBottomNavigationItem);
    expect(component.contains(".sf-bottom-navigation__item")).toBe(true);
  });
});
