import { shallowMount } from "@vue/test-utils";
import SfCheckbox from "./SfCheckbox.vue";

describe("SfCheckbox.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfCheckbox);
    expect(component.contains(".sf-component")).toBe(true);
  });

  // Default slot check, you can replace `default` with any other
  // it("renders default prop text when passed", () => {
  //   const component = shallowMount(SfCheckbox);
  //   expect(component).toBeDefined();
  // });
});
