import { shallowMount } from "@vue/test-utils";
import SfArrow from "./SfArrow.vue";
describe("SfArrow.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfArrow);
    expect(component.contains(".sf-arrow")).toBe(true);
  });
});
