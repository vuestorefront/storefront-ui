import { shallowMount } from "@vue/test-utils";
import SfComponent from "@/components/template/SfComponent.vue";

describe("SfSidebar.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfComponent);
    expect(component.contains(".sf-sidebar")).toBe(true);
  });
});
