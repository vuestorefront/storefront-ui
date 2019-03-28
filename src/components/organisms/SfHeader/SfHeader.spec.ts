import { shallowMount } from "@vue/test-utils";
import SfHeader from "@/components/organisms/SfHeader/SfHeader.vue";

describe("SfHeader.vue", () => {
  // DOM Element render check
  it("renders a header", () => {
     const component = shallowMount(SfHeader);
     expect(component.contains("header")).toBe(true);
  });

  it("renders three columns for mobile view", () => {
     const component = shallowMount(SfHeader);
     expect(component.contains(".sf-header__column--left")).toBe(true);
     expect(component.contains(".sf-header__column--middle")).toBe(true);
     expect(component.contains(".sf-header__column--right")).toBe(true);
  });

  // 'middle' slot check
  it("renders middle slot text when passed", () => {
    const msg = "Women";
    const component = shallowMount(SfHeader, {
      slots: {
        middle: msg
      }
    });
    expect(component.find(".sf-header__column--middle").text()).toMatch(msg);
  });
});
