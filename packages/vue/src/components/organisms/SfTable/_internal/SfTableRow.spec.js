import { shallowMount } from "@vue/test-utils";
import SfTableRow from "./SfTableRow.vue";
describe("SfTableRow.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfTableRow, {
      inject: ["table"],
      provide() {
        return {
          table: []
        };
      }
    });
    expect(component.contains(".sf-table__row")).toBe(true);
  });
});
