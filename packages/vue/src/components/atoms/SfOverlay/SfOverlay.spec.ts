import { shallowMount } from "@vue/test-utils";
import SfOverlay from "@/components/atoms/SfOverlay/SfOverlay.vue";

describe("SfOverlay.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfOverlay);
    expect(component.contains(".sf-overlay")).toBe(true);
  });
});
