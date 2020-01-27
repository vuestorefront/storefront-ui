import { shallowMount } from "@vue/test-utils";
import SfStep from "./SfStep.vue";
import SfSteps from "../SfSteps.vue";
describe("SfStep.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfStep, {
      parentComponent: SfSteps,
      inject: ["stepsData"],
      provide() {
        const stepsData = {};
        Object.defineProperty(stepsData, "index", {
          enumerable: false,
          get: () => this.active
        });
        Object.defineProperty(stepsData, "name", {
          enumerable: false,
          get: () => this.steps[this.active]
        });
        Object.defineProperty(stepsData, "updateSteps", {
          enumerable: false,
          value: this.updateSteps
        });
        return {
          stepsData
        };
      }
    });
    expect(component.contains(".sf-step")).toBe(true);
  });
});
