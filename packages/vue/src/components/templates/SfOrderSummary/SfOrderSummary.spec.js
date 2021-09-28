import { shallowMount } from "@vue/test-utils";
import SfOrderSummary from "./SfOrderSummary.vue";
describe("SfOrderSummary.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfOrderSummary);
    expect(component.classes("sf-order-summary")).toBe(true);
  });
});
