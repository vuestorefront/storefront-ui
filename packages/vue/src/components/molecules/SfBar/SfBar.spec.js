import { shallowMount } from "@vue/test-utils";
import SfBar from "@/components/molecules/SfBar/SfBar.vue";

describe("SfBar.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfBar);
    expect(component.contains(".sf-bar")).toBe(true);
  });
});
