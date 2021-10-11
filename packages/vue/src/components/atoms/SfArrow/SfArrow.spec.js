import { shallowMount } from "@vue/test-utils";
import SfArrow from "./SfArrow.vue";
describe("SfArrow.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfArrow);
    expect(component.classes("sf-arrow")).toBe(true);
  });
});
