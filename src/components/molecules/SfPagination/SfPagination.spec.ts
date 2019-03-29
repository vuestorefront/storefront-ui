import { shallowMount } from "@vue/test-utils";
import SfPagination from "@/components/template/SfPagination.vue";

describe("SfPagination.vue", () => {
  // DOM Element render check, you can replace with with root component
  // it("renders a button", () => {
  //   const component = shallowMount(SfPagination);
  //   expect(component.contains("button")).toBe(true);
  // });

  // Default slot check, you can replace `default` with any other
  it("renders default prop text when passed", () => {
    const component = shallowMount(SfPagination);
    expect(component).toBeDefined();
  });
});
