import { shallowMount } from "@vue/test-utils";
import SfHeading from "@/components/atoms/SfHeading.vue";

describe("SfHeading.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfHeading);
    expect(component.contains(".sf-heading")).toBe(true);
  });
});
