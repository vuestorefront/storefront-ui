import { shallowMount } from "@vue/test-utils";
import SfIcon from "@/components/atoms/SfIcon.vue";

describe("SfIcon.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfIcon);
    expect(component.contains(".sf-sf-icon")).toBe(true);
  });
});
