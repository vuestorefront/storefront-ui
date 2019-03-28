import { shallowMount } from "@vue/test-utils";
import SfCircleButton from "@/components/atoms/SfCircleButton/SfCircleButton.vue";

describe("SfCircleButton.vue", () => {
  // DOM Element render check, you can replace with with root component
  // it("renders a button", () => {
  //   const component = shallowMount(SfComponent);
  //   expect(component.contains("button")).toBe(true);
  // });

  // Default slot check, you can replace `default` with any other
  it("renders default prop text when passed", () => {
    const component = shallowMount(SfCircleButton);
    expect(component).toBeDefined();
  });
});
