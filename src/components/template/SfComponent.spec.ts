import { shallowMount } from "@vue/test-utils";
import SfComponent from "@/components/template/SfComponent.vue";

describe("SfComponent.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfComponent);
    expect(component.contains(".sf-component")).toBe(true);
  });

  // Default slot check, you can replace `default` with any other
  // it("renders default prop text when passed", () => {
  //   const component = shallowMount(SfComponent);
  //   expect(component).toBeDefined();
  // });
});
