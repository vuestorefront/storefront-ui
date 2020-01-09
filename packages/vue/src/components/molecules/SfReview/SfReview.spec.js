import { shallowMount } from "@vue/test-utils";
import SfReview from "./SfReview.vue";
describe("SfReview.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfReview);
    expect(component.contains(".sf-review")).toBe(true);
  });
});
