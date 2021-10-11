import { shallowMount } from "@vue/test-utils";
import SfAccordion from "./SfAccordion.vue";
describe("SfAccordion.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfAccordion);
    expect(component.classes("sf-accordion")).toBe(true);
  });
});
