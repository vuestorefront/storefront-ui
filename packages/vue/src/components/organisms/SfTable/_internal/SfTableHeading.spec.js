import { shallowMount } from "@vue/test-utils";
import SfTableHeading from "./SfTableHeading.vue";
describe("SfTableHeading.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfTableHeading, {
      provide: {
        table: () => {},
      },
    });
    expect(component.exists()).toBe(true);
  });
});
