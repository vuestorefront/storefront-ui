import { shallowMount } from "@vue/test-utils";
import SfGrid from "@/components/organisms/SfGrid.vue";

describe("SfGrid.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfGrid);
    expect(component.contains(".sf-grid")).toBe(true);
  });
});
