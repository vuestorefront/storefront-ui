import { shallowMount } from "@vue/test-utils";
import SfDropdown from "./SfDropdown.vue";
describe("SfDropdown.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfDropdown, {
      propsData: {
        isOpen: true,
      },
    });
    expect(component.classes("sf-dropdown")).toBe(true);
  });
});
