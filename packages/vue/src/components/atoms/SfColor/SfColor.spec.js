import { shallowMount } from "@vue/test-utils";
import SfColor from "./SfColor.vue";

describe("SfColor", () => {
  it("renders component with defaults", () => {
    const wrapper = shallowMount(SfColor);
    expect(wrapper.classes("sf-color")).toBe(true);
  });
  it("renders component with props", () => {
    const wrapper = shallowMount(SfColor, {
      propsData: {
        color: "green",
        hasBadge: false,
        selected: false,
      },
    });
    expect(wrapper.classes("sf-color")).toBe(true);
  });
  it("renders component with badge", () => {
    const wrapper = shallowMount(SfColor, {
      propsData: {
        hasBadge: true,
        selected: true,
      },
    });
    expect(wrapper.find(".sf-color__badge").exists()).toBe(true);
  });
  it("renders content passed via badge slot", () => {
    const component = shallowMount(SfColor, {
      slots: {
        badge: "<div class='sf-badge'>Some content</div>",
      },
    });
    expect(component.find(".sf-badge").exists()).toBe(true);
  });
});
