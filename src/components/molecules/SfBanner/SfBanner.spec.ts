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
    expect(component.find(".sf-banner").text()).toContain(msg);
  });

  it("renders subtitle slot text when passed", () => {
    const msg = "HelloWorld";
    const component = shallowMount(SfBanner, {
      slots: {
        subtitle: msg
      }
    });
    expect(component.find(".sf-banner").text()).toContain(msg);
  });

  it("renders description slot text when passed", () => {
    const msg = "HelloWorld";
    const component = shallowMount(SfBanner, {
      slots: {
        description: msg
      }
    });
    expect(component.find(".sf-banner").text()).toContain(msg);
  });

  // it("renders button prop text when passed", () => {
  //   const msg = "HelloWorld";
  //   const component = shallowMount(SfBanner, {
  //     propsData: {
  //       buttonText: msg
  //     }
  //   });
  //   expect(component.find(".sf-banner__button").exists()).toBe(true)
  // });

  it("renders call to action slot text when passed", () => {
    const msg = "<p class='testSlot'>HelloWorld</p>";
    const component = shallowMount(SfBanner, {
      slots: {
        "call-to-action": msg
      }
    });
    expect(component.find(".sf-banner__button").exists()).toBe(false)
    expect(component.find('.testSlot').exists()).toBe(true)
  });
  
});
