import { shallowMount } from "@vue/test-utils";
import SfTableHeading from "./SfTableHeading.vue";
describe("SfTableHeading.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfTableHeading, {
      inject: ["table"],
      provide() {
        return {
          table: []
        };
      }
    });
    expect(component.contains(".sf-table__heading")).toBe(true);
  });
});
