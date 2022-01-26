import { shallowMount } from "@vue/test-utils";
import SfConfirmOrder from "./SfConfirmOrder.vue";
describe("SfConfirmOrder.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfConfirmOrder);
    expect(component.classes("sf-confirm-order")).toBe(true);
  });
});
