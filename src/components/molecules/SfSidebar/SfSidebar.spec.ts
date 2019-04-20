import { shallowMount } from "@vue/test-utils";
import SfSidebar from "./SfSidebar.vue";

describe("SfSidebar.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfSidebar);
    expect(component.contains(".sf-sidebar")).toBe(true);
  });
});
