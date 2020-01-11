import { shallowMount } from "@vue/test-utils";
import SfCarouselItem from "./SfCarouselItem.vue";
describe("SfCarouselItem.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfCarouselItem);
    expect(component.contains(".sf-carousel-item")).toBe(true);
  });
});
