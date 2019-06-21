import { shallowMount } from "@vue/test-utils";
import SfDivider from "@/components/atoms/SfDivider.vue";

describe("SfDivider.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfDivider);
    expect(component.contains(".sf-divider")).toBe(true);
  });
});
