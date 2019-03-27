import { shallowMount } from "@vue/test-utils";
import SfBanner from "@/components/molecules/SfBanner/SfBanner.vue";

describe("SfBanner.vue", () => {
  it("renders a banner", () => {
    const component = shallowMount(SfBanner);
    expect(component.contains(".sf-banner")).toBe(true);
  });

  it("renders title slot text when passed", () => {
    const msg = "HelloWorld";
    const component = shallowMount(SfBanner, {
      slots: {
        title: msg
      }
    });
    expect(component.find(".sf-banner__title").text()).toMatch(msg);
  });

  it("renders subtitle slot text when passed", () => {
    const msg = "HelloWorld";
    const component = shallowMount(SfBanner, {
      slots: {
        subtitle: msg
      }
    });
    expect(component.find(".sf-banner__subtitle").text()).toMatch(msg);
  });

  it("renders description slot text when passed", () => {
    const msg = "HelloWorld";
    const component = shallowMount(SfBanner, {
      slots: {
        description: msg
      }
    });
    expect(component.find(".sf-banner__description").text()).toMatch(msg);
  });

  it("renders button slot text when passed", () => {
    const msg = "HelloWorld";
    const component = shallowMount(SfBanner, {
      slots: {
        button: msg
      }
    });
    expect(component.find(".sf-banner__button").text()).toMatch(msg);
  });
  
});
