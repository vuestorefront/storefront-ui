import { shallowMount } from "@vue/test-utils";
import SfColor from "./SfColor.vue";
describe("SfColor", () => {
  it("renders a component", () => {
    const component = shallowMount(SfColor);
    expect(component.contains(".sf-color")).toBe(true);
  });
});
