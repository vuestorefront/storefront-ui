import { shallowMount } from "@vue/test-utils";
import SfBullets from "@/components/atoms/SfBullets.vue";

describe("SfBullets.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfBullets);
    expect(component.contains(".sf-bullets")).toBe(true);
  });
});
