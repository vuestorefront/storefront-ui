import { shallowMount } from "@vue/test-utils";
import SfHeaderNavItem from "./internal/SfHeaderNavItem.vue";

describe("SfHeader.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfHeaderNavItem);
    expect(component.contains("sf-header__nav-item")).toBe(true);
  });
});
