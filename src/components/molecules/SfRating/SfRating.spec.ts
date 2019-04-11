import { shallowMount } from "@vue/test-utils";
import SfComponent from "@/components/template/SfComponent.vue";

describe("SfRating.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfComponent);
    expect(component.contains(".sf-rating")).toBe(true);
  });

  // TODO TESTS
});
