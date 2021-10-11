import { shallowMount } from "@vue/test-utils";
import SfTableHeader from "./SfTableHeader.vue";
describe("SfTableHeader.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfTableHeader);
    expect(component.classes("sf-table__header")).toBe(true);
  });
});
