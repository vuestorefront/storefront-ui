import { shallowMount } from "@vue/test-utils";
import SfDivider from "./SfDivider.vue";
describe("SfDivider.vue", () => {
  it("renders component with defaults", () => {
    const wrapper = shallowMount(SfDivider);
    expect(wrapper.classes("sf-divider")).toBe(true);
  });
});
