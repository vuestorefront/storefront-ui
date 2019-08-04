import { shallowMount } from "@vue/test-utils";
import SfBannerGrid from "@/components/organisms/SfBannerGrid/SfBannerGrid.vue";

describe("SfBannerGrid.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfBannerGrid);
    expect(component.contains(".sf-banner-grid")).toBe(true);
  });
});
