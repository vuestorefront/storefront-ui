import { shallowMount } from "@vue/test-utils";
import SfRange from "./SfRange.vue";

describe("SfRange.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfRange);
    expect(component.classes("sf-range")).toBe(true);
  });
});
