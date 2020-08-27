import { shallowMount } from "@vue/test-utils";
import SfTable from "./SfTable.vue";
describe("SfTable.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfTable);
    expect(component.classes("sf-table")).toBe(true);
  });
});
