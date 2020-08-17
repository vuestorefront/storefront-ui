import { shallowMount } from "@vue/test-utils";
import SfAccordionItem from "./SfAccordionItem.vue";
describe("SfAccordionItem.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfAccordionItem);
    expect(component.classes("sf-accordion-item")).toBe(true);
  });
});
