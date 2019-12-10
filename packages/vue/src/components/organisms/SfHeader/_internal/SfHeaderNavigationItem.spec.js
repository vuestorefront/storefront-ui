import { shallowMount } from "@vue/test-utils";
import SfHeaderNavigationItem from "./SfHeaderNavigationItem.vue";

describe("SfHeaderNavigationItem.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfHeaderNavigationItem);
    expect(component.contains(".sf-header-navigation-item")).toBe(true);
  });
});
