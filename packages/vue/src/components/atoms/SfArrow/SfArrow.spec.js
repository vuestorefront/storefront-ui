import { shallowMount } from "@vue/test-utils";
import SfArrow from "./SfArrow.vue";
describe("SfArrow.vue", () => {
  it("renders a component with default values", () => {
    const wrapper = shallowMount(SfArrow);
    expect(wrapper.classes("sf-arrow")).toBe(true);
  });
});
