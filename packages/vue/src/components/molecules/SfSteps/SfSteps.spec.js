import { shallowMount } from "@vue/test-utils";
import SfSteps from "./SfSteps.vue";
describe("SfSteps.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfSteps, {
      propsData: {
        steps: ["one", "two"],
      },
    });
    expect(component.classes("sf-steps")).toBe(true);
  });
});
