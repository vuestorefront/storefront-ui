import { shallowMount } from "@vue/test-utils";
import SfBadge from "./SfBadge.vue";
describe("SfBadge.vue", () => {
  it("renders component with defaults", () => {
    const wrapper = shallowMount(SfBadge);
    expect(wrapper.classes("sf-badge")).toBe(true);
  });
  it("renders component content via default slot", () => {
    const content = "sfbadge content";
    const wrapper = shallowMount(SfBadge, {
      slots: {
        default: content,
      },
    });
    expect(wrapper.find(".sf-badge").text()).toBe(content);
  });
});
