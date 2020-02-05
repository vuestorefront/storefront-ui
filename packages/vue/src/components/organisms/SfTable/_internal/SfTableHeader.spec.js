import { shallowMount } from "@vue/test-utils";
import SfTableHeader from "./SfTableHeader.vue";
describe("SfTableHeader.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfTableHeader);
    expect(component.contains(".sf-table__header")).toBe(true);
  });
});
