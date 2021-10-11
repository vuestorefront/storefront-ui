import { shallowMount } from "@vue/test-utils";
import SfDivider from "./SfDivider.vue";
describe("SfDivider.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfDivider);
    expect(component.classes("sf-divider")).toBe(true);
  });
});
