import { shallowMount } from "@vue/test-utils";
import SfStep from "./SfStep.vue";
describe("SfStep.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfStep);
    expect(component.contains(".sf-step")).toBe(true);
  });
});
