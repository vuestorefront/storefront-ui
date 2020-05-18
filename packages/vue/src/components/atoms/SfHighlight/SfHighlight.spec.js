import { shallowMount } from "@vue/test-utils";
import SfHighlight from "./SfHighlight.vue";

describe("SfHighlight.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfHighlight);
    expect(component.contains(".sf-highlight")).toBe(true);
  });
});
