import { shallowMount } from "@vue/test-utils";
import SfSlidingSection from "./SfSlidingSection.vue";
describe("SfSlidingSection.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfSlidingSection);
    expect(component.classes("sf-sliding-section")).toBe(true);
  });
});
