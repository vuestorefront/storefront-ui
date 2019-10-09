import { shallowMount } from "@vue/test-utils";
import SfSteps from "./SfSteps.vue";

describe("SfSteps.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfSteps);
    expect(component.contains(".sf-steps")).toBe(true);
  });
});
