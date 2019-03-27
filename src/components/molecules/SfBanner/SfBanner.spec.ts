import { shallowMount } from "@vue/test-utils";
import SfBanner from "@/components/molecules/SfBanner/SfBanner.vue";

describe("SfBanner.vue", () => {
  // DOM Element render check, you can replace with with root component
  // it("renders a button", () => {
  //   const component = shallowMount(SfComponent);
  //   expect(component.contains("button")).toBe(true);
  // });

  // Default slot check, you can replace `default` with any other
  it("renders default prop text when passed", () => {
    const component = shallowMount(SfBanner);
    expect(component).toBeDefined();
  });
});
