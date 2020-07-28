import { shallowMount } from "@vue/test-utils";
import SfBannerGrid from "./SfBannerGrid.vue";
describe("SfBannerGrid.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfBannerGrid);
    expect(component.classes("sf-banner-grid")).toBe(true);
  });
});
