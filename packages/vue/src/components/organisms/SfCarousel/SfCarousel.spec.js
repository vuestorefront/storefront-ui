import { shallowMount } from "@vue/test-utils";
import SfCarousel from "./SfCarousel.vue";
describe("SfCarousel.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfCarousel);
    expect(component.contains(".sf-carousel")).toBe(true);
  });
});
