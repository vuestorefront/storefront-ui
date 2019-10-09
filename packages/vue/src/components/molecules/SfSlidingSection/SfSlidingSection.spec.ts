import { shallowMount } from "@vue/test-utils";
import SfSlidingSection from "@/components/molecules/SfSlidingSection/SfSlidingSection.vue";

describe("SfSlidingSection.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfSlidingSection);
    expect(component.contains(".sf-sliding-section")).toBe(true);
  });
});
