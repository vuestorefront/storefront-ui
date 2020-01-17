import { shallowMount } from "@vue/test-utils";
import SfTable from "./SfTable.vue";
describe("SfTable.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfTable);
    expect(component.contains(".sf-table")).toBe(true);
  });
});
