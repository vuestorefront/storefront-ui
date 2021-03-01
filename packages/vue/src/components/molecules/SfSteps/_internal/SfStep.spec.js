import { shallowMount } from "@vue/test-utils";
import SfStep from "./SfStep.vue";
import SfSteps from "../SfSteps.vue";
describe("SfStep.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfStep, {
      provide: {
        stepsData: {
          index: 0,
          name: "example",
          updateSteps: () => [],
        },
      },
    });
    expect(component.classes("sf-step")).toBe(true);
  });
});
