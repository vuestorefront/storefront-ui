import { shallowMount } from "@vue/test-utils";
import SfSticky from "@/components/molecules/SfSticky.vue";

describe("SfSticky.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfSticky);
    expect(component.contains(".sf-sf-sticky")).toBe(true);
  });
});
