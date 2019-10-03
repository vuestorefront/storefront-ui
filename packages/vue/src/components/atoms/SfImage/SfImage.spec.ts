import { shallowMount } from "@vue/test-utils";
import SfImage from "@/components/atoms/SfImage/SfImage.vue";

describe("SfImage.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfImage);
    expect(component.contains(".sf-image")).toBe(true);
  });
});
