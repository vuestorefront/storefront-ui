import { shallowMount } from "@vue/test-utils";
import SfSidebar from "./SfSidebar.vue";
describe("SfSidebar.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfSidebar, {
      propsData: {
        visible: true,
      },
    });
    expect(component.classes("sf-sidebar")).toBe(true);
  });
});
