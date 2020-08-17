import { shallowMount } from "@vue/test-utils";
import SfSticky from "./SfSticky.vue";
describe("SfSticky.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfSticky);
    expect(component.classes("sf-sticky")).toBe(true);
  });
});
