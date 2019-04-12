import { shallowMount } from "@vue/test-utils";
import SfPrice from "@/components/template/SfPrice.vue";

describe("SfPrice.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfPrice);
    expect(component.contains(".sf-price")).toBe(true);
  });

  // Default slot check, you can replace `default` with any other
  // it("renders default prop text when passed", () => {
  //   const component = shallowMount(SfComponent);
  //   expect(component).toBeDefined();
  // });
});
