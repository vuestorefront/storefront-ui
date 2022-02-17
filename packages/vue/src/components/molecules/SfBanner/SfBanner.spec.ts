import "./matchMedia.mock";
import { shallowMount } from "@vue/test-utils";
import SfBanner from "./SfBanner.vue";

describe("SfBanner.vue", () => {
  it("renders a banner", () => {
    const component = shallowMount(SfBanner);
    expect(component.classes("sf-banner")).toBe(true);
  });
  it("renders title slot text when passed", () => {
    const title = "HelloWorld";
    const component = shallowMount(SfBanner, {
      slots: {
        title,
      },
    });
    expect(component.find(".sf-banner").text()).toContain(title);
  });
  it("renders subtitle slot text when passed", () => {
    const subtitle = "HelloWorld";
    const component = shallowMount(SfBanner, {
      slots: {
        subtitle,
      },
    });
    expect(component.find(".sf-banner").text()).toContain(subtitle);
  });
  it("renders description slot text when passed", () => {
    const description = "HelloWorld";
    const component = shallowMount(SfBanner, {
      slots: {
        description,
      },
    });
    expect(component.find(".sf-banner").text()).toContain(description);
  });
  it("renders button prop text when passed", () => {
    const buttonText = "HelloWorld";
    const component = shallowMount(SfBanner, {
      propsData: {
        buttonText,
      },
    });
    expect(component.find(".sf-banner__call-to-action").text()).toEqual(
      buttonText
    );
  });
  it("renders call to action slot text when passed", () => {
    const msg = "<p class='testSlot'>HelloWorld</p>";
    const component = shallowMount(SfBanner, {
      slots: {
        "call-to-action": msg,
      },
    });
    expect(component.find(".sf-banner__button").exists()).toBe(false);
    expect(component.find(".testSlot").exists()).toBe(true);
  });
});
