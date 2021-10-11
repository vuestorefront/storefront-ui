import { shallowMount } from "@vue/test-utils";
import SfSection from "./SfSection.vue";
describe("SfSection.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfSection);
    expect(component.classes("sf-section")).toBe(true);
  });
});
