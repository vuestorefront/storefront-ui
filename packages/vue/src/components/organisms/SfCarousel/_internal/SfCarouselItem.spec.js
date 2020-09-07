import { shallowMount } from "@vue/test-utils";
import SfCarouselItem from "./SfCarouselItem.vue";
describe("SfCarouselItem.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfCarouselItem);
    expect(component.classes("sf-carousel-item")).toBe(true);
  });
});
