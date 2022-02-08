import { shallowMount } from "@vue/test-utils";
import SfOrderReview from "./SfOrderReview.vue";
describe("SfOrderReview.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfOrderReview);
    expect(component.classes("sf-order-review")).toBe(true);
  });
});
