import { shallowMount } from "@vue/test-utils";
import SfMyReviews from "./SfMyReviews.vue";
describe("SfMyReviews.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfMyReviews);
    expect(component.classes("sf-my-reviews")).toBe(true);
  });
});
