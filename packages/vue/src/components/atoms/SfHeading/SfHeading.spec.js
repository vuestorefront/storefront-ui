import { shallowMount } from "@vue/test-utils";
import SfHeading from "./SfHeading.vue";
describe("SfHeading.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfHeading);
    expect(component.classes("sf-heading")).toBe(true);
  });
});
