import { shallowMount } from "@vue/test-utils";
import SfPagination from "./SfPagination.vue";

describe("SfPagination.vue", () => {
  it("renders a pagination", () => {
    const component = shallowMount(SfPagination);
    expect(component.contains("nav")).toBe(true);
  });
});
