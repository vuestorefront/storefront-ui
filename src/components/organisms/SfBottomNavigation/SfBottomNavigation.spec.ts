import { shallowMount } from "@vue/test-utils";
import SfBottomNavigation from "@/components/organisms/SfBottomNavigation/SfBottomNavigation.vue";

describe("SfBottomNavigation.vue", () => {
  it("renders a bottom navigation", () => {
    const component = shallowMount(SfBottomNavigation);
    expect(component.contains(".sf-bottom-navigation")).toBe(true);
  });
});
