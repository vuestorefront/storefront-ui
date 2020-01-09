import { shallowMount } from "@vue/test-utils";
import SfAccordion from "./SfAccordion.vue";
describe("SfAccordion.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfAccordion);
    expect(component.contains(".sf-accordion")).toBe(true);
  });
});
