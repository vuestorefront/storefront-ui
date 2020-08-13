import { shallowMount } from "@vue/test-utils";
import SfTableData from "./SfTableData.vue";
describe("SfTableData.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfTableData);
    expect(component.contains(".sf-table__data")).toBe(true);
  });
});
