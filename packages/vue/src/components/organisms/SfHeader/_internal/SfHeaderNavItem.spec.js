import { shallowMount } from "@vue/test-utils";
import SfHeaderNavItem from "./SfHeaderNavItem.vue";

describe("SfHeaderNavItem.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfHeaderNavItem);
    expect(component.contains(".sf-header__nav-item")).toBe(true);
  });
});
