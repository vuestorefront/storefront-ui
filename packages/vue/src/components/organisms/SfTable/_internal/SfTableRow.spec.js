import { shallowMount } from "@vue/test-utils";
import SfTableRow from "./SfTableRow.vue";
describe("SfTableRow.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfTableRow, {
      provide: {
        table: () => {},
      },
    });
    expect(component.exists()).toBe(true);
  });
});
