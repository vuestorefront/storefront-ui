import { shallowMount } from "@vue/test-utils";
import SfCounter from "./SfCounter.vue";
describe("SfCounter.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfCounter);
    expect(component.contains(".sf-counter")).toBe(true);
  });
});
