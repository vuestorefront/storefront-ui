import { shallowMount } from "@vue/test-utils";
import SfOverlay from "./SfOverlay.vue";
describe("SfOverlay.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfOverlay, {
      propsData: {
        visible: true,
      },
    });
    expect(component.contains(".sf-overlay")).toBe(true);
  });
});
