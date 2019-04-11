import { shallowMount } from "@vue/test-utils";
import SfRating from "./SfRating.vue";

describe("SfRating.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfRating);
    expect(component.contains(".sf-rating")).toBe(true);
  });

  // TODO TESTS
});
